import inquirer from 'inquirer';

inquirer.prompt(
  [{
    type: 'input',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    default: 'red'
  },
  {
    type: 'input',
    name: 'website',
    message: '¿Cual es tu sitio web?',
  },
  {
    type: 'list',
    name: 'colors',
    message: 'Elige tu color favorito',
    choices: ['rojo', 'azul', 'amarillo']
  },
  {
    type: 'expand',
    name: 'piedras',
    message: 'Elige tu piedra preciosa',
    choices: [
      {
        key: 'a',
        value: 'oro'
      },
      {
        key: 'b',
        value: 'diamante'
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'streamers',
    message: 'Elige tu streamer favorito',
    choices: [
      'quackity',
      'auron',
      'mariana'
    ]
  },
  {
    type: 'password',
    name: 'secret',
    message: 'Password:',
    mask: '*'
  },
  {
    type: 'editor',
    name: 'codigo',
    message: 'Escribe tu código: ',

  },
  ])
  .then(answer => {
    console.log({ answer });
  })


