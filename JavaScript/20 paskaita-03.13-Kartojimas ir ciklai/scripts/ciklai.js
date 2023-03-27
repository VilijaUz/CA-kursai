/*  Ciklai */

/*
  Ciklas?Loop? - besikartojantys veiksmai

  Ciklai vykdomi tol, kol atitinka nurodyta !salyga

  Ciklu tipai:
  for () {}
     for of - masyvams
     for in - objektams

  while() {}
       do{} while()

  masyvu iteraciniai metodai
   forEach(callback)
   map(callback)
   filter(callback)
   find(callback)
   findLast(callback)
   findIndex(callback)
   findLastIndex(callback)
   reduce(callback)
   reduceRight(callback)
   some(callback)
   every(callback)
   flatMap(callback)
   ...


   Operatoriai:
  kintamasis++    didinti kintamaji per vieneta po
  ciklo iteracijos
   ++kintamasis   didinti kintamaji per vieneta pries
   ciklo iteracija
   kintamasis--   mazinti kintamaji per vieneta po
   ciklo iteracijos
   --kintamasis    mazinti kintamaji per vieneta pries
   ciklo iteracija

*/
/* for */
//for(skaitliukoSukurimas;salyga;skaitliukoKitimas){veiksmai...}
// Naudojamas kai galime apskaiciuoti reikalinga iteraciju kieki

console.groupCollapsed(`for intro`);
console.log(`hihihaha1`);
console.log(`hihihaha2`);
console.log(`hihihaha3`);
console.log(`hihihaha4`);
console.log(`hihihaha5`);
console.log(`hihihaha6`);
console.log(`hihihaha7`);
console.log(`hihihaha8`);
console.log(`hihihaha9`);
console.log(`hihihaha10`);

for(let i=1;i<=10;i++){
console.log(`vykdom cikla`,i);
}
console.groupEnd();
/* while */

/*
while(salyga){veiksmai...}
Naudojame tuomet,kai negalime apskaiciuoti reikalingo iterciju kiekio.
*/
console.groupCollapsed(`while intro`);
let iteracija =1;
while(iteracija <= 10){
    console.log('while ciklas',iteracija);
    iteracija++;
}
console.groupEnd();

/* do while */

/*
 do{veiksmai...}while(salyga)
 Ciklo veiksmai butu ivykdyti bent viena karta
*/
console.groupCollapsed(`do while `);
do{
    console.log('ivyko bent viena syki');
}while(false)
console.groupEnd();


/* for of */
/* 
for(value of array) {veiksmai...}
Naudojamas norint iteruoti per iteruojama duomeni(dazniausiai masyvas)
*/
console.groupCollapsed(`for of `);
let masyvas =[5,8,7,6,2,1,5,1,0];
for(let katinukas of masyvas){
    console.log(katinukas);
}
console.groupEnd();
//console.log('uz ribu',katinukas);


/* for in*/
/*
for(key in object){veiksmai...}
Naudojamas norint iteruoti per objekta

Naudojant for of ir Object.keys() objekto raktiniai zodziai yra patalpinami 
 kintamuosiuose ir tam,kad juos panaudotume,turime i objekta kreiptis nebe per taska,
bet per sklaiustelius:objektas.raktas,bet objektas[raktas]
*/
console.groupCollapsed(`for in `);
let objektas = { pirmas:'haha',antras:'hihi',trecias:':('};
for(let raktas in objektas){
    console.log(raktas,objektas[raktas]);
   
}
console.groupEnd();
/* variable scope (scope-veiklos sritis,apimtis)*/
/* 
Kintamieji egzistuoja savo ribose.
Ribos nurodomos {} skliausteliais
*/
console.groupCollapsed(`variable scope`);
let katinelis = 'ryzas';
console.log(katinelis);
{
  console.log(katinelis);
  let suniukas ='taksas';
  var suniukas2 ='Biglis';
  const suniukas3 ='Terjeras';
  console.log(suniukas);
  console.log(suniukas2);
  console.log(suniukas3);
}
//console.log(suniukas);
//console.log(suniukas3);
console.log(suniukas2);
//console.log(i);
console.groupEnd();

let gyvunuMasyvas =['suniukas','katinukas','eziukas','kate','suo','ryklys','begemotas','krokodilas',
'zirafa','zebras','aligatorius','dramblys'];
console.log(gyvunuMasyvas);
//console.log(gyvunuMasyvas[0]);
//console.log(gyvunuMasyvas[1]);
//console.log(gyvunuMasyvas[2]);
//console.log(gyvunuMasyvas[3]);
//console.log(....);

//ciklas,kuris spausdina visus gyvunus nuo pirmo iki paskutinio

/*for( let i = 0; i < gyvunuMasyvas.length ; i++){
    console.log(gyvunuMasyvas[i]);
}*/

//ciklas,kuris spausdina visus gyvunus nuo paskutinio iki pirmo
/*for(let i = gyvunuMasyvas.length-1; i >=0; i--){
    console.log(gyvunuMasyvas[i]);
}*/
// ciklas,kuris spausdina kas trecia gyvuna nuo penkto iki galo
for(let i=4; i< gyvunuMasyvas.length;i+=3){
    //i+3 === i=i+3
    console.log(gyvunuMasyvas[i]);
}