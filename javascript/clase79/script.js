// Qué es un event handler
// Eventos de mouse y teclado
// El objeto Event
// Propagación de eventos (bubbling)
// stopPropagation

// // Callbacks
// const suma = (value1, value2, callback) => {
//   callback(value1 + value2);
// };

// suma(10, 12, (resultado) => console.log(`La suma es ${resultado}`));

// const personajes = getInhabitants();

// const personas = ["Sabrina", "Matias", "Adrian"];

// const animales = ["Perro", "Zorro", "Gato"];

// const filter2 = (array, find, callback) => {
//   for (data of array) {
//     if (data.includes(find)) {
//       callback(data); // callback hace referencia a fn
//     }
//   }
// };

// // const fn = (persona) => {
// //   console.log("Este es un resultado ", persona);
// // };

// // const fn2 = (persona) => {
// //   console.log("Este es otro resultado", persona)
// // }

// const filter = (array, prop, find, callback) => {
//   for (data of array) {
//     if (data[prop].includes(find)) {
//       callback(data);
//     }
//   }
// };

// filter(personajes, "hair_color", "Pink", (personaje) => {
//   console.log(personaje);
// });
// console.log("------------------");
// filter(personajes, "name", "rome", (personaje) => {
//   console.log(personaje);
// });

const btn = document.querySelector("#btn-enviar");
const tabla = document.getElementById("personas");

const agregar = (name, email) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.innerHTML = name;
  td2.innerHTML = email;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody = tabla.getElementsByTagName("tbody")[0];
  tbody.appendChild(tr);
};

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  agregar("Adrian", "asd@asd.com");
});


const formAddUsers = document.querySelector('#form-add-users');

formAddUsers.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(this.elements)
})
