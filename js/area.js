/*let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close")
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
});*/

/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo, círculo, cuadrado, rombo, trapecio, paralelogramo, hexágono o pentágono. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//paso: 1 preguntar por la figura

function area(){
    let figura = prompt("Escribe qué figura deseas utilizar: triángulo, rectángulo, círculo, cuadrado, rombo, cometa, trapecio, paralelogramo, hexágono o pentágono")

//paso: 2 variable sin valor
let base;
let altura;
let radio;
let lado;
let diagonalmayor;
let diagonalmenor;
let basemayor;
let basemenor;
let apotema;

// Condicionales en base a las preguntas --> switch
switch(figura){
    case "triángulo":
        base = prompt("Escribe la base del triángulo")
        altura = prompt("Escribe la altura del triángulo")
        alert(`El área del triángulo es: ${base*altura/2}.`)
        break

    case "rectángulo":
        base = prompt("Escribe la base del rectángulo")
        altura = prompt("Escribe la altura del rectángulo")
        alert(`El área del rectángulo es: ${base*altura}.`)
        break
    
    case "círculo":
        radio = prompt("Escribe el radio del círculo")
        alert(`El área del círculo es ${Math.PI*Math.pow(radio,2)}.`)
        break

    case "cuadrado":
        lado = prompt("Escribe el lado del cuadrado")
        alert(`El área del cuadrado es ${Math.pow(lado,2)}.`)
        break

    case "rombo":
        diagonalmayor = prompt("Escribe la diagonal mayor del rombo")
        diagonalmenor = prompt("Escribe la diagonal menor del rombo")
        alert(`El área del rombo es ${diagonalmayor*diagonalmenor/2}.`)
        break
    
    case "cometa":
        diagonalmayor = prompt("Escribe la diagonal mayor del cometa")
        diagonalmenor = prompt("Escribe la diagonal menor del cometa")
        alert(`El área del cometa es ${diagonalmayor*diagonalmenor/2}.`)
        break
        
    case "trapecio":
        basemayor = prompt("Escribe la base mayor del trapecio")
        basemenor = prompt("Escribe la base menor del trapecio")
        altura = prompt("Escribe la altura del trapecio")
        alert(`El área del trapecio es ${(basemayor*basemenor)*altura/2}.`)
        break

    case "paralelogramo":
        base = prompt("Escribe la base del paralelogramo")
        altura = prompt("Escribe la altura del paralelogramo")
        alert(`El área del paralelogramo es ${base*altura}.`)
        break

    case "hexágono":
        apotema = prompt("Escribe el apotema del hexágono")
        lado = prompt("Escribe el lado del hexágono")
        alert(`El área del hexágono es ${(6*lado)*apotema/2}.`)
        break

    case "pentágono":
        apotema = prompt("Escribe el apotema del pentágono")
        lado = prompt("Escribe el lado del pentágono")
        alert(`El área del pentágono es ${(5*lado)*apotema/2}.`)
        break
    default:
        alert("Esta figura no está disponible.")
}

}
