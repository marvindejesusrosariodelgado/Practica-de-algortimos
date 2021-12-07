// libreta de ahorro

// cuenta total
// interes mensuales 
 // meses de ahorros 

// lo que ingreso
let cantidadDeAhorros = prompt(`Introuzca su cantidad de ahorros`)*1;
const tasaDeIntereses = prompt(`Introuzca su taza der intereses`)*1;
 // meses de ahorros 
let mesesDeAhorros = prompt(`introduzca los meses`)*1;
// ganacias mensuales 
let gananciasPorMes = cantidadDeAhorros * (tasaDeIntereses/100)
let totalGanancias  = mesesDeAhorros * gananciasPorMes;
let montoFinalDeAhorro = totalGanancias + cantidadDeAhorros;

console.log(montoFinalDeAhorro);