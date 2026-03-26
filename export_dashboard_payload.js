const fs = require('fs');

const partnersText = fs.readFileSync(process.argv[2], 'utf8');
const artefactsText = fs.readFileSync(process.argv[3], 'utf8');
const ctx = Function(
  partnersText + '\n' + artefactsText + '\n' +
  'return { partners: MAP_PARTNERS, aliases: ORG_ARTEFACT_ALIASES, overrides: ORG_ARTEFACT_OVERRIDES };'
)();

function cloneArtefactItems(items) {
  return (items || []).map(function(item) {
    return { name: item.name, kind: item.kind, desc: item.desc };
  });
}

function cloneSourceItems(items) {
  return (items || []).map(function(item) {
    return { label: item.label, url: item.url };
  });
}

function buildArtefactRecord(partner) {
  const canonical = ctx.aliases[partner.name] || partner.name;
  const override = ctx.overrides[canonical] || null;
  if (override) {
    return {
      name: partner.name,
      canonicalName: canonical,
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
        desc: 'Current dashboard evidence places the organisation in ' + partner.geo + ' and tracks its active states as ' + partner.states.join(', ') + '.'
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

const partners = ctx.partners;
const records = partners.map(buildArtefactRecord);
const researched = records.filter(function(record) {
  return record.status === 'researched';
});

const payload = {
  summary: [
    { metric: 'Total partners', value: partners.length },
    { metric: 'Deep researched entries', value: researched.length },
    { metric: 'Baseline entries', value: partners.length - researched.length },
    { metric: 'Tangible artefacts logged', value: researched.reduce((n, r) => n + r.tangible.length, 0) },
    { metric: 'Intangible artefacts logged', value: researched.reduce((n, r) => n + r.intangible.length, 0) },
    { metric: 'Source links logged', value: researched.reduce((n, r) => n + r.sources.length, 0) }
  ],
  partners: partners.map(function(partner) {
    return {
      name: partner.name,
      geo: partner.geo,
      category: partner.cat,
      description: partner.desc,
      states: partner.states.join(', '),
      state_count: partner.states.length,
      lat: partner.lat,
      lon: partner.lon
    };
  }),
  overview: records.map(function(record) {
    return {
      name: record.name,
      canonical_name: record.canonicalName,
      status: record.status,
      summary: record.summary,
      geo: record.atlas.geo,
      category: record.atlas.cat,
      description: record.atlas.desc,
      states: record.atlas.states.join(', '),
      state_count: record.atlas.states.length,
      tangible_count: record.tangible.length,
      intangible_count: record.intangible.length,
      source_count: record.sources.length
    };
  }),
  tangible: records.flatMap(function(record) {
    return record.tangible.map(function(item) {
      return {
        organisation: record.name,
        canonical_name: record.canonicalName,
        status: record.status,
        artefact_name: item.name,
        kind: item.kind,
        description: item.desc
      };
    });
  }),
  intangible: records.flatMap(function(record) {
    return record.intangible.map(function(item) {
      return {
        organisation: record.name,
        canonical_name: record.canonicalName,
        status: record.status,
        artefact_name: item.name,
        kind: item.kind,
        description: item.desc
      };
    });
  }),
  sources: records.flatMap(function(record) {
    return record.sources.map(function(item) {
      return {
        organisation: record.name,
        canonical_name: record.canonicalName,
        status: record.status,
        source_label: item.label,
        source_url: item.url
      };
    });
  })
};

process.stdout.write(JSON.stringify(payload));
