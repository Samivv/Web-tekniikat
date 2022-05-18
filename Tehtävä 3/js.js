let tulostaTahan = document.querySelector("[class=generoitusisalto]");
let uusiElementti = document.createElement("h2")
let listener1 = document.getElementById("nappi1");
let listener2 = document.getElementById("nappi2");
let listener4 = document.getElementById("nappi4");
let listener5 = document.getElementById("varipyora");
let listener6 = document.getElementById("range");
let h1 = document.querySelector("h1");
listener1.addEventListener("click", funktio1);
listener2.addEventListener("click", funktio2);
listener6.addEventListener("change", funktio9);
h1.addEventListener("mouseover", funktio5);
h1.addEventListener("mouseout", funktio6);
listener5.addEventListener("change", funktio7);
document.querySelector("body").addEventListener("keypress", funktio8);

// Lisätään elementti ja lisätään siihen tekstiä, sekä poistetaan poisto-napin esto.
function funktio1() {
    tulostaTahan.appendChild(uusiElementti);
    document.querySelector("h2").innerText = ("Tähän on nyt lisätty h2 elementti.")
    listener2.toggleAttribute("disabled");
}
// Poistetaan lisätty elementti ja estetään napin käyttö turhaan.
function funktio2() {
    tulostaTahan.removeChild(uusiElementti);
    listener2.toggleAttribute("disabled");
}
// Sivun asettelun muuttaminen
function funktio9() {
    if(listener6.value == 2) {
        document.body.style.justifyContent = "center";
    } else if (listener6.value == 3) {
        document.body.style.justifyContent = "right";
    } else if (listener6.value == 1) {
        document.body.style.justifyContent = "left";
    }
}


// Väripyörällä valitaan sivun taustaväri
function funktio7() {
    document.body.style.background = listener5.value;
}
// Kertoo jos olet painanut jotain näppäintä.
function funktio8(event) {
    let y = event.key;
    document.querySelector("span").innerText = " Olet painanut tätä nappia: '" + y+"'";
}

// Kun hiiri osuu kohdille tee tämä 
function funktio5() {
    h1.style.fontSize = "50px";
}
// Kun hiiri lähtee pois tee tämä
function funktio6() {
    h1.style.fontSize = "";
}