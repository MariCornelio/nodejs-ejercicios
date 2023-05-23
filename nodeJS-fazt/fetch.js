// Promesas

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => console.log(data))




// funciones asincronas

// 1.confuncion
// async function loaddata() {

// 2. sin funcion
// si le quita node tambien lo lee porque en tu package.json pusiste type:module;
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
// }
// loaddata()