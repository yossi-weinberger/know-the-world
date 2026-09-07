(function (global) {
  'use strict';
  function stripNikud(text) {
    return text.normalize('NFD').replace(/[\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7]/g, '').normalize('NFC');
  }
  function searchText(text) {
    return stripNikud(text).toLocaleLowerCase('he-IL').replace(/[־–—-]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function matchesCountry(country, query) {
    const haystack = searchText([country.nameHe, country.nameEn, country.code, country.capital.he, country.capital.en].join(' '));
    return searchText(query).split(' ').every(word => haystack.includes(word));
  }
  function formatPopulation(n) {
    if (!Number.isFinite(n) || n < 0) return 'לא זמין';
    const format = (value, digits) => value.toLocaleString('he-IL', { maximumFractionDigits: digits });
    if (n >= 1e9) return `כ־${format(n / 1e9, 2)} מִילְיַארְד`;
    if (n >= 1e6) return `כ־${format(n / 1e6, 1)} מִילְיוֹן`;
    if (n >= 1e3) return `כ־${format(n / 1e3, 1)} אֶלֶף`;
    return format(n, 0);
  }
  function formatRate(rate) {
    if (!Number.isFinite(rate) || rate <= 0) return null;
    if (rate < 0.001) return 'פחות מ־0.001 ₪';
    return `≈ ${rate.toLocaleString('he-IL', { maximumFractionDigits: rate >= 100 ? 0 : rate >= 10 ? 1 : rate >= 1 ? 2 : 3 })} ₪`;
  }
  function parseRates(data, now = new Date()) {
    if (!data || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) throw new Error('Invalid rate date');
    const timestamp = Date.parse(data.date + 'T00:00:00Z');
    if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== data.date || timestamp > now.getTime() + 86400000) throw new Error('Invalid rate date');
    if (!data.ils || typeof data.ils !== 'object' || Array.isArray(data.ils)) throw new Error('Invalid rates');
    const rates = { ils: 1 };
    for (const [code, rate] of Object.entries(data.ils)) {
      if (/^[a-z]{3}$/.test(code) && typeof rate === 'number' && Number.isFinite(rate) && rate > 0 && Number.isFinite(1 / rate)) rates[code] = 1 / rate;
    }
    if (Object.keys(rates).length < 2) throw new Error('No usable rates');
    rates.ils = 1;
    return { rates, date: data.date, stale: now.getTime() - timestamp > 7 * 86400000 };
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }
  function escapeData(value) {
    if (typeof value === 'string') return escapeHTML(value);
    if (Array.isArray(value)) return value.map(escapeData);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, escapeData(val)]));
    return value;
  }
  function safeURL(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? escapeHTML(url.href) : '#'; } catch { return '#'; }
  }
  function createCountryNumberMap(index) {
    if (!Array.isArray(index)) throw new Error('Invalid country index');
    return new Map(index.map(entry => [entry.code, entry.number]));
  }
  function sortCountriesByNumber(countries, index) {
    const numbers = createCountryNumberMap(index);
    return [...countries].sort((a, b) => (numbers.get(a.code) ?? 999) - (numbers.get(b.code) ?? 999));
  }
  const api = { stripNikud, searchText, matchesCountry, formatPopulation, formatRate, parseRates, escapeHTML, escapeData, safeURL, createCountryNumberMap, sortCountriesByNumber };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.CountryHelpers = api;
})(typeof window !== 'undefined' ? window : globalThis);
