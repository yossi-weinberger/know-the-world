const fs = require('node:fs');
const path = require('node:path');
const { root, loadCountries } = require('./lib/data.cjs');
const { stripNikud } = require('../js/helpers.js');

const CONTINENT_ORDER = {
  Asia: 0,
  Europe: 1,
  Africa: 2,
  'North America': 3,
  'South America': 4,
  Oceania: 5,
};

function sortCountries(list) {
  return [...list].sort((a, b) => {
    if (a.code === 'IL') return -1;
    if (b.code === 'IL') return 1;
    const continentDifference = (CONTINENT_ORDER[a.continent] ?? 99) - (CONTINENT_ORDER[b.continent] ?? 99);
    if (continentDifference) return continentDifference;
    return stripNikud(a.nameHe).localeCompare(stripNikud(b.nameHe), 'he');
  });
}

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const countries = loadCountries();
const sourcePath = path.join(root, 'data', 'country-map-index.js');

function readExistingCodes() {
  if (!fs.existsSync(sourcePath) || process.argv.includes('--rebuild')) return null;
  const source = fs.readFileSync(sourcePath, 'utf8');
  const start = source.indexOf('[');
  const end = source.lastIndexOf(']');
  if (start < 0 || end < start) throw new Error('Cannot read the existing country map index');
  return JSON.parse(source.slice(start, end + 1)).map(item => item.code);
}

const existingCodes = readExistingCodes();
const countriesByCode = new Map(countries.map(country => [country.code, country]));
if (existingCodes) {
  const actualCodes = [...countriesByCode.keys()].sort();
  const indexedCodes = [...existingCodes].sort();
  if (new Set(existingCodes).size !== existingCodes.length || JSON.stringify(actualCodes) !== JSON.stringify(indexedCodes)) {
    throw new Error('Country codes changed. Review the change, then run with --rebuild to assign a new sequence.');
  }
}

const orderedCountries = existingCodes
  ? existingCodes.map(code => countriesByCode.get(code))
  : sortCountries(countries);

const index = orderedCountries.map((country, position) => ({
  number: position + 1,
  code: country.code,
  nameHe: country.nameHe,
  nameEn: country.nameEn,
  continent: country.continent,
  continentHe: country.continentHe,
}));

if (index.length !== 150 || new Set(index.map(item => item.code)).size !== 150) {
  throw new Error('Country index must contain 150 unique country codes');
}

const js = `window.COUNTRY_MAP_INDEX = Object.freeze(${JSON.stringify(index, null, 2)});\n`;
const json = `${JSON.stringify(index, null, 2)}\n`;
const csvRows = [
  ['number', 'code', 'nameHe', 'nameEn', 'continent', 'continentHe'],
  ...index.map(item => [item.number, item.code, item.nameHe, item.nameEn, item.continent, item.continentHe]),
];
const csv = `\uFEFF${csvRows.map(row => row.map(csvCell).join(',')).join('\r\n')}\r\n`;
const markdown = [
  '# מפתח המדינות למפה',
  '',
  'המספרים קבועים ומשמשים בכרטיסי החוברת ובמפה.',
  '',
  '| מספר | מדינה | English | קוד | יבשת |',
  '|---:|---|---|:---:|---|',
  ...index.map(item => `| ${item.number} | ${item.nameHe} | ${item.nameEn} | ${item.code} | ${item.continentHe} |`),
  '',
].join('\n');

fs.mkdirSync(path.join(root, 'output'), { recursive: true });
fs.writeFileSync(sourcePath, js);
fs.writeFileSync(path.join(root, 'output', 'country-map-index.json'), json);
fs.writeFileSync(path.join(root, 'output', 'country-map-index.csv'), csv);
fs.writeFileSync(path.join(root, 'output', 'COUNTRY_MAP_INDEX_HE.md'), markdown);

console.log(`${existingCodes ? 'Refreshed' : 'Created'} stable map index for ${index.length} countries${process.argv.includes('--rebuild') ? ' (renumbered)' : ''}.`);
