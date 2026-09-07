const fs = require('node:fs');
const path = require('node:path');
const { root, updateCountryProperty } = require('./lib/data.cjs');
const corrections = JSON.parse(fs.readFileSync(path.join(root, 'audit/corrections.json'), 'utf8'));
for (const row of corrections) updateCountryProperty(row.code, row.field, row.replacement);
console.log(`Applied ${corrections.length} documented field corrections. Run npm run audit to regenerate provenance.`);
