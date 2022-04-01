const gomb = document.getElementById("osszeg");
const p = document.getElementById("ide");
const diak = document.getElementById("diak");
const felnott = document.getElementById("felnott");

let diakar = 1000;
let felnottar = 2000;

gomb.addEventListener("click", vegosszeg);

function vegosszeg() {
    p.innerHTML = ((Number)(diak.value) * diakar + (Number)(felnott.value) * felnottar) + " Ft"
}

