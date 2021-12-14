// algortimo numero 16

// variables

let horas = prompt(`Inserte el numero de horas por semana`)*1;
let salarioPorHora = prompt(`inserte su salario por hora`)*1;
let horasExtras = prompt(`inserte sus horas extras`)*1
let pagaDeHorasExtras = 1.5*salarioPorHora;
let salarioNeto = 0;

// operaciones 
let horasExtrasPago = horasExtras*pagaDeHorasExtras;
let salarioBruto = (horas*salarioPorHora)+(pagaDeHorasExtras)


if (salarioBruto >= 1100) {
    let retenciones1 = 0.1*salarioBruto;
salarioNeto = salarioBruto-retenciones1;
} 
if (salarioBruto >= 2600) {
let retenciones2 = 0.15*salarioBruto;
salarioNeto = salarioBruto-retenciones2;
} else {
    let retenciones3 = 0.25*salarioBruto;
    salarioNeto = salarioBruto-retenciones3;
}
let retenciones =salarioBruto-salarioNeto;

// Imprimir por consola

console.log(salarioBruto);
console.log(salarioNeto);
console.log(retenciones);


