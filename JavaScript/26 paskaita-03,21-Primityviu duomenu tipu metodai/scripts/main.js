const dabar = new Date();
const dabarValue = dabar.valueOf();
console.log(dabarValue); 



/* 1) Sukurk variable 'milkPrice'. Su JS patikrink ir 
informuok vartotoją alert() ar jam reikės centų, ar nereikės
 (t.y. ar skaičius sveikas).*/


function milkPrice(x) {
  if (Number.isInteger(x)) {
    return ("Jums reikes centu.");
  } else {
    return ("Jums nereikes centu.");
  }
}


var milkPriceAtsakymas = milkPrice(2.58999.toFixed(2));
alert(milkPriceAtsakymas);
console.log(milkPriceAtsakymas);
/*var milkPriceAtsakymas2 = parseFloat(milkPrice.toFixed(2)); 
alert(milkPriceAtsakymas2);*/
/*document
  .querySelector('form#milkPriceForma')
  .addEventListener('submit', milkPriceAtsakymas);*/


/*  2) Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą 
- su dviem skaičias po kablelio (t.y. 3.00 Eur).
const kaina = 10.5; // Įrašykite savo kainą čia
const kainaSuDviemSk = kaina.toFixed(2); // Suapvalina kainą iki 2 skaičių po kablelio ir grąžina kaip eilutę
alert("Kaina: " + kainaSuDviemSk);   milkPrice.toFixed(2);
*/



/* 3 uzduotis
Sukurk programą degalinei - bus du input laukeliai
 (kuriame su HTML): viename įvedame kainą su trim 
 skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu 
 po kablelio (HTML naudojame step="0.1" atributą pasakyti
  kiek skaičių po kablelio vartotojas gali paduoti).
   Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - 
   vartotojui apačioje turi išmesti kainą h1 laukelyje
    (sukuriame su JS), su dviem skaičiais po kablelio 
    (pvz. 7.13 Eur).*/
function degalai(event) {
  event.preventDefault();
  console.log(event);
  let element = event.target.elements;
  let kaina = element.kaina.value;
  let litrai = element.kiekis.value;
  let rezultatas = kaina * litrai;
  document.querySelector('#suma').textContent = rezultatas;
}
document
  .querySelector("form#kuras")
  .addEventListener("submit", degalai);
  /*4)
Sukurk du input'us - vieną, kur vartotojas įves savo vardą;
 kitą - skaičių. Pirma, patikrink ar skaičius sveikas
  (jei ne - alert). Jei sveikas, po apačia sukurk h1
   elementą kur vardas bus atkartotas tiek kartų, kiek 
   skaičius nurodo.
   function spausdintiVarda(event){
    event.preventDefault();
   }
let vardas=document.querySelector('#')

*/
/*5)
 Sukurk input, kur vartotojas įves savo vardą. Įvedus 
- alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad 
priekyje ir gale nebūtų įskaičiuoti tarpeliai.
*/

/*6) Sukurk input, kur vartotojas įves savo pilną vardą
 (t.y. vardą ir pavardę). Padaryk, kad JS ekrane
  atvaizduotų du h1 tag'us, viename - vardas, kitame
   - pavardė.*/


/* 7) Pakoreguok šeštą pratimą, kad įskaičiuotų,
jei pavardė ilgesnė nei vienas žodis.

*/