/*  Kintamieji
NaN , null ,undefined -egzistuojantys,bet nelabai svarbus(kol kas)

objektas - object - {}
  Grupuoti kintamuosius,kai nori,kad jie turetu savo pavadinimus(raktinius zodzius-key words);
  eiliskumas nesvarbus.
  objekte esantis kintamasis susideda is 2 daliu- raktinis zodis:reiksme
masyvas - array - []
     Grupuoti kintamuosius,bet eiliskumas yra svarbus,o kintamieji viduje neturi tureti
      pavadinimu(isvardinti juos be jokio isskirtinumo) (tarsi sarasas)

Tiek objektas ,tiek masyvas yra konteineriniai kintamieji(ju viduje 
    talpinami kiti kintamieji)


**/

let asmuo1 = {
  vardas: 'Rokas',
  pavarde: 'Banaitis',
  amzius: 26,
  vedes: false
};
let asmuo2 = {
  vardas: 'Petras',
  pavarde: 'Petrauskas',
  amzius: 50,
  vedes: true
};
let asmenys = [
  {
    vardas: 'Rokas',
    pavarde: 'Banaitis',
    amzius: 26,
    vedes: false,
    pomegiai: ['sportas', 'zaidimai', 'filmai', 'keliones'],

    gyvenamojiVieta: {
      planeta: 'Zeme',
      zemynas: 'Europa',
      salis: 'Lietuva',
      miestas: 'Kaunas',
      gatve: 'K.M.',
      pastatas: '68',
      butas: '12'
    }
  },
  {
    vardas: 'Petras',
    pavarde: 'Petrauskas',
    amzius: 50,
    vedes: true
  }
];

let objektas = ['Rokas', 'Banaitis', '26', false];
let transportoPriemones = ['dviratis', 'masina', 'lektuvas', 'valtis', 'karieta', 'riedlente'];
console.groupCollapsed('objektas simple');
console.log(asmuo1.amzius);
//asmuo1.amzius=asmuo1.amzius+1;
asmuo1.amzius += 1;
console.log(asmuo1.amzius);
asmuo1.plaukuSpalva = 'ruda';
console.log(asmuo1);
console.groupEnd();

console.groupCollapsed('masyvas simple');
console.log(transportoPriemones);
console.log(transportoPriemones[1]);
console.log(transportoPriemones.length);
transportoPriemones[3] = 'jachta';
console.log(transportoPriemones);
//transportoPriemosnes[transportoPriemosnes.lenght]='naujas';
transportoPriemones.push('rieduciai');
console.log(transportoPriemones);
console.groupEnd();

console.groupCollapsed('sudetingas');
console.log(asmenys);
console.log(asmenys[1].vardas);
console.log(asmenys[0].amzius);
console.log(asmenys[0].gyvenamojiVieta.miestas);
console.log(asmenys[0].pomegiai[2]);
asmenys[0].gyvenamojiVieta.butas = '15';
console.log(asmenys[0]);
console.groupEnd();

console.groupCollapsed('masyvas masyve');
let masyvasMasyve = ['labas', 5, true, 'haha', 10, [5, 1, 'hihi', 3, false], false];
console.log(masyvasMasyve);
console.log(masyvasMasyve[3]);
console.log(masyvasMasyve[5][2]);
console.groupEnd();
/*
         Salygos (condition)
    Loginiai operatoriai(case-uose nenaudojami)

    NOT - ! - apvercia reiksme
    OR  - || - ARBA nusako,kad arba vienoje puseje tiesa arba kitoje,kad grazintu tiesa 
    AND - && - IR nusako,kad ir vienoje ,ir kitoje puseje turi buti tiesa,kad grazintu 
               tiesa.

     Salygos
    if else_if else 
      pirmasis visada if,paskutinis visada else(nebutinas),
      per viduri kiek norime else_if-u. Kai salyga yra tiesa-
      vykdomas jos viduryje esantis kodas ir netikrinamos tolimesnes
      salygos.Salygos ribose galima rasyti koki nori koda.
    switch
    ternary     
    

    Truthy ir Falsy - reiksmes grazins tiesa arba mela kai bus idetos
    i salygos vidu
    
    Truthy                |     Falsy
  skaiciai apart 0        |      0
  netuscias string        | tuscias string
  tiesiog masyvas         |    null
  tiesiog objektas        |  undefined
     funkcija              |    NaN
*/


