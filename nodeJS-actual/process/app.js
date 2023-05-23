
import { inquirerMenu, pausa } from './helpers/2tarea.js';


const main = async () => {
  // console.clear();

  // console.log('Hola')
  let opt = '';
  do {
    opt = await inquirerMenu();
    console.log({ opt });

    // await pausa();
    if (opt !== '0') await pausa();
  } while (opt !== '0')
  // mostrarMenu();
}

main();