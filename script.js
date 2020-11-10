// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER. SE PUEDE RECORRER CON CUALQUIER BUCLE.
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!



// declaración array
let usuarios = [];

// declaración array filtrado
let usuariosFiltrado = [];

// constructor objeto usuario
function Usuario( name, country, money, premiumAccount )
{
    this.name = name;
    this.country = country;
    this.money = money;
    this.premiumAccount = premiumAccount;
}


const createUsers = () => {
  // declaraciones de usuarios
  let user1 = new Usuario( "usuario1", "spain", 199, true );
  let user2 = new Usuario( "usuario2", "france", 0, false );
  let user3 = new Usuario( "usuario3", "spain", 537, false );
  let user4 = new Usuario( "usuario4", "italy", 1004, true );
  let user5 = new Usuario( "usuario5", "spain", 250, false );
  let user6 = new Usuario( "usuario6", "ireland", 799, true );
  let user7 = new Usuario( "usuario7", "spain", 3345, false );

  // asignación de usuarios dentro del array
  usuarios[0] = user1;
  usuarios[1] = user2;
  usuarios[2] = user3;
  usuarios[3] = user4;
  usuarios[4] = user5;
  usuarios[5] = user6;
  usuarios[6] = user7;  
}


// función auxiliar para mostrar usuarios.
const mostrarUsuarios = () => {
  // mostrar usuarios del array
  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);
  }
}


// función que filtra los usuarios
const filterUsers = () => {
  // filtrado de usuarios
  for (let i = 0; i < usuarios.length; i++) {
    if ((usuarios[i].country == 'spain') && (usuarios[i].money > 200)) {
      usuariosFiltrado.push(usuarios[i]);
    }
  }
}

// función auxiliar para mostrar usuarios filtrados.
const mostrarUsuariosFiltrados = () => {
  // mostrar usuarios del array filtrado
  for (let i = 0; i < usuariosFiltrado.length; i++) {
    console.log(usuariosFiltrado[i]);
  }
}



window.addEventListener('load',onLoad);

function onLoad(){

  // Creación de usuarios
  createUsers();

  // Filtrado de usuarios
  filterUsers();

  // Mostrar usuarios
  console.log("Usuarios:");
  console.log(usuarios);
  //console.log(mostrarUsuarios());


  // Mostrar usuarios filtrados
  console.log("Usuarios filtrados:");
  console.log(usuariosFiltrado);
  //console.log(mostrarUsuariosFiltrados());
}