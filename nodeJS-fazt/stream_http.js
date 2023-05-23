const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, resp) => {
  const fileStream = createReadStream('./data/bigFile.txt', {
    encoding: 'utf8'
  })

  fileStream.on('data', (chunk) => {
    fileStream.pipe(resp);
  })
  fileStream.on('error', (error) => {
    console.log(error);
  })
})
server.listen(3000);
console.log('http://localhost:3000')