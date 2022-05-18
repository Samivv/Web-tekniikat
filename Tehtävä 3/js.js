let tulostaTahan = document.querySelector("[class=generoitusisalto]");
let uusiElementti = document.createElement("h2")
let listener1 = document.getElementById("nappi1");
let listener2 = document.getElementById("nappi2");
let listener3 = document.getElementById("nappi3");
let listener4 = document.getElementById("nappi4");
let listener5 = document.getElementById("varipyora");
let h1 = document.querySelector("h1");
listener1.addEventListener("click", funktio1);
listener2.addEventListener("click", funktio2);
listener3.addEventListener("click", funktio3);
listener4.addEventListener("click", funktio4);


h1.addEventListener("mouseover", funktio5);
h1.addEventListener("mouseout", funktio6);
listener5.addEventListener("change", funktio7);
document.querySelector("body").addEventListener("keypress", funktio8);

function funktio1() {
    tulostaTahan.appendChild(uusiElementti);
    document.querySelector("h2").innerText = ("Tähän on nyt lisätty h2 elementti.")
}

function funktio2() {
    tulostaTahan.removeChild(uusiElementti);
}

function funktio3() {
    tulostaTahan.removeChild(uusiElementti);
}

function funktio4() {
    tulostaTahan.removeChild(uusiElementti);
}

function funktio7() {
    document.body.style.background = listener5.value;
}

function funktio8(event) {
    let y = event.key;
    document.querySelector("span").innerText = " Olet painanut tätä nappia: '" + y+"'";
}





function funktio5() {
    h1.style.fontSize = "50px";
}

function funktio6() {
    h1.style.fontSize = "";
}