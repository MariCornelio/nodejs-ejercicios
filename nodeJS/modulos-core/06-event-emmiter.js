let EventEmitter = require('events').EventEmitter,
  pub = new EventEmitter();

pub
  .on('myevent', (message) => {
    console.log(message);
  })

  // once es un evento que se ejecuta una vez
  .once('myevent', (message) => {
    console.log('Se emite la primera vez:' + message)
  });

pub.emit('myevent', 'soy un emisor de eventos');
pub.emit('myevent', 'Volviendo a emitir');
pub.removeAllListeners('myevent');
pub.emit('myevent', 'Volviendo a emitir por tercera vez');