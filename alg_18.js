

function tripoTriang(a, b, c) {

   if (a == b && b == c) {
      if (a == c) {
       console.log(`El triangulo es Equilatero`);
      }
 
   } else { 
     if (a==b) {
       console.log(`El triangulo es isosceles`);
     } else {
        if (b == c){
          console.log(`El triangulo es isosceles`);
 
        } else {
           if (a == c) {
             console.log(`El triangulo es isosceles`);
 
           }
        }
 
     }
 
      }
 
 
 
   }
 

tripoTriang(8, 8, 8);
