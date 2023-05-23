// Single Thread

function singleThread() {
  process.argv[2] = 'Estamos aprendiendo node.js';
  process.argv[3] = 19;
  process.argv[4] = null;
  process.argv[5] = true;

  console.log('-------------------------------')
  console.log('El proceso de NodeJS')
  console.log('Id del proceso...' + process.pid);
  console.log('Titulo...' + process.title);
  console.log('Directorio del nodo...' + process.execPath);
  console.log('Directorio Actual...' + process.cwd());
  console.log('Version del nodo...' + process.version);
  console.log('Versiones de dependencias...' + process.versions);
  console.log('Plataforma(S.O.)' + process.platform);
  console.log('Arquitectura(S.O.)' + process.arch);
  console.log('Tiempo activo del nodo' + process.uptime());
  console.log('Argumentos del proceso' + process.argv);
  console.log('-------------------------------')
  // console.log(process.argv[0], process.argv[1])
  for (const key in process.argv) {
    console.log(process.argv[key])
  }
}
singleThread()
