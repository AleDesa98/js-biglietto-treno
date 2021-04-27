// chiedere quanti km deve percorrere
var km = prompt("Inserisci la quantità di km che si desidera percorrere");
// chiedere età del passegero
var eta = prompt("Inserisci la propria età");
// calcolare prezzo biglietto
var costoAlKm = 0.21;
var costoBiglietto = km * costoAlKm;
// applicare eventuali sconti 
if (eta <= 18) {
    var sconto = (costoBiglietto * 20) / 100;
    costoBiglietto = costoBiglietto - sconto;
} else if (eta > 65) {
    var sconto = (costoBiglietto * 40) / 100;
    costoBiglietto = costoBiglietto - sconto;
}
// rendere il prezzo con solo due decimali
var costoBigliettoArrotondato = costoBiglietto.toFixed(2);
console.log(costoBigliettoArrotondato);
// indicare il prezzo nella pagina
document.getElementById("prezzo").innerHTML = costoBigliettoArrotondato;