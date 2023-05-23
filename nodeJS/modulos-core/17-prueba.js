// import { readFile } from 'node:fs/promises';
let readFile = require('node:fs/promises')

// import { readFile } from 'node:fs/promises';
try {
  const filePath = new URL('./package.json');
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}