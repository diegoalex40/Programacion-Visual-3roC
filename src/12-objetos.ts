// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
  data:{
    userName : string,
    email: string
  }
  ):void
   {
    console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`)
}

imprimirDatos({userName: "Diego", email: "dyanez@yavirac.edu.ec"});

// OBJETOS COMO TIPOS

type userData = {
    nombre : string,
    edad :  number,
    email: string,
    telefono : string
}

let userList : userData[] = [];

userList.push({
   nombre: "Diego",
   edad: 29,
   email : "dyanez@yavirac.edu.ec",
   telefono : "0999999"
  });

  userList.push({
    nombre: "Alexander",
    edad: 59,
    email : "afloresz@yavirac.edu.ec",
    telefono : "09556599"
   });

console.log(userList);
