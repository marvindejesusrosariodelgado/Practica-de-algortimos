//declaracion de variables

function tripoTriang(a, b, c){
if (a == b && b == c) {
 
   console.log("triangulo es Equilatero");

} else if (a == b && b != c  ) {
    console.log("triangulo isoseles");

} else if(a!=b&&b==c ){
    console.log("triangulo isoseles");
    
    
}else {
    console.log("triangulo escaleno");

}
}
tripoTriang(10, 10, 10);


