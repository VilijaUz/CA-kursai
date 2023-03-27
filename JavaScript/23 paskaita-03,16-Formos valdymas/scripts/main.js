//    DOM
/*
//document.getElementsByLastName   id  arba Tagname arba className
document.querySelector('selektorius');

document.querySelectorAll('selektorius');

NODE.addEventListener('event','callback')(html pasiektiems elementams uzdeti lisineri)

*/
function vardoIrPavardesIlgis(vardas, pavarde) {
  return vardas.trim().length + pavarde.trim().length;
}

function vardoIrPavardesIlgioFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  //console.dir(event.target[0].value);
  //console.dir(event.target[1].value);
  //console.dir(document.querySelector('#vardas'));
  //console.dir(document.querySelector('#pavarde'));
  let elementai = event.target.elements;
  //console.dir(event.target.elements.vardas.value);
  //console.dir(event.target.elements.pavarde.value);
  console.dir(elementai.vardas.value);
  console.dir(elementai.pavarde.value);
  let ilgiuSuma = vardoIrPavardesIlgis(elementai.vardas.value, elementai.pavarde.value);
  console.log(ilgiuSuma);
  //document.querySelector('#pirmosFormosAts').textContent=`Jusu vardo ilgis : ${ilgiuSuma} raidziu ilgio suma.`;
  document.querySelector('#pirmosFormosAts>span').textContent = ilgiuSuma;
}
document
  .querySelector('section#pirmaForma >form')
  .addEventListener('submit', vardoIrPavardesIlgioFormosFunkcija);
//
function sudetiesFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasSudetiesDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasSudetiesDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#sudetiesAts').textContent = pirmasDomuo + antrasDomuo;
}
document
  .querySelector('form#sudetiesForma')
  .addEventListener('submit', sudetiesFormosFunkcija);

//uzduotis-1
function daugybosFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasDaugybosDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasDaugybosDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#daugybosAts').textContent = pirmasDomuo * antrasDomuo;
}
document
  .querySelector('form#daugybosForma')
  .addEventListener('submit', daugybosFormosFunkcija);
//
function laipsnioKelimoFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasLaipsnioDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasLaipsnioDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#laipsnioKelimoAts').textContent = pirmasDomuo ** antrasDomuo;
}
document
  .querySelector('form#laipsnioKelimoForma')
  .addEventListener('submit', laipsnioKelimoFormosFunkcija);
//
function SakniesTraukimOFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasSakniesDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasSakniesoDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#sakniesTraukimoAts').textContent = pirmasDomuo ** (1 / antrasDomuo);
}
document
  .querySelector('form#sakniesTraukimoForma')
  .addEventListener('submit', SakniesTraukimOFormosFunkcija);

//
function liekanosRadimoFormosFunkcija(event) {
  event.preventDefault();
  console.log(event);
  let pirmasDomuo = event.target.elements.pirmasLiekanosRadimoDomuo.valueAsNumber;
  let antrasDomuo = event.target.elements.antrasLiekanosRadimoDomuo.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#liekanosRadimoAts').textContent = pirmasDomuo % antrasDomuo;
}
document
  .querySelector('form#LiekanosRadimoForma')
  .addEventListener('submit', liekanosRadimoFormosFunkcija);
/*

function duSkaiciaiFormosFunkcija(event) {
  event.preventDefault();
  console.dir(event);
  let pirmasDomuo = event.target.elements.skaicius1.valueAsNumber;
  let antrasDomuo = event.target.elements.skaicius2.valueAsNumber;
  console.log(pirmasDomuo, antrasDomuo);
  document.querySelector('#duSkaiciaiAts').textContent = pirmasDomuo  % antrasDomuo ;
}
document
  .querySelector('form#duSkaiciai')
  .addEventListener('submit', duSkaiciaiFormosFunkcija);*/

function bilietokaina(amzius) {
  if (amzius < 16) {
    return "3 eur";
  } else if (amzius >= 60) {
    return "4 eur";
  } else {
    return "6 eur"
  }
}

function apskaiciuotiKaina(event) {
  event.preventDefault();
  console.log(event);
  let amzius1 = event.target.elements.amzius.valueAsNumber;
  document.querySelector('#bilietoKaina').textContent = bilietokaina(amzius1);
}
document
  .querySelector('form#kinoBilietas')
  .addEventListener('submit', apskaiciuotiKaina);
//kitas variantas bilieto
function amzius(event) {
  event.preventDefault();
  let atsakymoLaukas = document.querySelector('#bilietoKaina>span');
  let amzius = event.target.elements.amzius.valueAsNumber;
  if (amzius > 16 && amzius < 60) {
    atsakymoLaukas.textContent = 6;
  } else if (amzius <= 16) {
    atsakymoLaukas = 6 / 2;
  } else if (amzius >= 60) {
    atsakymoLaukas.textContent = 6 * 2 / 3;
  }
}
document
  .querySelector('#kinobilietas>form')
  .addEventListener('submit', amzius)

//
function ar(kariuomene, amzius2) {
  if (30 >= amzius2 && amzius2 >= 18 && kariuomene === false) {
    return 'Jus esate saukiamas i kariuomene';
  }
  else {
    return 'Jus nesate saukiamas i kariuomene'
  }

}

function kariuomenesAtsakymas(event) {
  event.preventDefault();
  console.log(event);
  let amzius2 = event.target.elements.amzius2.valueAsNumber;
  console.log(amzius2);
  let kariuomene = event.target.elements.teistumas.checked;
  console.log(kariuomene);
  document.querySelector('#ar').textContent = ar(kariuomene, amzius2);
}
document
  .querySelector('form#kariuomene1')
  .addEventListener('submit', kariuomenesAtsakymas);
//

function bonusoDydis(metai) {
  if (metai >= 10 && metai < 20) {
    return 50 + 50;
  }
  else if (metai >= 20) {
    return 100 + 100;
  } else {
    return 0;
  }
}
function kaleduBonusoDydis(event) {
  event.preventDefault();
  console.log(event);
  let metai = event.target.elements.metai.valueAsNumber;
  console.log(metai);
  document.querySelector('#bonusoDydis').textContent = bonusoDydis(metai);
}
document
  .querySelector('form#bonusas')
  .addEventListener('submit', kaleduBonusoDydis);
//

function keliamujuMetuDydis(keliamieji) {
  if (keliamieji % 4 === 0 && (keliamieji % 100 !== 0 || keliamieji % 400 === 0)) {
    return 'Metai yra keliamieji';
  } else {
    return 'Metai nera keliamieji'
  }
}
function keliamujuMetuApskaiciavimas(event) {
  event.preventDefault();
  console.log(event);
  let keliamieji = event.target.elements.keliamieji.valueAsNumber;
  console.log(keliamieji);
  document.querySelector('#kokieMetai').textContent = keliamujuMetuDydis(keliamieji);

}
document
  .querySelector('form#keliamiejiMetai')
  .addEventListener('submit', keliamujuMetuApskaiciavimas);
//  


function tempAtsakymas(event) {
  event.preventDefault();
  console.log(event);
  let farenheitas = event.target.elements.farenheitas.valueAsNumber * 1.8 + 32;
  console.log(farenheitas);

  document.querySelector('#pakeista').textContent = `${farenheitas} `;
}
document
  .querySelector('form#farenheitas')
  .addEventListener('submit', tempAtsakymas);
  // 1 extra
 