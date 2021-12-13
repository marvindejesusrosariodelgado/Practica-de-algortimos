// algortimo #10

// variables 

let poblacionActual = prompt(`Introduzca la poblacion actual`)*1;
let tasaNatalidad = prompt(`Introduzca la tasa de natalidad`)*1;
let tasaMortalidad = prompt(`Introduzca la tasa de mortalidad`)*1;
var natalidad = 0;
var mortalidad = 0;

// operaciones 

for (let i = 0; i <= 10; i++) {
    natalidad = (tasaNatalidad/100)*poblacionActual;
    mortalidad = (tasaMortalidad/100)*poblacionActual;
    poblacionActual += (natalidad - mortalidad);  
    document.getElementById ("tabla").rows [i].cells [1].innerText = Math.round(natalidad);
    document.getElementById ("tabla").rows [i].cells [2].innerText = Math.round(mortalidad);
    document.getElementById ("tabla").rows [i].cells [3].innerText = Math.round(poblacionActual);
    
}


function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }

