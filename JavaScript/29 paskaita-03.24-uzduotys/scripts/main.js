// Iteracinių masyvų metodų užduotys:
//   1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"])
//  ir naudojant forEach, atspausdink kiekvieną elementą 
//  (automobilio reikšmę).
const cars = ["BMW", "VW", "Audi"];
cars.forEach((i) => {
  console.log(i);
});
// //   2) Pakoreguok pirmą pratimą, kad atspaudintum index: value
//  (pvz: "0: BMW", "1: VW" ir t.t.).
const cars1 = ["BMW", "VW", "Audi"];
cars.forEach((value, i) => {
  console.log(`${i}: ${value}`);
});
// //   3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją
//  pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). 
//  Naudojant map metodą, padaryk, kad susikurtų naujas array 
//  (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija
//   (pvz. "peTras" => "Petras").

const draugai = ["peTras", "Jonas", "aNTanaS", "kaMile", "saLOMeja"];
let draugaiNauji = draugai.map((draugas) => {
  const pirmaRaideDidzioji = draugas.slice(0, 1).toUpperCase();//paima pirmąją vardo raidę,pakeičia ją į didžiąją raidę. 
  const likusiosRaidesMazosiosios = draugas.slice(1).toLowerCase();//visa likusi vardo dalis, pradedant nuo antrosios raidės, pakeista į mažąsias raides
  return pirmaRaideDidzioji + likusiosRaidesMazosiosios;//gražinamas naujas stringas
});
console.log(draugaiNauji);

//   4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99).
//  Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
const amzius = [16, 86, 5, 40, 3, 1, 56, 39];
let amziusFiltras = amzius.filter((metai) => {
  if (metai > 18)
    return metai
})
console.log(amziusFiltras);
console.log('---------------------------');
//   5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). 
// Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

//   6) Penktame pratime esantį sprendimą pakoreguot ir patikrink 
// su some ar bent vienas miestas prasideda iš mažosios.
const miestai = ["Vilnius", "Kupiskis", "Alytus", "Panevezys", "Siauliai", "Kaunas"];
const miestaiFind = miestai.find(miestas => miestas.startsWith("K"));
const miestaiFindK = miestai.filter(miestas => miestas.startsWith("K"));
let somemiestai = miestai.some((miestas) => {
  return miestas[0] === miestas[0].toLocaleLowerCase();

});
console.log(miestaiFind);
console.log(miestaiFindK);
console.log('Ar bent vienas miestas prasideda is mazosios raides?', somemiestai);

// //   7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas
// prasideda iš mažosios, bet ar visi iš didžiosios.
const miestaiN = ["Vilnius", "Kupiskis", "Alytus", "Panevezys", "Siauliai", "Kaunas"];
let miestaiNFind = miestaiN.every((miestas) => {
  return miestas[0] === miestas[0].toLocaleUpperCase();
});
console.log('Ar visi miestai prasideda is didziuju raidziu?', miestaiNFind);
console.log('---------------------------');

// Destruktūrizavimas:
// //   1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes,
//  iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.
let masyvasSkD = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [v1, , v3, v4, ...rest] = masyvasSkD;
console.log(v1, v3);
console.log(...rest);
console.log('---------------------------');

// //   2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes,
//  iš kurių 1'oji būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę,
//   3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto
//    su pakeistu pavadinimu.
const asmuo = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  amzius1: 30,
  statusas: "studentas",
  adresas: {
    miestas: "Vilnius",
    gatve: "Gedimino pr.",
    namoNumeris: 20
  }
};

let { vardas: name, gimimoMetai = 1990, adresas: { miestas }, adresas: { namoNumeris: namoNumerisNaujas } } = asmuo;

console.log(name); // "Jonas"
console.log(gimimoMetai); // 1990 (default reikšmė)=
console.log(miestas); // "Vilnius"
console.log(namoNumerisNaujas); // 1

console.log(asmuo);

console.log('---------------------------');
//    3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes
//  išskyrus pirmas 3.
const masyvas = [1, 2, 3, 4, 5, 6, 7];
let [, , , ...likusieji] = masyvas;
console.log(likusieji);

//   4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

console.log('---------------------------');

// ForEach, Filter, Reduce ir Map:
//   1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse
//   užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys:
//   [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}])
const macDonald = [
  { id: 0, name: 'Burgeris', inStock: true, primeCost: 0.3, cost: 1 },
  { id: 1, name: 'Murgeris', inStock: true, primeCost: 0.4, cost: 3 },
  { id: 2, name: 'Zurgeris', inStock: false, primeCost: 0.2, cost: 4 },
  { id: 3, name: 'Kava', inStock: true, primeCost: 0.1, cost: 1.5 },
  { id: 4, name: 'Ledai', inStock: false, primeCost: 0.15, cost: 2 },
  { id: 5, name: 'salotos1', inStock: true, primeCost: 0.3, cost: 1 },
  { id: 6, name: 'salotos2', inStock: true, primeCost: 0.4, cost: 3 },
  { id: 7, name: 'salotos3', inStock: false, primeCost: 0.2, cost: 4 },
  { id: 8, name: 'desertas1', inStock: true, primeCost: 0.1, cost: 1.5 },
  { id: 9, name: 'desertas2', inStock: false, primeCost: 0.15, cost: 2 },
  { id: 10, name: 'cocacola', inStock: false, primeCost: 0.15, cost: 2 }
];
console.log(macDonald);

