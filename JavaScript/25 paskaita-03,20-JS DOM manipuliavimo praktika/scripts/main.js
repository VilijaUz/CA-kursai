/* Kartu 1 */
const kartu1 = document.querySelector('#kartu1');
kartu1.innerHTML = `
<h1 class='raudonasTekstas didelisTekstas centruotasTekstas' >
Bandymas su innerHTML
</h1>
`;
/*
kartu1.innerHTML += `
<div class='flex flex-wrap justify-center gap-2'>
  <div class='kortele1'>
   <h3>Korteles pavadinimas </h3>
   <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="muge">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, et!</p>
</div>
<div class='flex flex-wrap justify-center gap-2'>
  <div class='kortele1'>
   <h3>Korteles pavadinimas </h3>
   <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="muge">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, et!</p>
</div>
</div>
`;*/
let visosKorteles = ``;
/*for(let i=0;i<3;i++){
  visosKorteles +=`
  <div class='flex flex-wrap justify-center gap-2'>
  <div class='kortele1'>
   <h3>Korteles pavadinimas </h3>
   <img src="https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg" alt="muge">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, et!</p>
</div>
  `;
}*/
for (let i = 0; i < duomenys.length; i++) {
  visosKorteles += `
  <div class='kortele1'>
  <h3>${duomenys[i].pavadinimas}</h3>
  <img src='${duomenys[i].paveiksliukas}' alt='${duomenys[i].paveiksliukasAlt}'>
  <p>${duomenys[i].paragrafas}</p>

  </div>
  `
}

kartu1.innerHTML += `
<div class='flex flex-wrap justify-center gap-2'>
${visosKorteles}
</div>
`;
console.log(duomenys);

/* DOM elementu kurimas (geruoju budu )*/
const testZona = document.querySelector('#testZona');
//naujasDivas.className +=' kortele1';-kazko neveikia
let naujasDivas = document.createElement('div');
naujasDivas.classList.add('kortele1');
//naujasDivas.classList.add('kortele5');
//naujasDivas.classList.remove('kortele1');
let naujasPar = document.createElement('p');
let tekstas1 = document.createTextNode('Tekstas,kuris bus atvaizduojasmas');
let naujasHeading = document.createElement('h3');
let tekstas2 = document.createTextNode('Pavadinimas');
let naujasImage = document.createElement('img');
naujasImage.setAttribute('src', 'https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg');
naujasImage.setAttribute('alt', 'muge');

naujasHeading.appendChild(tekstas2);
naujasPar.appendChild(tekstas1);
naujasDivas.append(naujasHeading, naujasImage, naujasPar);
testZona.appendChild(naujasDivas);
console.dir(naujasDivas);

/* Kartu 2 */
const kartu2 = document.querySelector('#kartu2');
let kartu2Heading = document.createElement('h1');
kartu2Heading.classList.add('raudonasTekstas', 'didelisTekstas', 'centruotasTekstas');
let kartu2Tekstas = document.createTextNode('Bandymas su document HTML');
kartu2Heading.appendChild(kartu2Tekstas);
let divKonteineris = document.createElement('div');
//divKonteineris.classList.add('flex');
//ivKonteineris.classList.add('flex-wrap');
//divKonteineris.classList.add('justify-center');
//divKonteineris.classList.add('gap-2');
divKonteineris.classList.add('gap-2', 'flex-wrap', 'flex', 'justify-center');
for (let i = 0; i < duomenys.length; i++) {
  let kortelesDiv = document.createElement('div');
  kortelesDiv.classList.add('kortele1');
  let kortelesHeading = document.createElement('h3');
  let kortelesPavadinimas = document.createTextNode(duomenys[i].pavadinimas);
  kortelesHeading.appendChild(kortelesPavadinimas);
  let kortelesImage = document.createElement('img');
  kortelesImage.setAttribute('src', duomenys[i].paveiksliukas);
  kortelesImage.setAttribute('alt', duomenys[i].paveiksliukoAlt);
  let kortelesParagraph = document.createElement('p');
  let kortelesTekstas = document.createTextNode(duomenys[i].paragrafas);
  kortelesParagraph.appendChild(kortelesTekstas);
  kortelesDiv.append(kortelesHeading, kortelesImage, kortelesParagraph);
  //eiliskumas svarbus
  divKonteineris.appendChild(kortelesDiv);

}
kartu2.append(kartu2Heading, divKonteineris);
/* 1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
  1.1) JS'u sekcijoje sukurkite antraštę.
  1.2) JS'u sekciją papildykite paragrafu su tekstu.
  1.3) JS'u sekciją papildykite paveikslėliu.
  1.4 optional) JS'u sekciją stilizuokite priskirdami klases.*/



