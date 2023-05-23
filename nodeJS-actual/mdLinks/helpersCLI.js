import inquirer from 'inquirer';
import colors from 'colors';

export const inputEntered = () => {
  const path = [
    {
      type: 'input',
      name: 'newPath',
      message: 'Enter your path to get started: ',
    }
  ];
  console.clear()
  console.log(`${colors.bgMagenta('Linkval')} : ${colors.cyan('Capture links, run validations and more')}`)
  console.log(colors.magenta('=================================================='))
  return inquirer.prompt(path)
}

export const optionList = () => {
  const options = [
    {
      type: 'list',
      name: 'option',
      message: 'Select an option',
      choices: [
        {
          value: '1',
          name: colors.red('Default')
        },
        {
          value: '2',
          name: '-- validate'
        },
        {
          value: '3',
          name: '-- stats'
        },
        {
          value: '4',
          name: '-- validate --stats'
        },
        {
          value: '5',
          name: colors.red('Exit')
        },
      ]
    }
  ]

  return inquirer.prompt(options);
}

export const pause = () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar... `
    }
  ]
  console.log('\n');
  return inquirer.prompt(question);
}