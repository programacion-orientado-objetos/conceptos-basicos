import auto from "./auto.js";

let auto1 = new auto("Ford", 2000, "rojo", 100);
let auto2 = new auto("Honda", 1999, "negro");
let auto3 = new auto("Toyota", 2018);

auto1.encender();
auto1.avanzar(50, 1.5);
auto1.apagar();
auto1.avanzar(50, 1.5);

auto2.encender();
auto2.apagar();

auto3.encender();
auto3.apagar();

console.log(`Kilometraje ${auto1.kilometraje}`);
auto1.kilometraje = 5;
console.log(`Kilometraje ${auto1.kilometraje}`);