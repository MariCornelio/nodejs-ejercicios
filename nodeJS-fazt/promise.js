const { readFile } = require('fs');

// es codigo asincrono pasado como promesa
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

// promesas
// getText('./data/four.txt')
//   .then(result => console.log(result))
//   .then(() => getText('./data/first.txt'))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// asyn y await

async function read() {
  try {
    const result = await getText('./data/first.txt');
    console.log(result);
    const result2 = await getText('./data/second.txt');
    console.log(result2);
    throw new Error('Este es un error que no se esperaba')
    const result3 = await getText('./data/third.txt');

    console.log(result3);
  } catch (error) {
    console.log(error);
  }

}

read()


