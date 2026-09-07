const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '../..');
const files = ['asia.js', 'europe.js', 'africa.js', 'north-america.js', 'south-america.js', 'oceania.js'];

function loadCountries() {
  const context = vm.createContext({ window: {} });
  for (const file of files) {
    new vm.Script(fs.readFileSync(path.join(root, 'data', file), 'utf8'), { filename: file })
      .runInContext(context, { timeout: 1000 });
  }
  return JSON.parse(JSON.stringify(context.window.COUNTRIES_DATA));
}

// Keep the human-edited country files readable; change only the requested property.
function updateCountryProperty(code, property, value) {
  if (!/^[A-Z]{2}$/.test(code) || !/^[a-zA-Z]+(?:\.[a-zA-Z]+)?$/.test(property)) throw new Error('Invalid field');
  for (const file of files) {
    const full = path.join(root, 'data', file);
    let text = fs.readFileSync(full, 'utf8');
    const start = text.indexOf(`    code: "${code}",`);
    if (start < 0) continue;
    const end = text.indexOf('\n  },', start);
    const block = text.slice(start, end);
    const parts = property.split('.');
    const indent = parts.length === 2 ? '      ' : '    ';
    const pattern = new RegExp(`^${indent}${parts.at(-1)}: .*$`, 'm');
    if (!pattern.test(block)) throw new Error(`Missing ${code}.${property}`);
    const replacement = `${indent}${parts.at(-1)}: ${JSON.stringify(value)},`;
    text = text.slice(0, start) + block.replace(pattern, () => replacement) + text.slice(end);
    fs.writeFileSync(full, text);
    return;
  }
  throw new Error(`Unknown country ${code}`);
}

module.exports = { root, files, loadCountries, updateCountryProperty };
