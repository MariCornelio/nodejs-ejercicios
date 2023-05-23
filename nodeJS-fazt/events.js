const EventEmitter = require('events')

const customEmitter = new EventEmitter();
customEmitter.on('response', (data, secondData) => {
  console.log('recibido')
  console.log(data);
  console.log(secondData);
})

customEmitter.emit('response', 'Hola mari', [1, 2, 3]);
// customEmitter.emit('response', 30);
// customEmitter.emit('response', [1, 2, 3]);
// customEmitter.emit('response', { a: 'chau' });