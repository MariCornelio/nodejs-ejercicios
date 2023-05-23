import express from 'express';

const app = express();
// cuanso te visiten en tu pagina principal vas a decir:
app.get('/', (req, resp) => {
  resp.send(' <h1>Bienvenido</h1> ')
})
app.get('/about', (req, resp) => {
  resp.send(' <h1>About</h1> ')
})
app.listen(3000);
console.log('http://localhost:3000')