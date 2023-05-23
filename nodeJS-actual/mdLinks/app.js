import colors from 'colors';

import { inputEntered, optionList, pause } from "./helpersCLI.js";
const loopPause = (route) => {
  return optionList()
    .then((resp) => {
      let opt = resp.option
      switch (opt) {
        case '1':
          break;
      }
      if (opt !== '5') {
        return pause().then(() => {
          console.log('\n');
          console.log(colors.magenta('The path entered is: ') + colors.cyan(route));
          return loopPause(route)
        });
      }
    })
}


const main = () => {
  inputEntered()
    .then(resp => {
      const route = resp.newPath;

      loopPause(route)
      // console.log(route)
      // do {
      //   optionList(route)
      //     .then(res => {
      //       let opt = '';

      //       opt = res.option
      //       console.log({ opt });

      //       // await pausa();
      //       // if (opt !== '0') {
      //       //   pause().then();
      //     });
      // } while (opt !== '0')


    })

}
main();