const task1 = document.querySelector('#task1');

let task1Heading = document.createElement('h1');
task1Heading.classList.add('antraste');
let task1HedTekstas = document.createTextNode('Pirmos uzduoties antraste-Giria');
task1Heading.appendChild(task1HedTekstas);

let naujasMiskas = document.createElement('div');
naujasMiskas.classList.add('miskas');
let task1Paragrafas = document.createElement('p');
let task1Tekstas = document.createTextNode('Kuo giliau i miska,tuo daugiau medziu...');
task1Paragrafas.appendChild(task1Tekstas);
let kortelesImage = document.createElement('img');
kortelesImage.setAttribute('src', 'https://dynaimage.cdn.cnn.com/cnn/w_1200/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170203102042-eco-solutions-hula-forest-00000624.jpg');
kortelesImage.setAttribute('alt', 'miskas');
naujasMiskas.append(task1Paragrafas, kortelesImage);

task1.append(task1Heading, naujasMiskas);
console.dir(task1);
/* 2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
  2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
  2.2 optional) JS'u sekciją stilizuokite priskirdami klases. */
const task2 = document.querySelector('#task2');

let task2Heading = document.createElement('h1');
task2Heading.classList.add('MonaLisa');
console.log(data);
let task2HedTekstas = document.createTextNode(data[0].title);

task2Heading.appendChild(task2HedTekstas);
let task2Paragrafas = document.createElement('p');

let task2Tekstas = document.createTextNode(data[0].paragraph);
task2Paragrafas.appendChild(task2Tekstas);


let monaImage = document.createElement('img');
monaImage.setAttribute('src', data[0].image);


task2.append(task2Heading, task2Paragrafas, monaImage);
console.dir.apply(task2);


/*3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
  3.1) JS'u sekcijoje sukurkite antraštę.
  3.2) JS'u sekciją papildykite div'ais, kuriuose bus pavadinimai, paveiksliukai ir antraštės.
  3.3 optional) JS'u sekciją stilizuokite priskirdami klases.
  3.4 optional) Papildyti duomenų failą dar ~10 menininkų darbais. */
console.log(data);
/*6 */
const allSections = document.querySelectorAll('section');
console.log(allSections);
for (let i = 0; i < allSections.length; i++) {
  const rodytiSleptiMygtukas = document.createElement('button');
  const mygtukoTekstas = document.createTextNode('Slepti');
  rodytiSleptiMygtukas.appendChild(mygtukoTekstas);
  rodytiSleptiMygtukas.classList.add('absolute');
  rodytiSleptiMygtukas.style.top = '0';
  rodytiSleptiMygtukas.style.right = '0';
  rodytiSleptiMygtukas.addEventListener('click', rodytiSlepti);
  console.dir(rodytiSleptiMygtukas);
  allSections[i].appendChild(rodytiSleptiMygtukas);

  allSections[i].classList.add('relative');
}
function rodytiSlepti(event) {
  console.log(event);
  console.log('paspaudei');
  let visiElementaiApartMygtuko = event.target.parentNode.
    querySelectorAll('section>:not(button.rodytiSleptiMygtukas');
  console.log(visiElementaiApartMygtuko);
  if (event.target.innerHTML === 'Slepti') {
    for (let i = 0; i < visiElementaiApartMygtuko.length; i++) {
      visiElementaiApartMygtuko[i].style.display = 'none';
    }
    event.target.innerHTML = 'Rodyti';
  } else {
    console.log('ivyko klaida..');
  }
}