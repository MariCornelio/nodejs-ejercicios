/*
Streams
  Chorros de información que se transmiten en pedazos(chunks)
  3tipos: lectura/escritura/duplex 
  Instancias EventEmitter
  Acceso asíncrono
  es raro crear strreams directamente
  pero muchos recursos nos ofrecen este interfaz
  Detras de muchos mecanismos de NodeJS
     stdin/stdout 
     request de HTTP
     sockets
     manipulación de ficheros/imágenes
*/

let fs = require('fs'),
  readStream = fs.createReadStream('assets/nombres.txt'),
  writeStream = fs.createWriteStream('assets/nombres_copia.txt');
readStream.pipe(writeStream)

readStream.on('data', (chunks) => {
  console.log('He leido:', chunks.length, 'caracteres')
})
readStream.on('end', () => {
  console.log('Termine de leer el archivo')
})
