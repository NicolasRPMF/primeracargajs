
let invitacion = prompt("¿Quieres unos tragos?");

if (invitacion.toLowerCase() === "si") {
    alert("¡Genial, paso enseguida!");
} else if (invitacion.toLowerCase() === "no") {
    alert("Bueno, está bien").break;
} else {
    alert("ERROR, RESPONDE 'SI' O 'NO', vuelve a cargar").break;
}

let num1 = prompt("Si me has acompañado a beber, ¿cuántas consumiste?");
let num2 = prompt("Mi cantidad fue de...");

function calcularTotal() {
    return parseInt(num1) + parseInt(num2);
}

alert("Bebimos " + calcularTotal() + " tragos");

const escabio = ["Fernet", "Birra", "Daikiri", "DrLemon"];

alert("Estos fueron: " + escabio.join(", "));

const olvido = prompt("¿Olvidaste algún trago? Si es así, ¿cuál fue?");

let = escabio.push(olvido);
alert("Al final bebimos: " + escabio.join(", "));





alert(" Y el orden en que las bebimos fue " + " " + escabio.sort() )


