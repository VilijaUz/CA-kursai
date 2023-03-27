/* Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus
 su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)*/

function matematiniaiVeiksmaiDaugyba(sk1, sk2) {
  return sk1 * sk2;
}
console.log(matematiniaiVeiksmaiDaugyba(10, 2));

function matematiniaiVeiksmaiSuma(sk1, sk2) {
  return sk1 + sk2;
}
console.log(matematiniaiVeiksmaiSuma(15, 30));

function matematiniaiVeiksmaiLiekana(sk1, sk2) {
  return sk1 % sk2;
}
console.log(matematiniaiVeiksmaiLiekana(655, 22));

function matematiniaiVeiksmaiDalyba(sk1, sk2) {
  return sk1 / sk2;
}
console.log(matematiniaiVeiksmaiDalyba(988, 13));
/* Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo 
masyvo elementusnuo pirmo iki paskutinio.*/

const meniu = ['zuvis', 'kose', 'sriuba', 'kava', 'vaisiai', 'salotos'];

function isvestiVisusElementus(masyvas) {
  // patikrinti kaip atrodo masyvas console.log(masyvas);
  for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
  }
}
isvestiVisusElementus(meniu);
/*3- Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo
 masyvo elementus nuo paskutinio iki pirmojo.*/

function isvestiAtvirksciai(masyvas) {
  for (let i = masyvas.length - 1; i >= 0; i--)
    console.log(masyvas[i]);
}
isvestiAtvirksciai(meniu);


/*4-Sukurti funkciją, kuri surikiuotų gautąją informaciją 
(parametrą(masyvą(tik su string kintamaisiais))) 
abeceliškai ir ją išvestų į konsolę.*/
//const meniu1 = ['zuvis', 'kose', 'sriuba', 'kava', 'vaisiai', 'salotos'];
function surikiuoti(meniu) {
  console.log(meniu.sort());
}
surikiuoti(meniu);

/*5-Sukurti funkciją, kuri surikiuotų gautąją informaciją 
(parametrą(masyvą(tik su number kintamaisiais))) 
nuo didžiausio iki mažiausio ir ją išvestų į konsolę.*/
const number = [6, 10, 15, 123, 899, 64, 78, 55, 789, 2, 77, 49, 70];
function surikiuotiNumber(number) {
  console.log(number.sort((a, b) => b - a));
}
surikiuotiNumber(number);
/*6-Sukurti funkciją, kuri į konsolę išvestų visus skaičius
 nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai).
  (paduodu 5,9 => grąžina 5,6,7,8,9)*/

function isvestiSkaicius(nuo, iki) {
  for (let i = nuo; i <= iki; i++) {
    console.log(i);
  }
}
isvestiSkaicius(13, 18);
/*7-Sukurti funkciją, kuri į konsolę išvestų skaičius kas
 pirmąjį duotajį parametrą nuo antrojo duotojo parametro
 (imtinai) iki trečiojo duotojo parametro (imtinai).
  (paduodu 2,5,9 => grąžina 5,7,9)*/

console.groupCollapsed(`ivesti intervala`);
function isvestiSuInervalais(sk1, sk2, sk3) {
  for (let i = sk2; i <= sk3; i += sk1) {
    console.log(i);
  }
}
isvestiSuInervalais(2, 5, 9);
console.groupEnd();

/* 8-Sukurkite funkciją, kuri paims du parametrus -
 vardą ir pavardę - ir grąžins sumą šių žodžių ilgių
  (t.y. "Petras", "Petrauskas" => 16).*/

console.groupCollapsed(`Vardo ilgis skaiciais`);
function vardasPavarde(vardas, pavarde) {
  let vardoIlgis = vardas.length + pavarde.length;
  return vardoIlgis;
}
console.log(vardasPavarde('Petras', 'Petrauskas'));
console.groupEnd();

/*9-Sukurkite funkciją, kuri pagal paduotą skaičių grąžins
 abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 
 Hint: Jums reikės pirma sukurti Array su visomis raidėmis 
 (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą 
 atitinkamą raidę.*/
console.groupCollapsed(`gautiRaide`);
const raides = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z'];
function gautiRaide(numeris) {
  return raides[numeris - 1];
}
console.log(gautiRaide(3));
console.groupEnd();

/*10- Sukurkite funkciją, kuri paims tris parametrus 
(n1, n2, operator). Operator gali būti "sum", "sub", "div",
"multi" (matematinės reikšmės - sudėti, atimti, padalinti,
padauginti). n1 ir n2 bus skaičiai. Turite grąžinti
atsakymą, kur n1 ir n2 atlikta matematinė operacija
(pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).
 Hint: Reikės funkcijoje naudoti if-else arba switch.  */

function trysParametrai(n1, n2, operator) {
  switch (operator.trysParametrai()) {
    case "sub":
      return n1 - n2;
    case "sum":
      return n1 + n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
    default:
      console.log('Ivestas neteisingas operatorius');
  }

}

