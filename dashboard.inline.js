
var CAT_COL = {Urban:'#16796e', Rural:'#c4921a', CnR:'#1a7847', Buildings:'#c96a28'};
var activeCat = 'all';
var activeQuery = '';
var activeView = 'atlas';
var artefactQuery = '';
var artefactMode = 'all';
var selectedPartner = null;
var selectedArtefactOrg = null;
var statesGeoJSON = null;
var geoLayer = null;  // Layer 2: highlighted states for selected partner
var selectedMarker = null;

// Init Leaflet map
var map = L.map('map',{zoomControl:true}).setView([22, 79.5], 5);

// OpenStreetMap tiles (open source)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  maxZoom:18
}).addTo(map);

// State boundaries layer (always on)
var statesLayer = null;
fetch('india_states_simple.geojson')
  .then(function(r){return r.json();})
  .then(function(gj){
    statesGeoJSON = gj;
    statesLayer = L.geoJSON(gj,{
      style:function(){return{color:'rgba(22,121,110,0.35)',weight:1,fillColor:'rgba(22,121,110,0.04)',fillOpacity:1};},
      onEachFeature:function(f,layer){
        var name = f.properties.ST_NM || f.properties.NAME_1 || '';
        if(name) layer.bindTooltip(name,{sticky:true,className:'state-tip'});
      }
    });
    if(document.getElementById('lyr-states').checked) statesLayer.addTo(map);
    if(selectedPartner) highlightStates(selectedPartner);
  })
  .catch(function(e){console.warn('State boundaries unavailable',e);});

// Cluster group for HQ markers (Layer 1)
var markers = L.markerClusterGroup({
  maxClusterRadius:40,
  spiderfyOnMaxZoom:true,
  showCoverageOnHover:false,
  iconCreateFunction:function(cluster){
    var count = cluster.getChildCount();
    var size = count<5?34:count<15?42:50;
    return L.divIcon({
      html:'<div style="background:#16796e;color:#fff;border-radius:50%;width:'+size+'px;height:'+size+'px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3)">'+count+'</div>',
      className:'',iconSize:[size,size]
    });
  }
});
map.addLayer(markers);

function makeIcon(cat,isSelected){
  var col = CAT_COL[cat]||'#16796e';
  var sz = isSelected?20:14;
  var bw = isSelected?3:2;
  var ring = isSelected?'box-shadow:0 0 0 4px '+col+'44,0 2px 8px rgba(0,0,0,.3)':'box-shadow:0 2px 6px rgba(0,0,0,.25)';
  return L.divIcon({
    html:'<div style="background:'+col+';width:'+sz+'px;height:'+sz+'px;border-radius:50%;border:'+bw+'px solid #fff;'+ring+'"></div>',
    className:'',iconSize:[sz,sz],iconAnchor:[sz/2,sz/2],popupAnchor:[0,-sz/2]
  });
}

function popupHtml(p){
  var col = CAT_COL[p.cat]||'#16796e';
  var statesText = p.states.join(', ');
  return '<strong>'+p.name+'</strong><em>'+p.geo+'</em>'+
    '<span style="display:inline-block;background:'+col+'22;color:'+col+';padding:1px 7px;border-radius:4px;font-size:.7rem;margin:4px 0">'+p.cat+'</span>'+
    '<div class="pdesc">'+p.desc+'</div>'+
    '<div class="pstates">Works in: '+statesText+'</div>';
}

function partnerMatchesQuery(p,query){
  if(!query) return true;
  var haystack = [
    p.name,
    p.geo,
    p.cat,
    p.desc,
    p.states.join(' ')
  ].join(' ').toLowerCase();
  return haystack.indexOf(query) > -1;
}

function getFiltered(){
  var query = activeQuery.trim().toLowerCase();
  return MAP_PARTNERS.filter(function(p){
    var categoryOk = activeCat==='all' || p.cat===activeCat;
    return categoryOk && partnerMatchesQuery(p,query);
  }).sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
}

