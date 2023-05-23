let stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0
  };
console.log(process.argv)
function saveAge(age) {
  person.age = age;
  if (person.age >= 18) {
    stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n ')
  } else {
    stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n ')

  }
  // es el metodo que permite salir del stream
  process.exit();
}
function saveName(name) {
  person.name = name;
  // vuelvo a preguntar
  let question = 'Hola ' + person.name + ' ¿Cuantos años tienes? ';
  quiz(question, saveAge)
}
function quiz(question, callback) {
  stdin.resume();
  stdout.write(question + ': ');

  stdin.once('data', (res) => {
    callback(res.toString().trim());
  })
}
// que en la terminal de comandos see codifico utf8
stdin.setEncoding('utf8');
quiz('¿Como te llamas?', saveName);
