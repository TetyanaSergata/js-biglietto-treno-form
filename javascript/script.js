// alert('ciao');
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
function() {
  var nomeInput = document.getElementById('nome');
  var nome = nomeInput.value;
  console.log(nome);

  var kmInput = document.getElementById('km');
  var numeroChilometri = kmInput.value;
  console.log(numeroChilometri);

  var etaFascia = document.getElementById('fascia_eta');
  var fascia = etaFascia.value;
  console.log(fascia);

  var costoChilometro = 0.21;
  var costoViaggio = numeroChilometri * costoChilometro;
  console.log(costoViaggio);

  var offerta = 'Tariffa standard';
  var scontoPercentuale = 0;

  if (fascia == 'minorenne'){
    scontoPercentuale = 20;
    offerta = 'Sconto minorenne';
  } else if (fascia == 'over_65'){
    scontoPercentuale = 40;
    offerta = 'Sconto silver';
  } else if (fascia == '') {
    alert("Dato mancate");
    document.getElementById('nome_passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice').innerHTML = '';
    document.getElementById('costo').innerHTML = '';
    return;
  }
  console.log(fascia);
  console.log(scontoPercentuale);

  var calcoloSconto = costoViaggio * scontoPercentuale / 100;
  var costoFinale = costoViaggio - calcoloSconto;

  var carrozza = Math.floor(Math.random() * 9) + 1;
  var codice = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

  document.getElementById('nome_passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice').innerHTML = codice;
  document.getElementById('costo').innerHTML = costoFinale.toFixed(2) + " €";

  var element = document.getElementById("dati_biglietto");
    element.style.display = "block";
});

var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener('click',
function() {
  document.getElementById('nome').value = null;
  document.getElementById('km').value = null;

  document.getElementById('nome_passeggero').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('costo').innerHTML = '';

  var element = document.getElementById("dati_biglietto");
    element.style.display = "none";

});
