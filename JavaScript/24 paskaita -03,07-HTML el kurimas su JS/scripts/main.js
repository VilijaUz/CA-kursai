// 8 uzduotis
function vardoKartojimas(event){
  event.preventDefault();
  console.log(event);
  let vardas=event.target.elements.vardas.value;
  let kartojimas=event.target.elements.kartojimas.valueAsNumber;
  console.log(vardas,kartojimas);
  let sarasas=document.querySelector(`#ciaKuriame`)
  console.dir(sarasas);
  console.dir(sarasas.innerHTML);
  sarasas.innerHTML='';
  for(let i=0;i<kartojimas;i++){
    sarasas.innerHTML +=`<li>${vardas}<li>\n` 
  }
  console.dir(sarasas.innerHTML);
};

document
.querySelector(`#task_8 > form`)
.addEventListener('submit',vardoKartojimas);
// 9 uzduotis Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).

function kurtiTrikampi(event){
  event.preventDefault();
  console.log(event);
  let trikampioDydis=event.target.elements.stacDydis.valueAsNumber;
  console.log(trikampioDydis);
  let trikampioDivas=document.querySelector('#trikampisCia');
  trikampioDivas.innerHTML='';
  console.dir(trikampioDivas);
  let zvaigzdes='';
  for(let i=0 ;i < trikampioDydis;i++){
    zvaigzdes += '*';
    trikampioDivas.innerHTML +=`<p>${zvaigzdes}</p>`;
  }
}
document
.querySelector(`#task_9 > form`)
.addEventListener('submit',kurtiTrikampi);