console.group('loginiai operatoriai');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.groupEnd();


console.groupCollapsed('if else else');
let amzius = 26;
if (amzius >= 18 && amzius < 65) {
  console.log('darbingo amziaus');
} else if (amzius >= 65) {
  console.log('pensijinio amziaus')
} else if (amzius < 18 && amzius >= 0) {
  console.log('nepilnametis');
  if (amzius >= 7) {
    console.log('mokyklinukas');
  } else {
    console.log('iki mokyklinio amziaus');
  }
} else {
  console.log('klaida');
}
/*if(amzius >= 65){
    console.log('pensijinio amziaus')
}*/
console.log('toliau einantis kodas');
console.groupEnd();


if ('') {
  console.log('tiesa');
} else {
  console.log('melas');
}
/*UZDUOTYS */
let asmuo = {
  name: 'Rokas',
  surname: 'Banaitis',
  age: '26',
  residence: 'Kaunas',
  auto: 'BMW',
  state: 'Lietuva'
}
let state = ['Lietuva', 'Lenkija', 'Vokietija', 'Portugalija', 'Ispanija', 'Prancuzija'];
let age = ['30', '26', '40', '50', '60', '3'];

let meniu = [
  'pusryciai',
  'pietus',
  'priespieciai',
  'pavakariai',
  'vakariene',
  {
    pirmas: 'kava',
    antras: 'sumustinis',
    trecias: 'bananas',
    ketvirtas: 'sokoladas'
  }
];
let auto = ['lengvoji', 'krovinine', 'motociklas', ['talpa', 'kuro tipas', 'spalva', 'kebulo tipas'], 'sunkvezimis'];
let filmas = {
  pavadinimas: 'vakaras',
  sukurimoMetai: '1992',
  tipas: ['detektyvas', 'komedija', 'siaubo', 'drama'],
  patiko: true,
  nepatiko: false
};
let namas = {
  aukstuSkaicius: 1,
  tipas: {
    murinis: 'plytos',
    medinis: 'lentos',
    blokinis: 'blokeliai',
    molinis: 'siaudai ir molis'
  }
};
/*2 uzduotis */
console.log(asmuo.age, asmuo.name, state[2], state[1]);
console.log(asmuo.age, namas.aukstuSkaicius, filmas.pavadinimas, meniu[5].pirmas);
console.log(namas.tipas.molinis, filmas.tipas[0]);
console.log(auto[3][1]);
auto[1] = 'lektuvas';
console.log(auto);

/*3 uzduotis *(nestinimas - kai if viduje dar vienas if-as)*/
let turiVairuotojoTeises = 'Turiu';
let turiAutomobili = 'Turiu';
let arBlaivas = 'Taip';

if (turiVairuotojoTeises === 'Turiu' && arBlaivas === 'Taip') {
  console.log('turi teises');
  if (turiAutomobili === 'Neturiu') {
    console.log('negali vairuoti')
  }
  else if (turiAutomobili === 'Turiu') {
    console.log('gali vairuoti')
  }
}
else if (turiVairuotojoTeises === 'Neturiu' && esiBlaivas === 'Taip') {
  console.log('negali vairuoti,nes neturi teisiu nors esi blaivas');
} else {
  console.log('Neteisinga ivestis');
}
/* nestinimas dar- jei salyga teigiama ,tik tada uzduodu kita salyga */

