const fs = require('fs');
console.log('Iniciado');

// leyendo un archivo de forma asincrona
// fs.readFile('data.txt', 'utf-8', (error, data) => {
//   if (error) {
//     console.log(`Error ${error}`)
//   } else {
//     console.log(data)
//   }
// })
console.log('finalizado');
// fs.rename('data.txt', 'data_renombrado.txt', (error) => {
//   if (error) throw error;
//   console.log('Renombrado!')

// })



// agregando texto a un archivo
// fs.appendFile('data.txt', '\n Gracias', (error, data) => {
//   if (error) console.log('Error ' + error)
// })


// borrando archivos
// fs.unlink('data2.txt', (error) => {
//   if (error) throw error;
//   console.log('Eliminado');
// })


// creando una copia de un archivo existente
// fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

// para leer directorio
fs.readdir('../file-system', (error, files) => {
  files.forEach((file) => {
    console.log(file);
  })
})
console.log(fs.readdirSync('../'));
fs.readdirSync('../').forEach(file => {
  console.log(file);
})