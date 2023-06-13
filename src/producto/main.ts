import {llenarData, productos, contador} from "./producto.service"

llenarData({
  precio: 10,
  nombre : "Flash",
  stock : 6
});
console.log(productos[0]);

llenarData({
  precio: 60,
  nombre : "Camara",
  stock : 10
});

llenarData({
  precio: 200,
  nombre : "Celular",
  stock : 180
})
console.log(productos[2]);
console.log(productos);

console.log(contador);