function escapeHtml(text){
  return String(text||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function cloneArtefactItems(items){
  return (items||[]).map(function(item){
    return {
      name: item.name,
      kind: item.kind,
      desc: item.desc
    };
  });
}

function cloneSourceItems(items){
  return (items||[]).map(function(item){
    return {
      label: item.label,
      url: item.url
    };
  });
}

function getArtefactOverride(name){
  var canonical = ORG_ARTEFACT_ALIASES[name] || name;
  return {
    canonical: canonical,
    data: ORG_ARTEFACT_OVERRIDES[canonical] || null
  };
}

function buildArtefactRecord(partner){
  var overrideMeta = getArtefactOverride(partner.name);
  var override = overrideMeta.data;
  if(override){
    return {
      name: partner.name,
      canonicalName: overrideMeta.canonical,
      status: override.status || 'researched',
      summary: override.summary,
      tangible: cloneArtefactItems(override.tangible),
      intangible: cloneArtefactItems(override.intangible),
      sources: cloneSourceItems(override.sources),
      atlas: {
        geo: partner.geo,
        cat: partner.cat,
        desc: partner.desc,
        states: partner.states.slice()
      }
    };
  }
  return {
    name: partner.name,
    canonicalName: partner.name,
    status: 'pending',
    summary: 'The atlas captures this organisation\'s footprint and mission lens, but a source-by-source artefact scan has not yet been compiled into the research tab.',
    tangible: [
      {
        name: 'HQ and work geography baseline',
        kind: 'Atlas baseline',
        desc: 'Current dashboard evidence places the organisation in '+partner.geo+' and tracks its active states as '+partner.states.join(', ')+'.'
      }
    ],
    intangible: [
      {
        name: 'Mission lens',
        kind: 'Baseline description',
        desc: partner.desc
      }
    ],
    sources: [],
    atlas: {
      geo: partner.geo,
      cat: partner.cat,
      desc: partner.desc,
      states: partner.states.slice()
    }
  };
}

var ARTEFACT_RECORDS = MAP_PARTNERS.map(buildArtefactRecord).sort(function(a,b){
  if(a.status!==b.status) return a.status==='researched' ? -1 : 1;
  return a.name.localeCompare(b.name);
});

function getArtefactCounts(record){
  return {
    tangible: record.tangible.length,
    intangible: record.intangible.length,
    total: record.tangible.length + record.intangible.length
  };
}

function artefactStatusLabel(status){
  return status==='researched' ? 'Deep research' : 'Atlas baseline';
}

function artefactMatchesQuery(record,query){
  if(!query) return true;
  var text = [
    record.name,
    record.canonicalName,
    record.summary,
    record.atlas.geo,
    record.atlas.cat,
    record.atlas.desc,
    record.atlas.states.join(' '),
    record.tangible.map(function(item){ return item.name+' '+item.kind+' '+item.desc; }).join(' '),
    record.intangible.map(function(item){ return item.name+' '+item.kind+' '+item.desc; }).join(' '),
    record.sources.map(function(item){ return item.label+' '+item.url; }).join(' ')
  ].join(' ').toLowerCase();
  return text.indexOf(query) > -1;
}

function getFilteredArtefactRecords(){
  var query = artefactQuery.trim().toLowerCase();
  return ARTEFACT_RECORDS.filter(function(record){
    var modeOk = artefactMode==='all' || record.status==='researched';
    return modeOk && artefactMatchesQuery(record,query);
  });
}

function updateArtefactStats(){
  var researched = ARTEFACT_RECORDS.filter(function(record){ return record.status==='researched'; });
  var artefactCount = researched.reduce(function(total,record){
    return total + getArtefactCounts(record).total;
  },0);
  document.getElementById('a-orgs').textContent = ARTEFACT_RECORDS.length;
  document.getElementById('a-researched').textContent = researched.length;
  document.getElementById('a-items').textContent = artefactCount;
}

function renderArtefactCards(items){
  if(!items.length){
    return '<div class="artefact-empty">No named artefacts logged in this section yet.</div>';
  }
  return items.map(function(item){
    return '<div class="artefact-card">'
      +'<strong>'+escapeHtml(item.name)+'</strong>'
      +'<em>'+escapeHtml(item.kind)+'</em>'
      +'<p>'+escapeHtml(item.desc)+'</p>'
      +'</div>';
  }).join('');
}

function renderArtefactDetail(record){
  var container = document.getElementById('artefacts-detail');
  if(!record){
    container.innerHTML = '<div class="artefact-empty">No organisations match the current artefact search. Clear the search or switch back to all organisations.</div>';
    return;
  }
  var counts = getArtefactCounts(record);
  var statusClass = record.status==='researched' ? 'live' : 'pending';
  var aliasNote = record.canonicalName!==record.name
    ? '<div class="artefact-empty">This centre currently reuses the shared public artefact scan logged for '+escapeHtml(record.canonicalName)+'.</div>'
    : '';
  var pendingNote = record.status==='researched'
    ? ''
    : '<div class="artefact-empty">This is still a baseline record. It reflects the atlas footprint and mission lens, but not yet a completed source trail of named products, tools, programmes, or public resources.</div>';
  var sourcesHtml = record.sources.length
    ? '<ul>'+record.sources.map(function(source){
        return '<li><a href="'+escapeHtml(source.url)+'" target="_blank" rel="noreferrer">'+escapeHtml(source.label)+'</a></li>';
      }).join('')+'</ul>'
    : '<div class="artefact-empty">No official source trail has been attached yet for this organisation.</div>';

  container.innerHTML = ''
    +'<div class="artefacts-detail-head">'
      +'<div>'
        +'<h3>'+escapeHtml(record.name)+'</h3>'
        +'<p>'+escapeHtml(record.summary)+'</p>'
      +'</div>'
      +'<span class="artefacts-status '+statusClass+'">'+artefactStatusLabel(record.status)+'</span>'
    +'</div>'
    +'<div class="action-row" style="margin-top:14px">'
      +'<button class="secondary-btn" type="button" data-open-atlas="'+escapeHtml(record.name)+'">View on atlas</button>'
    +'</div>'
    +'<div class="focus-meta" style="margin-top:14px">HQ: '+escapeHtml(record.atlas.geo)+' | Lens: '+escapeHtml(record.atlas.cat)+' | Works in: '+escapeHtml(record.atlas.states.join(', '))+'</div>'
    +aliasNote
    +pendingNote
    +'<div class="artefacts-grid">'
      +'<div class="artefacts-section">'
        +'<h4>Tangible artefacts <span style="font-weight:400;color:var(--muted)">('+counts.tangible+')</span></h4>'
        +renderArtefactCards(record.tangible)
      +'</div>'
      +'<div class="artefacts-section">'
        +'<h4>Intangible artefacts <span style="font-weight:400;color:var(--muted)">('+counts.intangible+')</span></h4>'
        +renderArtefactCards(record.intangible)
      +'</div>'
    +'</div>'
    +'<div class="artefact-sources">'
      +'<h4>Source trail</h4>'
      +sourcesHtml
    +'</div>';
}

function updateArtefactFilterButtons(){
  document.getElementById('artefact-filter-all').classList.toggle('on',artefactMode==='all');
  document.getElementById('artefact-filter-researched').classList.toggle('on',artefactMode==='researched');
}

function renderArtefactPane(){
  updateArtefactStats();
  updateArtefactFilterButtons();
  var records = getFilteredArtefactRecords();
  var list = document.getElementById('artefacts-list');
  document.getElementById('artefact-count').textContent = '('+records.length+')';

  if(records.length && !records.some(function(record){ return record.name===selectedArtefactOrg; })){
    selectedArtefactOrg = records[0].name;
  }
  if(!records.length){
    selectedArtefactOrg = null;
    list.innerHTML = '<div class="sb-empty">No organisations match the current artefact search. Clear the search or switch to the full ledger.</div>';
    renderArtefactDetail(null);
    return;
  }

  list.innerHTML = records.map(function(record){
    var counts = getArtefactCounts(record);
    var statusClass = record.status==='researched' ? 'live' : 'pending';
    return '<div class="artefact-item'+(record.name===selectedArtefactOrg?' on':'')+'" data-name="'+escapeHtml(record.name)+'">'
      +'<div class="artefact-org">'+escapeHtml(record.name)+'</div>'
      +'<div class="sb-geo">'+escapeHtml(record.atlas.geo)+'</div>'
      +'<div class="artefact-meta">'
        +'<span class="artefact-pill '+statusClass+'">'+artefactStatusLabel(record.status)+'</span>'
        +'<span class="artefact-count">'+counts.total+' logged</span>'
      +'</div>'
      +'</div>';
  }).join('');

  var activeRecord = records.find(function(record){ return record.name===selectedArtefactOrg; }) || records[0];
  if(activeRecord && activeRecord.name!==selectedArtefactOrg) selectedArtefactOrg = activeRecord.name;
  renderArtefactDetail(activeRecord);
}

function selectArtefactOrg(name,opts){
  selectedArtefactOrg = name;
  renderArtefactPane();
  if(opts && opts.switchView) switchView('artefacts');
}

function switchView(view){
  activeView = view;
  document.querySelectorAll('.view-tab').forEach(function(tab){
    var on = tab.dataset.view===view;
    tab.classList.toggle('on',on);
    tab.setAttribute('aria-selected',on?'true':'false');
  });
  document.getElementById('pane-atlas').classList.toggle('on',view==='atlas');
  document.getElementById('pane-artefacts').classList.toggle('on',view==='artefacts');
  if(view==='artefacts'){
    if(!selectedArtefactOrg && selectedPartner) selectedArtefactOrg = selectedPartner.name;
    renderArtefactPane();
  } else {
    setTimeout(function(){
      map.invalidateSize();
      if(selectedPartner) focusMapOnPartner(selectedPartner);
      else resetMapView();
    },160);
  }
}

// State name normalization for matching GeoJSON
var STATE_ALIAS = {
  'pan india':null,'nct of delhi':'Delhi','delhi':'Delhi','delhi ncr':'Delhi',
  'karnataka':'Karnataka','maharashtra':'Maharashtra','tamil nadu':'Tamil Nadu',
  'kerala':'Kerala','telangana':'Andhra Pradesh','andhra pradesh':'Andhra Pradesh',
  'west bengal':'West Bengal','odisha':'Orissa','orissa':'Orissa','uttar pradesh':'Uttar Pradesh',
  'rajasthan':'Rajasthan','madhya pradesh':'Madhya Pradesh','gujarat':'Gujarat',
  'bihar':'Bihar','jharkhand':'Jharkhand','assam':'Assam','uttarakhand':'Uttaranchal','uttaranchal':'Uttaranchal',
  'himachal pradesh':'Himachal Pradesh','goa':'Goa','chhattisgarh':'Chhattisgarh',
  'meghalaya':'Meghalaya','arunachal pradesh':'Arunachal Pradesh','sikkim':'Sikkim',
  'nagaland':'Nagaland','mizoram':'Mizoram','haryana':'Haryana',
  'jammu & kashmir':'Jammu and Kashmir','jammu and kashmir':'Jammu and Kashmir',
  'andaman and nicobar':'Andaman and Nicobar','andaman and nicobar islands':'Andaman and Nicobar',
  'andaman & nicobar':'Andaman and Nicobar','lakshadweep':'Lakshadweep',
  'northeast india':null
};

function getStatsStateName(s){
  var lower = s.toLowerCase().trim();
  if(lower==='pan india') return null;
  if(lower==='nct of delhi') return 'Delhi';
  if(lower==='orissa') return 'Odisha';
  if(lower==='uttaranchal') return 'Uttarakhand';
  if(lower==='jammu and kashmir') return 'Jammu & Kashmir';
  if(lower==='andaman and nicobar') return 'Andaman and Nicobar Islands';
  return s.trim();
}

function updateHeaderStats(partners){
  var cities = {};
  var workStates = {};
  partners.forEach(function(p){
    var city = (p.geo||'').split(',')[0].trim();
    if(city && city.toLowerCase()!=='pan india') cities[city] = true;
    p.states.forEach(function(state){
      var label = getStatsStateName(state);
      if(label) workStates[label] = true;
    });
  });
  document.getElementById('s-total').textContent = partners.length;
  document.getElementById('s-cities').textContent = Object.keys(cities).length;
  document.getElementById('s-states').textContent = Object.keys(workStates).length;
}

function updateFocusMeta(partners){
  var bits = [];
  if(selectedPartner){
    bits.push('Focused on '+selectedPartner.name+'.');
  } else {
    bits.push('Showing '+partners.length+' partner'+(partners.length===1?'':'s')+'.');
  }
  if(activeCat!=='all') bits.push('Filter: '+(activeCat==='CnR'?'Conservation':activeCat)+'.');
  if(activeQuery.trim()) bits.push('Search: "'+activeQuery.trim()+'".');
  document.getElementById('focus-meta').textContent = bits.join(' ');
}

function setSidebarOpen(isOpen){
  document.getElementById('sidebar').classList.toggle('open',!!isOpen);
  setTimeout(function(){ map.invalidateSize(); }, 260);
}

function resetMapView(){
  var bounds = markers.getBounds();
  if(bounds && bounds.isValid()) map.fitBounds(bounds.pad(0.18), {maxZoom:5, animate:true});
  else map.setView([22,79.5],5,{animate:true});
}

function normalizeState(s){
  var lower = s.toLowerCase().trim();
  if(lower in STATE_ALIAS) return STATE_ALIAS[lower];
  return s.trim();
}

function highlightStates(partner){
  // Remove old highlight
  if(geoLayer){map.removeLayer(geoLayer);geoLayer=null;}
  if(!statesGeoJSON||!partner) return;
  var showGeo = document.getElementById('lyr-geo').checked;

  var isPanIndia = partner.states.some(function(s){return s==='Pan India';});

  if(isPanIndia){
    // Highlight all states
    geoLayer = L.geoJSON(statesGeoJSON,{
      style:function(){return{color:CAT_COL[partner.cat]||'#16796e',weight:2.5,fillColor:CAT_COL[partner.cat]||'#16796e',fillOpacity:0.15,dashArray:''};}
    });
    if(showGeo) geoLayer.addTo(map);
  } else {
    var normalized = partner.states.map(normalizeState).filter(Boolean);
    var matchedFeatures = {type:'FeatureCollection',features:[]};

    statesGeoJSON.features.forEach(function(f){
      var name = (f.properties.ST_NM||f.properties.NAME_1||'').trim();
      for(var i=0;i<normalized.length;i++){
        if(name===normalized[i]||name.toLowerCase()===normalized[i].toLowerCase()){
          matchedFeatures.features.push(f);
          break;
        }
      }
    });

    if(matchedFeatures.features.length){
      var col = CAT_COL[partner.cat]||'#16796e';
      geoLayer = L.geoJSON(matchedFeatures,{
        style:function(){return{color:col,weight:2.5,fillColor:col,fillOpacity:0.18,dashArray:''};}
      });
      if(showGeo) geoLayer.addTo(map);
    }
  }
}

function showInfoPanel(p){
  var col = CAT_COL[p.cat]||'#16796e';
  document.getElementById('ip-name').textContent = p.name;
  document.getElementById('ip-geo').textContent = 'HQ: '+p.geo;
  var catEl = document.getElementById('ip-cat');
  catEl.textContent = p.cat;
  catEl.style.background = col+'18';
  catEl.style.color = col;
  document.getElementById('ip-desc').textContent = p.desc;
  document.getElementById('ip-states').textContent = p.states.join(', ');
  document.getElementById('info-panel').classList.add('show');
}

function focusMapOnPartner(p){
  if(geoLayer && document.getElementById('lyr-geo').checked && geoLayer.getBounds && geoLayer.getBounds().isValid()){
    map.fitBounds(geoLayer.getBounds().pad(0.28), {maxZoom:6, animate:true});
  } else {
    map.flyTo([p.lat,p.lon], 6, {animate:true, duration:.6});
  }
}

function removeSelectedMarker(){
  if(selectedMarker){
    map.removeLayer(selectedMarker);
    selectedMarker = null;
  }
}

function showSelectedMarker(p){
  removeSelectedMarker();
  if(!document.getElementById('lyr-hq').checked) return;
  selectedMarker = L.marker([p.lat,p.lon],{icon:makeIcon(p.cat,true)});
  selectedMarker.bindPopup(popupHtml(p),{maxWidth:260});
  selectedMarker.addTo(map).openPopup();
}

function selectPartner(p){
  selectedPartner = p;
  selectedArtefactOrg = p.name;
  if(map.hasLayer(markers)) map.removeLayer(markers);
  showSelectedMarker(p);
  highlightStates(p);
  showInfoPanel(p);
  focusMapOnPartner(p);
  document.querySelectorAll('.sb-item').forEach(function(el){
    el.classList.toggle('active',el.dataset.name===p.name);
    el.classList.toggle('dimmed',el.dataset.name!==p.name);
  });
  updateFocusMeta(getFiltered());
  setSidebarOpen(false);
  if(activeView==='artefacts') renderArtefactPane();
}

function clearSelection(){
  selectedPartner = null;
  removeSelectedMarker();
  if(document.getElementById('lyr-hq').checked && !map.hasLayer(markers)) map.addLayer(markers);
  if(geoLayer){map.removeLayer(geoLayer);geoLayer=null;}
  document.getElementById('info-panel').classList.remove('show');
  document.querySelectorAll('.sb-item').forEach(function(el){
    el.classList.remove('active');
    el.classList.remove('dimmed');
  });
  updateFocusMeta(getFiltered());
}

function renderMarkers(){
  markers.clearLayers();
  clearSelection();
  var pts = getFiltered();

  pts.forEach(function(p){
    var m = L.marker([p.lat,p.lon],{icon:makeIcon(p.cat,false)});
    m.on('click',function(){
      selectPartner(p);
    });
    markers.addLayer(m);
  });

  // Sidebar
  var list = document.getElementById('sb-list');
  document.getElementById('sb-count').textContent = '('+pts.length+')';
  updateHeaderStats(pts);
  updateFocusMeta(pts);
  if(!pts.length){
    list.innerHTML = '<div class="sb-empty">No partners match the current search and filter combination. Clear the search or switch the portfolio lens to widen the map.</div>';
    return;
  }
  list.innerHTML = pts.map(function(p){
    var col = CAT_COL[p.cat]||'#16796e';
    return '<div class="sb-item" data-name="'+p.name.replace(/"/g,'&quot;')+'">'
      +'<div class="sb-name">'+p.name+'</div>'
      +'<div class="sb-geo">'+p.geo+'</div>'
      +'<span class="sb-cat" style="background:'+col+'18;color:'+col+'">'+p.cat+'</span>'
      +'<div class="sb-states">'+p.states.join(', ')+'</div></div>';
  }).join('');
}

// Sidebar click
document.getElementById('sb-list').addEventListener('click',function(e){
  var item = e.target.closest('.sb-item');
  if(!item) return;
  var name = item.dataset.name;
  var p = MAP_PARTNERS.find(function(x){return x.name===name;});
  if(!p) return;
  selectPartner(p);
});

document.getElementById('artefacts-list').addEventListener('click',function(e){
  var item = e.target.closest('.artefact-item');
  if(!item) return;
  selectArtefactOrg(item.dataset.name);
});

document.getElementById('artefacts-detail').addEventListener('click',function(e){
  var button = e.target.closest('[data-open-atlas]');
  if(!button) return;
  var name = button.getAttribute('data-open-atlas');
  var p = MAP_PARTNERS.find(function(item){ return item.name===name; });
  if(!p) return;
  switchView('atlas');
  selectPartner(p);
});

// Close info panel
document.getElementById('info-close').addEventListener('click',clearSelection);

document.getElementById('ip-open-artefacts').addEventListener('click',function(){
  if(selectedPartner){
    selectArtefactOrg(selectedPartner.name,{switchView:true});
  } else {
    switchView('artefacts');
  }
});

// Click on map background clears selection
map.on('click',function(e){
  // Only clear if not clicking a marker
  if(!e.originalEvent._stopped){
    clearSelection();
  }
});

// Filter pills
document.querySelectorAll('.pill').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.pill').forEach(function(b){b.classList.remove('on');});
    this.classList.add('on');
    activeCat = this.dataset.cat;
    renderMarkers();
  });
});

