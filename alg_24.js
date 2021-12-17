// algortimo #24
function hanoi(n, origen, auxiliar, destino) {
    if (n == 1) {
        console.log(`Mover disco 1 de ${origen} a ${destino}`);
    } else {
        hanoi(n - 1, origen, destino, auxiliar);
        console.log(`Mover disco ${n} de ${origen} a ${destino}`);
        hanoi(n - 1, auxiliar, origen, destino);
    }
}

console.log(hanoi(3, 'A', 'B', 'C'));