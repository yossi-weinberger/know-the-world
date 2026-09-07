const test = require('node:test');
const assert = require('node:assert/strict');
const { stripNikud, searchText, matchesCountry, formatPopulation, formatRate, parseRates, escapeHTML, safeURL, createCountryNumberMap, sortCountriesByNumber } = require('../js/helpers.js');
test('population keeps meaningful precision for small countries and large totals', () => {
  assert.equal(formatPopulation(1500000), 'כ־1.5 מִילְיוֹן');
  assert.equal(formatPopulation(9900000), 'כ־9.9 מִילְיוֹן');
  assert.equal(formatPopulation(1460000000), 'כ־1.46 מִילְיַארְד');
  assert.equal(formatPopulation(999999), 'כ־1,000 אֶלֶף');
  assert.equal(formatPopulation(NaN), 'לא זמין');
});
test('search ignores Hebrew vocalization while preserving word separation', () => {
  assert.equal(stripNikud('דְּרוֹם־קוֹרֵיאָה'), 'דרום־קוריאה');
  assert.equal(searchText('דְּרוֹם־קוֹרֵיאָה'), 'דרום קוריאה');
  const c = { nameHe: 'יִשְׂרָאֵל', nameEn: 'Israel', code: 'IL', capital: { he: 'יְרוּשָׁלַיִם', en: 'Jerusalem' } };
  for (const query of ['ישראל', 'יִשְׂרָאֵל', 'ISRAEL', 'ירושלים', '']) assert(matchesCountry(c, query));
  assert(!matchesCountry(c, 'Japan'));
});
test('very small currency values never display a zero price', () => {
  assert.equal(formatRate(0.00004), 'פחות מ־0.001 ₪');
  for (const n of [NaN, Infinity, -2, 0, null]) assert.equal(formatRate(n), null);
});
test('currency direction is foreign unit to ILS, malformed rates are ignored', () => {
  const parsed = parseRates({ date: '2026-09-07', ils: { usd: 0.25, eur: '0.2', bad: -1, nil: 0, inf: Infinity, ils: 2 } }, new Date('2026-09-07T12:00:00Z'));
  assert.deepEqual(parsed.rates, { ils: 1, usd: 4 });
  assert.equal(parsed.stale, false);
});
test('stale and invalid rate dates cannot masquerade as current', () => {
  const now = new Date('2026-09-07T12:00:00Z');
  assert(parseRates({ date: '2026-08-01', ils: { usd: 0.25 } }, now).stale);
  for (const date of ['2026-02-30', 'tomorrow', '2099-01-01']) assert.throws(() => parseRates({ date, ils: { usd: 0.25 } }, now));
  assert.throws(() => parseRates({ date: '2026-09-07', ils: {} }, now));
});
test('text and links are escaped for HTML rendering', () => {
  assert.equal(escapeHTML('<img onerror="x">'), '&lt;img onerror=&quot;x&quot;&gt;');
  assert.equal(safeURL('javascript:alert(1)'), '#');
  assert.equal(safeURL('https://example.com/?a=1&b=2'), 'https://example.com/?a=1&amp;b=2');
});
test('country map numbers stay stable when a filtered list is sorted', () => {
  const index = [{ number: 1, code: 'IL' }, { number: 2, code: 'UZ' }, { number: 3, code: 'AZ' }];
  assert.deepEqual([...createCountryNumberMap(index)], [['IL', 1], ['UZ', 2], ['AZ', 3]]);
  assert.deepEqual(sortCountriesByNumber([{ code: 'AZ' }, { code: 'IL' }], index).map(country => country.code), ['IL', 'AZ']);
});
