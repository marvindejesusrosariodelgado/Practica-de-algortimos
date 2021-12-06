// libreta de ahorro

// cuenta total
// lo que ingreso
// interes mensuales 
 // meses de ahorros 
// meta de ahorros(100,000)


let cantidadDeAhorros = prompt(`Introuzca su cantidad de ahorros`)*1;
const tasaDeIntereses = prompt(`Introuzca su taza der intereses`)*1;
let mesesDeAhorros = prompt(`introduzca los meses`)*1;
let gananciasPorMes = cantidadDeAhorros * (tasaDeIntereses/100)
let totalGanancias  = mesesDeAhorros * gananciasPorMes;
let montoFinalDeAhorro = totalGanancias + cantidadDeAhorros;

console.log(montoFinalDeAhorro);