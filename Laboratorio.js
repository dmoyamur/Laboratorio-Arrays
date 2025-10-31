const prompt = require("prompt-sync")();

console.log(" Ejercicio 1. Calculadora de Propinas");
function calcularPropina(total, porcentaje){
    propinac = total + (total * porcentaje);
    return propinac;
};
total = Number(prompt("Ingrese el total de la factura: "));
propina= Number(prompt("Ingrese el porcentaje de la propina: "));
valoraPagar = calcularPropina(total,propina);
console.log("El valor total a pagar es de: "+ valoraPagar);


console.log("\n Ejercicio 2. Validar Contraseña");
function validarContraseña(contraseña){
    let validacion = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return validacion.test(contraseña)
};
let contraseña = prompt("Ingrese una contraseña: ");
while (!validarContraseña(contraseña)){
    console.log("Contraseña no valida, la contraseña debe tener minimo 8 caracteres, un número y una mayúscula.");
    contraseña = prompt("Intente nuevamente: ");
};
console.log("Contraseña válida");

console.log("\n Ejercicio 3. Buscar Producto en Inventario")
function buscarProducto(nombre,inventario){
    let producto = inventario.find(item=>item.nombre.toLowerCase()=== nombre.toLowerCase())
    return producto || null
};
const inventario = [
    {nombre:"zapatos", saldo:20},
    {nombre:"medias", saldo:15},
    {nombre:"camisa", saldo:12},
    {nombre:"camiseta", saldo:2},
];
let buscar=prompt("Ingrese un producto: ");
let datosProducto = buscarProducto(buscar,inventario);
console.log(datosProducto);

console.log("\n Ejercicio 4. Calcular Promedio de Notas")
function calcularPromedio(notas){
    let suma = 0;
    for (let i =0; i<notas.length; i++){
        suma += notas[i];
    };
    let promedio = suma/notas.length;
    return promedio.toFixed(2);
}
let cantNotas = Number(prompt("Cuántas notas desea ingresar?: "));
let notas =[];
for (let i=0; i<cantNotas; i++){
    let nota = Number(prompt("Ingrese la nota "+(i+1)+" :"));
    notas.push(nota)
}
let promedio = calcularPromedio(notas);
console.log("El promedio de las notas es: "+ promedio);

console.log("\n Ejercicio 5 Filtrar usuarios por edad");
function filtrarUsuarios (usuarios, edadMinima){
    let mayores = {};
    for (let nombre in usuarios){
        if (usuarios[nombre]>=edadMinima){
            mayores[nombre]=usuarios[nombre];
        }
    }
    return mayores;
};
const usuarios ={
    maria:12,
    juan:20,
    luis:15,
    teresa:22,
    diana:30
};
let edadMinima = Number(prompt("Ingrese la edad mínima para ingresar: "));
let filtro = filtrarUsuarios(usuarios,edadMinima);
console.log(filtro);

console.log ("\n Ejercicio 6. Contador Palabras");
function contarPalabras(frase) {
    let cantpalabras = frase.trim().split(/\s+/);
    return cantpalabras.length;
}
let frase_usu = prompt("Ingrese una frase: ");
cantidadPalabras = contarPalabras(frase_usu);
console.log("La frase ingresada contiene "+cantidadPalabras+" palabras");

console.log("\n Ejercicio 7. Simulador de Cajero Automático");
function retirarDinero(saldo,monto){
    if (monto > saldo){
        console.log("FONDOS INSUFICIENTES");
    }
    else{
        let nuevosaldo = saldo - monto;
        console.log("Saldo disponible: "+nuevosaldo);
        return nuevosaldo;
    }
}
let saldo = Number(prompt("Ingrese su saldo actual: "));
let monto = Number(prompt("Ingrese el valor a retirar: "));

nuevosaldo1 = retirarDinero(saldo,monto);

console.log("\n Ejercicio 8. Cambio Moneda");
function convertirMoneda(montoCOP, monedaDestino){
    monedaDestino = monedaDestino.toUpperCase();
    let conversion = montoCOP / trm[monedaDestino];
    return conversion.toFixed(2);
};
const trm = {
    USD: 3500,
    EUR: 4300
};
let montoCOP = Number(prompt("Ingrese el monto a cambiar: "));
let monedaDestino = prompt("Ingrese la moneda para realizar la conversión (USD / EUR): ");
let cambiotrm = convertirMoneda(montoCOP,monedaDestino);
console.log(montoCOP+" pesos equivalen a "+cambiotrm + monedaDestino);