
// problema 4
// a yb
// 1/a y 1/b las inversas 
// 1/promedio al media armonica

const media_armonica = (a,b) => {
    const aI = 1 / a;
    const bI = 1 / b;
    const prom = (aI + bI) / 2;

    return 1 / prom;
}

console.log (media_armonica(6,9));
