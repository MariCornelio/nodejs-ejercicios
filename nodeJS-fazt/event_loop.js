// console.log('first');
// setTimeout(() => {
//   console.log('second');
// }, 0);

// console.log('third');
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Bienvenido a mi servidor');
    return res.end();
  }
  if (req.url === '/about') {
    res.end('About page')

  }
  res.end('Not Found');
})

server.listen(3000);
console.log('port: http://127.0.0.1:3000');