//   2) Naudojant forEach - išvesti masyvą į konsolę.
macDonald.forEach((uzsakymas) => {
  console.log(uzsakymas);
});
//   3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.

macDonald.forEach((elementas, i) => {
  console.log(`${elementas.name}:${elementas.cost}:$`);

});
//   4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra
//   inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame
//   kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko
//     (tiesiog įdėti patį masyvą į konsolę)).

const inStockMasyvas = macDonald.filter(elementas => elementas.inStock);
console.log(inStockMasyvas);

//     4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą,
//     kuriame būtų name ir suskaičiuotas bei išsaugotas
//     profit (cost-primeCost) ir jį atvaizduoti konsolėje
//      (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

let nStockNaujas = inStockMasyvas.map((elementas) => {
  return elementas.cost - elementas.primeCost;
});
console.log(nStockNaujas);

//   4.2) Susikurti masyvą, kuriame būtų išrašyti
//   masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį
//   atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į
//  konsolę)). (galima sukurti kelis užsakymus)

const uzsakymoMasyvas = [
  { name: 'Burgeris', quantity: 1,primeCost: 0.3, cost: 1 },
  { name: 'Murgeris', quantity: 1 ,primeCost: 0.4, cost: 3 },
  { name: 'Zurgeris', quantity: 1 ,primeCost: 0.2, cost: 4},
  { name: 'Kava', quantity: 2 ,primeCost: 0.1, cost: 1.5},
  { name: 'Ledai', quantity: 2 ,primeCost: 0.15, cost: 2},
  { name: 'salotos1', quantity: 1 , primeCost: 0.4, cost: 3 },
  { name: 'salotos2', quantity: 1 , primeCost: 0.4, cost: 3 },
  { name: 'salotos3', quantity: 1 , primeCost: 0.2, cost: 4 },
  { name: 'desertas1', quantity: 2, primeCost: 0.1, cost: 1.5},
  { name: 'desertas2', quantity: 2,  primeCost: 0.15, cost: 2 },
  { name: 'cocacola', quantity: 2 ,primeCost: 0.15, cost: 2 }
];
console.log(uzsakymoMasyvas );


//  4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti
//  konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
//  (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)

let pelnas = uzsakymoMasyvas.map((elementas)=>{
  return elementas.quantity*(elementas.cost-elementas.primeCost);
}).reduce((bendras,dabartinis)=>{
  return bendras+dabartinis;
}).toFixed(2);
console.log( pelnas );


//  4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas
//  užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina
//  (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma)
//  ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje
//  (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

let cost = 0;
uzsakymoMasyvas.forEach((elementas) => {
  const cost1 = elementas.cost *  elementas.quantity;
  console.log(`${ elementas.name} - ${cost1.toFixed(2)}€`);
  cost+= cost1;
});
console.log(`Bendra kaina: ${cost.toFixed(2)}€`);

//roko pvz-nebaigtas~9val

const uzs=[{id:'0',pavadinimas:'kebebeas',kainas:2}
]
;
let cekis2=uzs.map((uzsDalis=>{console.log(uzsDalis);
let uzsItemIndex=uzs.findIndex(uzsItem=>{
  return uzsDalis.pavadinimas===uzs.Item.pavadinimas;
})
}));
console.log(uzs[uzsItemIndex].kaina);
return{
  pavadinimas:uzs.pavadinimas,
  kiekis:uzs.lielis,
  kaina:uzs.kaina

}


//   5) Išfiltruoti tuos masyvo (1'ojo) elementus,
//   kurių "id" yra didesnis negu 4 ir jo kaina yra didesnė nei 2,
//   bet mažesnė nei 10.

const filteredElementai = macDonald.filter(elementas => elementas.id > 4 && elementas.cost > 2 && elementas.cost < 10);

console.log(filteredElementai);
const ul = `<ul>${filteredElementai .join('')}</ul>`;

console.log(ul);


//   6) Naudojant map - sukurti nerikiuotą sąrašą(<ul>) su masyvo elementų vardais
//      ir kainomis kaip sąrašo elementais(<li>).
const elementasList = macDonald.map(elementas => `<li>${elementas.name} - ${elementas.cost.toFixed(2)}€</li>`);
const listHtml = `<ul>${elementasList.join('')}</ul>`;
console.log(listHtml);

const list = document.getElementById("list");

macDonald.map(elementas => {
  const li = document.createElement("li");
  const tekstas = document.createTextNode(elementas.name + ": " + elementas.cost+ "eur");
  li.appendChild(tekstas);
  list.appendChild(li);
});