/*11-Sukurkite dvi funkcijas: viena grąžina random skaičių 
nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu.
 Iškviesk abi funkcijas vienoje eilutėje 
 (pvz. squareNum(generateRandomNumber()) => 1...100).*/
/*
Math.random()                  =>0.0000000001->0.9999999999
Math.random()* 10              =>0.000000001->9.99999999(8.54641694)
Math.ceil(Math.random()* 10)   =>1 ->10 apvalina i didesni sveika skaiciu(1,2,3,4,5,6,7,8,9,10)
Math.floor()  apvalina i mazesni sveikaji skaiciu
Math.round()  apvalina pagal apvalinimo taisykles iki sveikojo skaiciaus
number.toFixed(skaicius) apvalina number'i iki nurodyto skaiciaus uz kablelio

*/


function randomas(){
  return Math.ceil(Math.random()*10)
}
function kvadratu(){
  return randomas()**2;
}
console.log(kvadratu());

//geresnis budas

function kelimas(sk){
  return sk**2
}
console.log(kelimas( randomas()));
console.log(kelimas(5));


/* extra0- Sukurti funkciją, kuri į pirmojo parametro (masyvo)
 vidų sudėtų antrojo parametro (masyvo irgi) elementus toje
  vietoje, kokio ilgio yra antrasis parametras (tuo momentu) 
  tol kol antrasis parametras liks tuščias. 
  (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c];
     a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])
 */
function swapArrays(arr1,arr2){
//for(let i=arr2.length-1;i>=0;i-=1){
  while(arr2.length)arr1.splice(arr2.length,0,arr2.shift())
  //arr1.splice(arr2.length,0,arr2.shift())

//}
return arr1
}
console.log([1,2,3,4,5,6,7],['a','b','c'])

/* extra1- Sukurti funkciją, kuri atlieka Fizz Buzz testą 
nuo-iki duotųjų parametrų. */
console.groupCollapsed(`Fizz Buzz`);
function fizzBuzz(nuo, iki) {
  //console.log(nuo,iki);
  //if (typeof(nuo)!==="number" && typeof(iki)!==='number'){
  if (isNaN(nuo) || isNaN(iki)) {
    return "klaida";
  }
  const atsakymas = [];
  for (let i = nuo; i <= iki; i++) {
    //console.log(i);
    if (i === 0) {
      atsakymas.push(i);
    } else if (i % 3 === 0 && i % 5 === 0) {//i%(3*5)===0
      atsakymas.push('FizzBuzz');
    } else if (i % 3 === 0) {
      atsakymas.push('Fizz');
    } else if (i % 5 === 0) {
      atsakymas.push('Buzz');
    } else {
      atsakymas.push(i);
    }
  }
  return atsakymas;
}
console.log(fizzBuzz(1, 100));

//atsakymas

console.groupEnd();


/* Pirminiu skaiciu funkcija */
function pirminiaiSkaiciai(nuo, iki) {
  let functionStartTime = Date.now();
  //console.time();
  console.log(nuo, iki);
  //let pirminiuSkaiciuMasyvas=[]; tada vietoj console.log >pirminiuSkaiciuMasyvas.push(i);
  for (let i = nuo; i <= iki; i++) {
    let arPirminis = true;//prielaida,kad i-tasis yra pirminis skaicius
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arPirminis = false;
        break;
      }
    }
    if (arPirminis) {
      console.log(i, "yra pirminis skaicius");
    }

  }
  //console.timeEnd();
  let functionEndTime = Date.now();
  console.log(functionStartTime, functionEndTime);
  console.log(functionStartTime - functionEndTime, 'miliseconds');
}
let pirminiuSkaiciuAtsakymas = pirminiaiSkaiciai(2, 100);

//pirminiaiSkaiciai(8,30);
//youtube pamokos-loops(for | while |do...while |for..in |for...of)
const names = ['jon', 'mary', 'bob', 'joe'];

//for (let i=0;salyga i<5;i++ ){console.log('');}
/* nelyginiu skaiciu salyga-spausdina:1,3,5
for (let i=1;salyga i<=5;i++ )
if(i%2 !==0)
{console.log('i');}

reversas:  spausdina:5,3,1
for (let i=5;i>=1;i--)
if(i%2 !==0)
{console.log('i');}

*/
for (name of names) console.log(name);
const user = { firstName: 'john', lastName: "Doe" };
for (key in user) console.log(user[key]);

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
  if (i === 5) break;
}
names.forEach(name => {
  console.log(name);
})
console.log('==================================')
/*
let data={
  name:'jon',
  age:28
}
   for(let elem in data){
    console.log(elem);isspausins ir jon ir 28 
   }
   console.log(data['age']) - isspausins tik 28
*/