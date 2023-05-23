/*
Buffers
  Una tira de bytes (datos binarios)
  Similar a un array de enteros
  Tamaño fijo
  manipular datos directamente
    Sockets
    Streams
    Implementar protocolos complejos
    Manipulación de ficheros/imágenes
    criptografía
*/

let buf = new Buffer.alloc(100),
  buf2 = new Buffer.alloc(26),
  str = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii');
console.log(buf,
  buf.toString('ascii'),
  str,
  str.length + 'caracteres',
);