// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import 'colors';
// const inquirer = require('inquirer');


const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea'
      },
      {
        value: '2',
        name: '2. Listar tarea'
      },
      {
        value: '3',
        name: '3. Listar tareas completadas'
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes'
      },
      {
        value: '5',
        name: '5. Completar tareas(s)'
      },
      {
        value: '6',
        name: '6. Borrar tarea'
      },
      {
        value: '0',
        name: '0. Salir'
      },
    ],
  }

]

export const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción     '.green);
  console.log('==========================='.green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
}

export const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar... `
    }
  ]
  console.log('\n')
  await inquirer.prompt(question);
}
// module.exports = {
//   inquirerMenu,
// }
