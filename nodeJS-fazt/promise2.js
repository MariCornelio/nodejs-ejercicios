const { readFile } = require('fs');
const { promisify } = require('util');

const readFilepromise = promisify(readFile);
async function read() {
  try {
    const result = await readFilepromise('./data/first.txt', 'utf-8');
    const result2 = await readFilepromise('./data/second.txt', 'utf-8');
    const result3 = await readFilepromise('./data/third.txt', 'utf-8');

    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }

}

read();