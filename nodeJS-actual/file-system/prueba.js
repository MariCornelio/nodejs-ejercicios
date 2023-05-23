// const { message } = require('./file.js');
// const path = require('path');
// console.log(path.join(__dirname, "./file.js"));

// console.log(message)
// console.log(__dirname);
// // console.log(path);
// console.log(path.isAbsolute('/index.js'))
// console.log(path.resolve('index.js'))
// console.log(path.resolve());
const Fs = require('fs');
const Path = require('path');
const traverseSync = dir => {
  return {
    path: dir,
    children: Fs.readdirSync(dir).map(file => {
      const path = Path.join(dir, file);
      return Fs.lstatSync(path).isDirectory()
        ? traverseSync(path)
        : { path };
    })
  }
};

console.log(traverseSync(__dirname))
console.log(__dirname)