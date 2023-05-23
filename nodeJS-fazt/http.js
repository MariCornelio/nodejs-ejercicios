const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Bienvenido a server');
    return response.end();
  }
  if (request.url === '/about') {
    response.write('acerca de');
    return response.end();
  }
  // console.log(request.url);
  response.write(`
  <h1>Not Found</h1>
  <p>Esta página no se encontro</p>
  <a href="/">Volver a la pagina principal</a>`);

  response.end();
});
server.listen(3000);

console.log('servidor escuchando en el puerto 3000 : http://127.0.0.1:3000')