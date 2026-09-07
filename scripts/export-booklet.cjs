const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const { root } = require('./lib/data.cjs');

async function main() {
  const outputDirectory = path.join(root, 'output', 'pdf');
  const outputPath = path.join(outputDirectory, 'know-the-world-booklet-a4-print.pdf');
  fs.mkdirSync(outputDirectory, { recursive: true });

  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 900, height: 1100 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.join(root, 'booklet.html')).href, { waitUntil: 'load' });
    await page.waitForFunction(() => window.BOOKLET_READY === true);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => [...document.images].every(image => image.complete));

    const printSideCount = await page.locator('.booklet-sheet').count();
    const logicalPageCount = await page.locator('.booklet-panel').count();
    const cardCount = await page.locator('.country-card').count();
    const overflowCodes = await page.locator('.country-card').evaluateAll(cards => cards
      .filter(card => card.scrollHeight > card.clientHeight + 1 || card.scrollWidth > card.clientWidth + 1)
      .map(card => card.dataset.code));
    const failedFlags = await page.locator('.card-flag').evaluateAll(images => images
      .filter(image => image.naturalWidth === 0)
      .map(image => image.closest('.country-card')?.dataset.code));
    const failedContinentImages = await page.locator('.continent-photo-frame img').evaluateAll(images => images
      .filter(image => image.naturalWidth === 0)
      .map(image => image.getAttribute('src')));
    const failedCovers = await page.locator('.cover-art').evaluateAll(images => images
      .filter(image => image.naturalWidth === 0)
      .map(image => image.getAttribute('src')));

    if (printSideCount !== 26) throw new Error(`Expected 26 A4 print sides, got ${printSideCount}`);
    if (logicalPageCount !== 52) throw new Error(`Expected 52 logical pages, got ${logicalPageCount}`);
    if (cardCount !== 150) throw new Error(`Expected 150 cards, got ${cardCount}`);
    if (overflowCodes.length) throw new Error(`Overflow in cards: ${overflowCodes.join(', ')}`);
    if (failedFlags.length) throw new Error(`Flags failed to load: ${failedFlags.join(', ')}`);
    if (failedContinentImages.length) throw new Error(`Continent images failed to load: ${failedContinentImages.join(', ')}`);
    if (failedCovers.length) throw new Error(`Cover images failed to load: ${failedCovers.join(', ')}`);
    if (errors.length) throw new Error(`Page errors: ${errors.join('; ')}`);

    await page.pdf({
      path: outputPath,
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    });
    console.log(JSON.stringify({ outputPath, printSideCount, logicalPageCount, cardCount, overflowCodes, failedFlags, failedContinentImages, failedCovers }, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
