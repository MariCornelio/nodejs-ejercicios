const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt');
// console.log(first);
// console.log(second.toString());
// const title = 'Este contenido es añadido';
// fs.writeFileSync('./data/four.txt', title, {
//   flag: 'a'
// })

// este código es asincrono pero callback
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
  fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);
    fs.writeFile('./data/newFile.txt', 'archivo creado desde fs.write', (err, data) => {
      console.log(err);
      console.log(data);
    })
  })
})
