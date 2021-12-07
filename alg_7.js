// algoritmo numero 7

// Problema de los conejos #7


const fibonacci = (n) => {

    //  f = f(n-1) + f(n-2)

    // Base case
    if (n < 2) {
        return n;
    }

    // Recursive case
    // 4  3
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Rama con 6
// rama de 5 y rama 4

// Rama con 5
// rama de 4 y rama 3


fibonacci(12);