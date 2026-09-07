// Offline by default. Fetching a new snapshot and applying it are separate explicit commands.
const fs = require('node:fs');
const path = require('node:path');
const { root, loadCountries, updateCountryProperty } = require('./lib/data.cjs');

async function main() {
  const [mode = '--check', yearArg = '2025'] = process.argv.slice(2);
  const year = Number(yearArg);
  if (!['--fetch', '--check', '--apply'].includes(mode) || !Number.isInteger(year) || year < 1960 || year >= new Date().getFullYear()) {
    throw new Error('Usage: node scripts/population.cjs [--fetch|--check|--apply] YEAR (completed year)');
  }
  const file = path.join(root, `audit/sources/world-bank-population-${year}.json`);
  if (mode === '--fetch') {
    const url = `https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?date=${year}&format=json&per_page=400&source=2`;
    const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`World Bank HTTP ${res.status}`);
    const response = await res.json();
    validateSnapshot(response, year);
    const snapshot = { retrievedAt: new Date().toISOString().slice(0, 10), url, response };
    fs.mkdirSync(path.dirname(file), { recursive: true });
    // Never overwrite reviewed evidence. Save a candidate for review when it already exists.
    const target = fs.existsSync(file) ? file.replace('.json', '.candidate.json') : file;
    fs.writeFileSync(target, JSON.stringify(snapshot, null, 2) + '\n', { flag: 'wx' });
    console.log(`Saved ${target}. Review before applying; no country data changed.`);
    return;
  }
  const snapshot = JSON.parse(fs.readFileSync(file, 'utf8'));
  validateSnapshot(snapshot.response, year);
  const rows = new Map(snapshot.response[1].map(row => [row.country.id, row]));
  const countries = loadCountries();
  const changes = countries.map(c => {
    const row = rows.get(c.code);
    if (!row || !Number.isSafeInteger(row.value) || row.value <= 0) throw new Error(`No population for ${c.code}; nothing applied`);
    return { code: c.code, old: c.population, population: {
      value: row.value, year, source: 'World Bank — SP.POP.TOTL',
      sourceUrl: `https://data.worldbank.org/indicator/SP.POP.TOTL?locations=${c.code}`,
      retrievedAt: snapshot.retrievedAt, datasetUpdatedAt: snapshot.response[0].lastupdated,
    } };
  });
  const differences = changes.filter(c => JSON.stringify(c.old) !== JSON.stringify(c.population));
  if (mode === '--apply') {
    for (const c of differences) updateCountryProperty(c.code, 'population', c.population);
    console.log(`Applied ${differences.length} populations for ${year} from the saved snapshot.`);
  } else {
    console.log(`${countries.length} countries checked against ${year}; ${differences.length} differences.`);
    if (differences.length) { console.log(differences.map(c => c.code).join(', ')); process.exitCode = 1; }
  }
}

function validateSnapshot(response, year) {
  if (!Array.isArray(response) || response[0]?.pages !== 1 || !Array.isArray(response[1]) || response[1].length !== Number(response[0].total)) throw new Error('Incomplete World Bank response');
  const seen = new Set();
  for (const row of response[1]) {
    if (row.indicator?.id !== 'SP.POP.TOTL' || row.date !== String(year) || seen.has(row.country?.id)) throw new Error('Unexpected or duplicate observation');
    seen.add(row.country.id);
  }
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
