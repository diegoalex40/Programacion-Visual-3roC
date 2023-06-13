import {Product, Data} from "./producto.module"

export let user:Data [] = [];
export let productos:Product [] = [];
export let contador:number = 0;

export function llenarData(producto: Product):number {
  contador += producto.stock;
  productos.push(producto);
  return contador
}
