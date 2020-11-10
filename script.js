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
  // creción de usuarios dentro del array usuarios
  usuarios[0] = new Usuario( "usuario1", "spain", 199, true );
  usuarios[1] = new Usuario( "usuario2", "france", 0, false );
  usuarios[2] = new Usuario( "usuario3", "spain", 537, false );
  usuarios[3] = new Usuario( "usuario4", "italy", 1004, true );
  usuarios[4] = new Usuario( "usuario5", "spain", 250, false );
  usuarios[5] = new Usuario( "usuario6", "ireland", 799, true );
  usuarios[6] = new Usuario( "usuario7", "spain", 3345, false );
}



// función que filtra los usuarios. V1
const filterUsersV1 = () => {
  // filtrado de usuarios
  for (let i = 0; i < usuarios.length; i++) {
    if ((usuarios[i].country == 'spain') && (usuarios[i].money > 200)) {
      usuariosFiltrado.push(usuarios[i]);
    }
  }
}

// función que filtra los usuarios. V2
const filterUsersV2 = () => {
  // se filtran los usuarios y se asigna al array de usuarios filtrados
  usuariosFiltrado = usuarios.filter(user => user.country == 'spain' && user.money > 200);
}



// función auxiliar para mostrar usuarios.
const mostrarUsuarios = () => {
  // mostrar usuarios del array
  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);
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

  // -- Creación de usuarios --
  createUsers();

  // -- Filtrado de usuarios --
  // filterUsersV1();
  filterUsersV2();

  // -- Mostrar usuarios --
  console.log("Usuarios:");
  console.log(usuarios);
  //console.log(mostrarUsuarios());


  // -- Mostrar usuarios filtrados --
  console.log("Usuarios filtrados:");
  console.log(usuariosFiltrado);
  //console.log(mostrarUsuariosFiltrados());
}