document.getElementById('search').addEventListener('input',function(){
  activeQuery = this.value;
  renderMarkers();
});

document.getElementById('search-clear').addEventListener('click',function(){
  activeQuery = '';
  document.getElementById('search').value = '';
  renderMarkers();
});

document.querySelectorAll('.view-tab').forEach(function(btn){
  btn.addEventListener('click',function(){
    switchView(this.dataset.view);
  });
});

document.getElementById('artefact-search').addEventListener('input',function(){
  artefactQuery = this.value;
  renderArtefactPane();
});

document.getElementById('artefact-search-clear').addEventListener('click',function(){
  artefactQuery = '';
  document.getElementById('artefact-search').value = '';
  renderArtefactPane();
});

document.getElementById('artefact-filter-all').addEventListener('click',function(){
  artefactMode = 'all';
  renderArtefactPane();
});

document.getElementById('artefact-filter-researched').addEventListener('click',function(){
  artefactMode = 'researched';
  renderArtefactPane();
});

document.getElementById('clear-focus').addEventListener('click',function(){
  clearSelection();
  resetMapView();
});

document.getElementById('sidebar-toggle').addEventListener('click',function(){
  setSidebarOpen(true);
});

document.getElementById('sidebar-close').addEventListener('click',function(){
  setSidebarOpen(false);
});

// Layer toggles
document.getElementById('lyr-hq').addEventListener('change',function(){
  if(this.checked){
    if(selectedPartner) showSelectedMarker(selectedPartner);
    else if(!map.hasLayer(markers)) map.addLayer(markers);
  } else {
    if(map.hasLayer(markers)) map.removeLayer(markers);
    removeSelectedMarker();
  }
});
document.getElementById('lyr-states').addEventListener('change',function(){
  if(!statesLayer) return;
  if(this.checked) map.addLayer(statesLayer);
  else map.removeLayer(statesLayer);
});
document.getElementById('lyr-geo').addEventListener('change',function(){
  if(!geoLayer) return;
  if(this.checked) map.addLayer(geoLayer);
  else map.removeLayer(geoLayer);
});

// Move layer toggle into the map container after map init
setTimeout(function(){
  var mapDiv = document.getElementById('map');
  mapDiv.appendChild(document.getElementById('layer-toggle'));
  mapDiv.appendChild(document.getElementById('info-panel'));
},0);

// Go
renderMarkers();
renderArtefactPane();
