const masyvas = ['a', 'b', 'c', 'd', 'a', 'c', 'e'];
//let amzius =30;
//       ForEach
//paprastas for
console.groupCollapsed('simple for');
for (let i = 0; i < masyvas.length; i++) {
  console.log(i, masyvas[i]);
}
console.groupEnd();
// forEach
console.groupCollapsed('forEach');
masyvas.forEach((elementas, i) => {
  if (i > 3) {
    console.log('noriu iseiti');//nera return
  }
  console.log(i, elementas);
});
console.groupEnd();
//       Filter
//duomenu filtravimas su paprastu for 
console.groupCollapsed(' for filter');
for (let i = 0; i < masyvas.length; i++) {
  let masyvasBeAfor = [];
  if (masyvas[i] !== 'a') {
    masyvasBeAfor.push(masyvas[i]);
  }
  console.log(masyvasBeAfor);
}
console.groupEnd();
//filter
console.groupCollapsed(' filter');
let masyvasBeAfilter = masyvas.filter((elementas) => {
  if (elementas !== 'a') {
    return elementas;
  }
})
console.log(masyvasBeAfilter);
console.groupEnd();
// mutuotas masyvas Map su paprastu for
console.groupCollapsed('for map');
let mutuotasSuFor = [];
for (let i = 0; i < masyvas.length; i++) {
  mutuotasSuFor.push(':)' + masyvas[i]);
}
console.log(mutuotasSuFor);
console.groupEnd();

//      Map
console.groupCollapsed('map');
let mutuotasSuMap = masyvas.map((elementas) => {
  return ':)' + elementas;
});
console.log(mutuotasSuMap);
console.groupEnd();

//for reduce be initial

console.groupCollapsed('for reduce be initial');

let reduceForBe = '';
for (let i = 0; i < masyvas.length; i++) {
  reduceForBe += masyvas[i];
}
console.log(reduceForBe)
console.groupEnd();


//for reduce su initial

console.groupCollapsed('for reduce su initial');
let reduceForSu = 'pradine reiksme';
for (let i = 0; i < masyvas.length; i++) {
  reduceForSu += masyvas[i];
}
console.log(reduceForSu)
console.groupEnd();

//reduce be initial

console.groupCollapsed('reduce be initial');
let reduceBe = masyvas.reduce((acc, curr) => {
  return acc + curr;
})
console.log(reduceBe)
console.groupEnd();

//reduce su initial
console.groupCollapsed('reduce su initial');

let reduceSu = masyvas.reduce((acc, curr) => {
  return acc + curr;
}, 'pradine reiksme:');

console.log(reduceSu);
console.groupEnd();
//  some
console.group('Some');
let someAts = masyvas.some((letter) => {
  return letter === letter.toLocaleUpperCase();
});
console.log('Ar bent viena raide yra didzioji?', someAts);
console.groupEnd();

//every

console.group('every');
let everyAts = masyvas.every((letter) => {
  return letter === letter.toLocaleUpperCase();
});
console.log('Ar visos raides yra didziosios?', everyAts);
console.groupEnd();

// Conditions
console.groupCollapsed('Conditionsl');
let amzius1 = 68;
//If
if (amzius1 >= 18) {
  console.log('Esi pilnametis');
} else {
  console.log('Esi nepilnametis');
};

//   Ternary-turi tureti else
amzius1 >= 18
  ? console.log('Esi pilnametis')//uz ? tiesos atvesis
  : console.log('Esi nepilnametis');//uz : melo atvejis

//    Logical AND
amzius1 >= 18 && console.log('Esi pilnametis');
!(amzius1 >= 18) && console.log('Esi nepilnametis');  //arba

console.groupEnd();

//ternery chaining
console.group('ternery chain');

amzius1 < 18
  ? console.log('Nesi pilnametis')
  : amzius1 > 65
    ? console.log('Esi pensininkas')
    : amzius1 >= 18 && amzius1 <= 65
      ? console.log('esi pilnametis')
      : console.log('Metai turi buti nurodomi');


console.groupEnd();

//      Destrukturizavimas
// Masyvo be destrukturizavimo
console.group('destrukturizavimas');
let masyvasDes = ['labas', 'ate', undefined, 6, 7, 8, 9, 10, 11];
console.log(masyvasDes);

let el0 = masyvasDes[0];
let el1 = masyvasDes[1];
let el2 = masyvasDes[2];
let elMas = masyvasDes[2] ? masyvasDes[2] : 'default reiksme';
console.log(el0, el1, el2, elMas);

// Masyvo destrukturizavimas  el=em,jei nori praleisti elementa-tuscia vieta
let [em0, , em2 = 'default reiksme', ...rest0] = masyvasDes;
console.log(em0, em2, rest0);
console.groupEnd();

console.group('destrukturizavimasObjekto');
let objektasDes = {
  vardas: 'Rokas',
  amzius: 26,
  gyvenamojiVieta: {
    miestas: 'Kaunas',
    salis: 'Lietuva'
  },
  plaukuSpalva: 'ruda',
  vedes: false,
  dirbantis: true
}
console.log(objektasDes);
// be destruk...
let vardasBe = objektasDes.vardas;
let amziusBe = objektasDes.amzius;
let salisBe = objektasDes.salis;
let vairuotojoTeisesBe = objektasDes.vairuotojoTeises ? objektasDes.vairuotojoTeises : 'Neturi';
console.log(vardasBe, amziusBe, salisBe);


// Objkto destrukturizavimas
let { vardas, amzius: metai, gyvenamojiVieta: { salis }, vairuotojoTeises, ...rest } = objektasDes;
console.log(vardas, metai, salis, vairuotojoTeises, rest);
console.groupEnd();

console.group('funkcijos param destrukt');
function sudetis(sk1, sk2, ...moreNumbers) {
  return sk1 + sk2 + moreNumbers.reduce((acc, curr) => acc + curr, 0);//0 galima ir nerasyti
}

console.log(sudetis(4, 55, 1, 2, 3, 8, 9, 10, 23));
console.groupEnd();

let a = 'labas';
let b = 'labanaktis';
console.log(a, b);

//let laikinas=a;
// a=b;
// b=laikinas;
// console.log(a,b);

[a, b] = [b, a];
console.log(a, b);