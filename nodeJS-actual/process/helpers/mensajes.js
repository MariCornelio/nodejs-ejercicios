require('colors');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción     '.green);
    console.log('==========================='.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tarea`);
    console.log(`${'3.'.green} Listar tareas comletadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} salir \n`);

    // const readLine = require('readline', createInterface({
    //   // le decimos a node que tenemos que pausar la ejecucion porque va recibir datos
    //   input: process.stdin,
    //   output: process.stdout
    // }))
    const rl = readline.createInterface({ input, output });
    rl.question('Seleccione una opción: ', (answer) => {
      // console.log({ answer });
      rl.close();
      resolve(answer);
    })

  })



}
const pausa = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input, output });
    rl.question(`\n Presione ${'ENTER'.green} para continuar... \n`, (answer) => {
      rl.close();
      resolve();
    })
  })

}

module.exports = {
  mostrarMenu,
  pausa
}