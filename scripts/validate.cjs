const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { root, files, loadCountries } = require('./lib/data.cjs');

function validate(countries, sources, snapshot) {
  const seen = new Set();
  const continents = new Set(['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania']);
  const observations = new Map(snapshot.response[1].map(row => [row.country.id, row]));
  const required = ['nameHe', 'nameEn', 'continentHe', 'capital.en', 'capital.he', 'currency.nameHe', 'currency.symbol', 'representative.emoji', 'representative.titleHe', 'representative.descriptionHe', 'funFactHe', 'hello.text', 'hello.pronunciationHe'];
  const get = (c, key) => key.split('.').reduce((value, part) => value?.[part], c);
  const url = value => { const parsed = new URL(value); assert.equal(parsed.protocol, 'https:'); };
  for (const c of countries) {
    assert.match(c.code, /^[A-Z]{2}$/);
    assert(!seen.has(c.code), `Duplicate country ${c.code}`);
    seen.add(c.code);
    assert(continents.has(c.continent), `Unknown continent for ${c.code}`);
    for (const field of required) assert(typeof get(c, field) === 'string' && get(c, field).trim(), `${c.code}: missing ${field}`);
    assert.match(c.currency.code, /^[A-Z]{3}$/);
    for (const code of c.currency.additionalCodes || []) assert.match(code, /^[A-Z]{3}$/);
    assert(Array.isArray(c.languages) && c.languages.length > 0, `${c.code}: no languages`);
    assert(c.languages.every(l => typeof l.he === 'string' && l.he.trim()), `${c.code}: invalid language`);
    assert(Number.isSafeInteger(c.population.value) && c.population.value > 0, `${c.code}: invalid population`);
    assert.equal(c.population.year, 2025, `${c.code}: inconsistent population year`);
    assert.equal(c.population.value, observations.get(c.code)?.value, `${c.code}: population differs from snapshot`);
    assert.equal(c.population.retrievedAt, snapshot.retrievedAt);
    assert.equal(c.population.datasetUpdatedAt, snapshot.response[0].lastupdated);
    url(c.population.sourceUrl);
    assert(Array.isArray(sources[c.code]) && sources[c.code].length >= 2, `${c.code}: missing sources`);
    for (const source of sources[c.code]) {
      assert(source.title && source.label && source.fields.length, `${c.code}: incomplete provenance`);
      assert.match(source.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
      url(source.url);
    }
  }
  return countries.length;
}

function main() {
  const countries = loadCountries();
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'data/sources.js'), 'utf8'), context);
  const snapshot = JSON.parse(fs.readFileSync(path.join(root, 'audit/sources/world-bank-population-2025.json')));
  const n = validate(countries, context.window.COUNTRY_SOURCES, snapshot);
  const iso = fs.readFileSync(path.join(root, 'audit/sources/iso-4217-list-one-2026-09-07.xml'), 'utf8');
  const validCodes = new Set([...iso.matchAll(/<Ccy>([A-Z]{3})<\/Ccy>/g)].map(m => m[1]));
  for (const c of countries) for (const code of [c.currency.code, ...(c.currency.additionalCodes || [])]) assert(validCodes.has(code), `${c.code}: absent ISO currency ${code}`);
  const baseline = JSON.parse(fs.readFileSync(path.join(root, 'audit/original-countries.json')));
  assert.deepEqual(countries.map(c => c.code).sort(), baseline.map(c => c.code).sort(), 'Country lost or added without updating scope');
  const corrections = JSON.parse(fs.readFileSync(path.join(root, 'audit/corrections.json')));
  const applied = new Set();
  for (const row of corrections) {
    assert(!applied.has(row.code + ':' + row.field), 'Duplicate correction');
    applied.add(row.code + ':' + row.field);
    const actual = row.field.split('.').reduce((value, key) => value[key], countries.find(c => c.code === row.code));
    assert.deepEqual(actual, row.replacement, `${row.code}.${row.field}: documented correction not applied`);
  }
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const file of [...files.map(f => 'data/' + f), 'data/country-map-index.js', 'js/helpers.js']) assert(html.includes(`src="${file}"`), `Main view script missing: ${file}`);
  assert(!html.includes('data/sources.js'), 'Maintenance sources must not be loaded in the child-facing view');
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
  const booklet = fs.readFileSync(path.join(root, 'booklet.html'), 'utf8');
  for (const file of [...files.map(f => 'data/' + f), 'data/country-map-index.js', 'js/helpers.js', 'js/booklet.js']) assert(booklet.includes(`src="${file}"`), `Booklet script missing: ${file}`);
  assert(!booklet.includes('data/sources.js'), 'Maintenance sources must not be loaded in the booklet');
  const bookletImages = ['cover-front.png', 'cover-back.png', 'asia.png', 'europe.png', 'africa.png', 'north-america.png', 'south-america.png', 'oceania.png'];
  for (const image of bookletImages) assert(fs.existsSync(path.join(root, 'assets', 'booklet-images', image)), `Missing booklet image: ${image}`);
  const indexContext = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'data/country-map-index.js'), 'utf8'), indexContext);
  const countryIndex = indexContext.window.COUNTRY_MAP_INDEX;
  assert.equal(countryIndex.length, countries.length, 'Country map index length differs from country data');
  assert.deepEqual(Array.from(countryIndex, item => item.number), Array.from({ length: countries.length }, (_, index) => index + 1), 'Country map numbers must be consecutive');
  assert.deepEqual(Array.from(countryIndex, item => item.code).sort(), countries.map(country => country.code).sort(), 'Country map index codes differ from country data');
  assert.equal(countryIndex[0].code, 'IL', 'Israel must retain map number 1');
  console.log(`Validated ${n} unique countries, population snapshots, ISO codes, sources, ${corrections.length} applied corrections and browser script syntax.`);
}

if (require.main === module) { try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; } }
module.exports = { validate };