/*=window.prompt('Ar turi vairuotojo teises? Turiu/Neturiu')*/
/*4 uzduotis*/
let pasisveikinimas = 'Hi,Aleksandra';
let miestas = window.prompt('Koks tavo miestas?');
window.alert(pasisveikinimas + '. ' + miestas + ' yra labai grazus miestas');
console.log(pasisveikinimas + '. ' + miestas + ' yra labai grazus miestas');
/*   promt- isveda lentele i kuria gali irasyti , `+miestas1+  yra tas pats kas ${miestas1}*/
let miestas1 = prompt('kuriame mieste gyveni?');
if (miestas1.startsWith('Kaun')) {
  console.log(`Labas,Gyveni geriausiame Lietuvos mieste-${miestas1}`)
} else {
  console.log(`Labas.Kaunas geriausias Lietuvos miestas,bet ir ${miestas1} visai nieko`)
}
/*5 uzduotis*/

let zmogus = {
  vardas: 'Jonas',
  lytis: 'vyras',
};

let lytis = window.prompt('Kokia jusu lytis?');
if (zmogus.lytis === 'vyras') {
  console.log('Jūsų lytis yra vyras.');
} else if (zmogus.lytis === 'moteris') {
  console.log('Jūsų lytis yra moteris.');
} else {
  console.log('Jūsų lytis nenurodyta.');
}
window.alert(' Jūsų lytis yra' + ' ' + lytis);
console.log(' Jūsų lytis yra' + ' ' + lytis);

/* 6 uzduotis */


let dataDabar = 'kovas';
let menuo = dataDabar.toLocaleString('default', { menuo: '' });

if (menuo === 'gruodis' || menuo === 'sausis' || menuo === 'vasaris') {
  console.log('Dabar yra žiema.');
} else if (menuo === 'kovas' || menuo === 'balandis' || menuo === 'gegužė') {
  console.log('Dabar yra pavasaris.');
} else if (menuo === 'birželis' || menuo === 'liepa' || menuo === 'rugpjūtis') {
  console.log('Dabar yra vasara.');
} else {
  console.log('Dabar yra  ruduo.');
}
let koksMetuLaikas = window.prompt('Koks dabar menuo');
window.alert(' Dabar yra' + '' + dataDabar);
/*justo pvz yra grazesnis*/
const currentMonth = prompt('koks dabar menuo?').toUpperCase()
console.log(currentMonth);
switch (currentMonth) {
  case 'sausis':
  case 'vasaris':
  case 'gruodis':
    console.log('dabar yra ziema')
    break

  case 'kovas':
  case 'balandis':
  case 'geguze':
    console.log('dabar yra grazus pavasaris')
    break

  case 'birzelis':
  case 'liepa':
  case 'rugpjutis':
    console.log('dabar yra vasara')
    break

  case 'rugsejis':
  case 'spalis':
  case 'lapkritis':
    console.log('dabar yra ruduo')
    break

  /*default:
    console.log('nzn tokio menesio')  ?????
    break*/
}



/* 6 extra uzduotis */
let zmogus1 = {
  name: 'Jonas',
  age: 30,
  lytis: '',
};

switch (zmogus1.lytis) {
  case 'vyras':
    console.log('Tu esi vyras.');
    break;
  case 'moteris':
    console.log('Tu esi moteris.');
    break;
  default:
    console.log('Tavo lytis nėra nustatyta.');
    break;
}
/* 7 uzduotis */
let vardas = "Vilija";

if (vardas.endsWith("as") || vardas.endsWith("is")) {
  console.log(`Sveikas, ${vardas}!`);
} else if (vardas.endsWith("e") || vardas.endsWith("a")) {
  console.log(`Sveika, ${vardas}!`);
} else {
  console.log(`Sveiki, ${vardas}!`);
}
/* pvz */
let asmuoPvz={
  vardas:prompt('Koks Jusu vardas?'),
  pavarde:prompt('Kokia Jusu pavarde?'),
  amzius:prompt('Koks Jusu amzius?'),
  lytis:prompt('Kokia Jusu lytis?')
}

if (asmuoPvz.lytis==="vyras"){
  alert(`Sveiki,pone ${asmuoPvz.vardas} ${asmuoPvz.pavarde}`)
}
else if(asmuoPvz.lytis==='moteris'){
  alert(`Sveiki,ponia ${asmuoPvz.vardas} ${asmuoPvz.pavarde}`)
}
else{
  alert(`Sveiki ${asmuoPvz.vardas} ${asmuoPvz.pavarde}`)
}




