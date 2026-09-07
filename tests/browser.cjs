// Optional browser verification. Requires Playwright and an installed Edge/Chromium browser.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { root } = require('../scripts/lib/data.cjs');

async function main() {
  const out = path.join(root, 'artifacts');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.country-card').count(), 150);
    assert.equal(await page.locator('.country-map-number').count(), 150);
    assert.equal(await page.locator('.route-line').count(), 150);
    assert.equal(await page.locator('.info-cell-icon, .info-icon').count(), 0);
    assert.equal(await page.locator('.country-card').first().getAttribute('data-code'), 'IL');
    assert.equal(await page.locator('.country-card').first().locator('.country-map-number').innerText(), '1');
    const images = await page.locator('.card-flag').evaluateAll(imgs => ({ total: imgs.length, loaded: imgs.filter(i => i.complete && i.naturalWidth > 0).length }));
    assert.equal(await page.locator('.card-sources, .population-source, .pending-note').count(), 0);
    assert.equal(await page.locator('.hello-label').first().innerText(), 'שָׁלוֹם:');
    await page.screenshot({ path: path.join(out, 'desktop.png') });
    const search = page.locator('#country-search');
    await search.fill('ישראל');
    assert.equal(await page.locator('.country-card').count(), 1);
    await search.fill('יִשְׂרָאֵל');
    assert.equal(await page.locator('.country-card').count(), 1);
    await search.fill('BULGARIA');
    assert.equal(await page.locator('.country-card').count(), 1);
    assert.equal(await page.locator('.country-map-number').innerText(), '52');
    assert((await page.locator('.country-card').innerText()).includes('אֵירוֹ'));
    await search.fill('xyz-no-country');
    assert.equal(await page.locator('.country-card').count(), 0);
    assert(await page.locator('.empty-state').isVisible());
    await search.fill('');
    await page.locator('[data-cont="Oceania"]').click();
    assert.equal(await page.locator('.country-card').count(), 6);
    await search.fill('ישראל');
    assert.equal(await page.locator('.country-card').count(), 0);
    await search.fill('');
    await page.locator('[data-cont="all"]').click();
    await page.setViewportSize({ width: 390, height: 844 });
    await search.fill('Sri Lanka');
    await page.waitForFunction(() => document.querySelectorAll('.country-card').length === 1);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Mobile horizontal overflow');
    assert.equal(await page.locator('#cards-grid').evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 1);
    await page.screenshot({ path: path.join(out, 'mobile.png'), fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await search.fill('');
    await page.goto(pathToFileURL(path.join(root, 'booklet.html')).href, { waitUntil: 'load' });
    await page.waitForFunction(() => window.BOOKLET_READY === true);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.booklet-sheet').count(), 26);
    assert.equal(await page.locator('.booklet-panel').count(), 52);
    assert.equal(await page.locator('.country-card').count(), 150);
    assert.equal(await page.locator('.country-map-number').count(), 150);
    assert.equal(await page.locator('.route-line').count(), 150);
    assert.equal(await page.locator('.story-label').count(), 300);
    assert.equal(await page.locator('.country-card[data-code="IL"] .country-map-number').innerText(), '1');
    assert.equal(await page.locator('.country-card[data-code="VN"] .country-map-number').innerText(), '15');
    assert.equal(await page.locator('.continent-opener').count(), 6);
    assert.equal(await page.locator('.content-panel').first().locator('.country-card').count(), 4);
    assert.equal(await page.locator('#cards-preview .country-card').count(), 8);
    const cardGrid = await page.locator('.content-panel').first().evaluate((panel) => {
      const cards = [...panel.querySelectorAll('.country-card')];
      const x = new Set(cards.map(card => Math.round(card.getBoundingClientRect().x)));
      const y = new Set(cards.map(card => Math.round(card.getBoundingClientRect().y)));
      return { columns: x.size, rows: y.size };
    });
    assert.deepEqual(cardGrid, { columns: 2, rows: 2 }, 'Each A5 panel must use a 2x2 card grid');
    assert.equal(await page.locator('[data-logical-page="2"] .beseata-dishmaya').textContent(), 'בס״ד');
    const openerImages = await page.locator('.continent-photo-frame img').evaluateAll((items) => ({
      total: items.length,
      loaded: items.filter(item => item.complete && item.naturalWidth > 0).length,
    }));
    assert.deepEqual(openerImages, { total: 6, loaded: 6 });
    const coverImages = await page.locator('.cover-art').evaluateAll((items) => ({
      total: items.length,
      loaded: items.filter(item => item.complete && item.naturalWidth > 0).length,
    }));
    assert.deepEqual(coverImages, { total: 2, loaded: 2 });
    const imposition = await page.locator('.booklet-sheet').evaluateAll((sheets) => sheets.map(sheet => ({
      physicalSheet: Number(sheet.dataset.physicalSheet),
      face: sheet.dataset.face,
      left: Number(sheet.dataset.leftPage),
      right: Number(sheet.dataset.rightPage),
    })));
    const imposedPages = imposition.flatMap(side => [side.left, side.right]).sort((a, b) => a - b);
    assert.deepEqual(imposedPages, Array.from({ length: 52 }, (_, index) => index + 1), 'Every logical page must be imposed exactly once');
    for (let sheet = 0; sheet < 13; sheet += 1) {
      const front = imposition[sheet * 2];
      const back = imposition[sheet * 2 + 1];
      assert.deepEqual(front, { physicalSheet: sheet + 1, face: 'front', left: 1 + sheet * 2, right: 52 - sheet * 2 });
      assert.deepEqual(back, { physicalSheet: sheet + 1, face: 'back', left: 51 - sheet * 2, right: 2 + sheet * 2 });
    }
    assert.equal(await page.locator('.card-sources, .population-source, .pending-note').count(), 0);
    const overflows = await page.locator('.country-card').evaluateAll(cards => cards.filter(card => card.scrollHeight > card.clientHeight + 1 || card.scrollWidth > card.clientWidth + 1).map(card => card.dataset.code));
    assert.deepEqual(overflows, [], `Booklet card overflow: ${overflows.join(', ')}`);
    const panelOverflows = await page.locator('.booklet-panel').evaluateAll((panels) => panels
      .filter((panel) => panel.scrollHeight > panel.clientHeight + 1 || panel.scrollWidth > panel.clientWidth + 1)
      .map((panel) => panel.dataset.logicalPage));
    assert.deepEqual(panelOverflows, [], `Booklet panels overflow: ${panelOverflows.join(', ')}`);

    await page.locator('#cards-preview').screenshot({ path: path.join(out, 'booklet-eight-cards.png') });
    await page.locator('.cover-page').screenshot({ path: path.join(out, 'booklet-cover-front.png') });
    await page.locator('.back-cover').screenshot({ path: path.join(out, 'booklet-cover-back.png') });
    await page.locator('[data-logical-page="2"]').screenshot({ path: path.join(out, 'booklet-first-page.png') });
    await page.locator('.notes-page').screenshot({ path: path.join(out, 'booklet-memory-page.png') });
    await page.locator('.quiz-page').screenshot({ path: path.join(out, 'booklet-quiz-page.png') });
    await page.locator('.source-note').screenshot({ path: path.join(out, 'booklet-card-guide-page.png') });
    await page.locator('.continent-opener').first().screenshot({ path: path.join(out, 'booklet-continent-opener.png') });
    await page.goto(pathToFileURL(path.join(root, 'design-inspiration.html')).href, { waitUntil: 'load' });
    await page.waitForFunction(() => window.DESIGN_INSPIRATION_READY === true);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('.journal-card').count(), 4);
    const conceptOverflows = await page.locator('.journal-card').evaluateAll(cards => cards
      .filter(card => card.scrollHeight > card.clientHeight + 1 || card.scrollWidth > card.clientWidth + 1)
      .map(card => card.dataset.code));
    assert.deepEqual(conceptOverflows, [], `Design concept card overflow: ${conceptOverflows.join(', ')}`);
    await page.locator('main').screenshot({ path: path.join(out, 'design-inspiration.png') });
    assert.deepEqual(errors, []);
    const summary = { browser: browser.version(), checkedAt: new Date().toISOString(), countries: 150, flags: images, continentOpeners: openerImages, covers: coverImages, logicalPages: 52, pageErrors: errors, a4PrintSides: 26,
      scenarios: ['illustrated travel-notebook card design', 'vintage front and back covers', 'six vintage continent illustrations', 'route motif and typographic fact grid', 'clean child-facing cards', 'stable map numbers 1-150', 'map number retained after search', 'hello heading', 'Hebrew search with/without nikud', 'English case-insensitive search', 'continent + search intersection', 'empty result', 'Bulgaria EUR', 'mobile long capital no overflow', '26 A4 booklet print sides', 'right-bound imposition across all 52 pages', 'six continent opener pages', 'eight cards per full A4 side', 'four cards per A5 panel', 'booklet card overflow', 'four-card travel-journal design concept'] };
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(summary, null, 2));
    console.log(JSON.stringify(summary, null, 2));
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
