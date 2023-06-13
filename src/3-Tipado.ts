// Tipado dentro de TS

var laboratorio: string = "Gory";
console.log(laboratorio);

var laboratorio = "Xian";
console.log(laboratorio);

const ejemplo: boolean = true;

// No se puede ingresar datos de otro tipo en una misma variable
//var laboratorio = 50;

// TIPADOS INFERIDOS

var ejemplo2 = 34;
let ejemplo3 = {};
//var ejemplo2 = true;

// NOMBRES DE VARIABLES IGUALES
// ESTRUCTURA DE LA FUNCION ANONIMA AUTOEJECUTADA
(() => {
  let productName  = "Telefono";
  let productPrice = 499.99;
  productPrice.toFixed;

  console.log(productName);
  console.log(productPrice);

  productName = "Licuadora";
  productName.toLowerCase();
  productPrice = 300;

  console.log(productName);
  console.log(productPrice);
}
)();
