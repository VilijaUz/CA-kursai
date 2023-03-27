/*let entriesMasyvas0=['a','b','c','d'];
let entriesMasyvas1= entriesMasyvas0.entries();
console.log(entriesMasyvas1);
console.log(entriesMasyvas1);
console.log((entriesMasyvas1).next());*/
let fillMasyvas0 = Array(10).fill(null);
let fillMasyvas1 = [1, 2, 3, 4, 5, 6].fill(null, 0, 2);
let fillMasyvas2 = Array.from(Array(10)).keys();
//let fillMasyvas3=Array(N).fill().map((_, i) => i+1);
console.log(fillMasyvas0);
console.log(fillMasyvas1);
console.log(fillMasyvas2);
//console.log(fillMasyvas3);

let masyvas = [1, 2, 3, 4, 5];
console.log(masyvas);
masyvas.pop();
console.log(masyvas);
masyvas.unshift(6);
console.log(masyvas);


//   Funkcijos !!!!!!!
function f_Vardas(param1,param2){
  return param1+param2;
}
console.log(f_Vardas(5,4))

const masyvasNeFunkcijos=['a','b','c','d'];

function masyvas_i_string(masyvas){
  return masyvas.join(';');
}
//console.log(masyvas_i_string(masyvasNeFunkcijos));

let fAtsakymas=masyvas_i_string(masyvasNeFunkcijos);
console.log(fAtsakymas);

//callback -!!!!!!!!

function rikiuotiSkaicius(sk1,sk2){
  return sk1-sk2;
}
const nerikiuotasMasyvas=[5,6,7,9,10,100,102,56];
let rikiuotasMasyvas=nerikiuotasMasyvas.sort(rikiuotiSkaicius);
console.log(rikiuotasMasyvas);

//  arrow funcion !!!!!!

const arrowFunkcija =(par1,par2)=>{
  return par1*par2;
}
let afAtsakymas=arrowFunkcija(5,6);
console.log(afAtsakymas);

// bevardes funkcijos  !!!!!!!!

(function (par1,par2){
  return par1 +'atlikus veiksmus' +par2;
})
((par1,par2)=>{
  return par1 +'atlikus veiksmus' +par2;
})

//((par1,par2)=>par1+'atlikus veiksmus'+par2);

//pvz  Arrow function event'e
document
.querySelector('button')
.addEventListener('click',event=>{
  console.log(event);
  event.target.innerHTML='Paspaudei!';
})




/*   1) Parašykite funkciją, kuri iš jai duotojo masyvo
 suformuotų ir grąžintų string'ą.*/


function arrayToString(masyvas) {
  return masyvas.toString(); // konvertuojame masyvą į string'ą
}
let masyvasUzd1 = [55, 66, 77, 88, 99, 26, 79, 1025];
console.log(masyvasUzd1);
let stringas = arrayToString(masyvasUzd1); // suformuojame string'ą
console.log(stringas);

/*3) Parašykite funkciją, kuri atliktų tą patį, ką daro 
.reverse() metodas. (žinoma nenaudokite reverse) */

function arrayToString(masyvas31, separator) {
  return masyvas31.join(separator);// gali nurodyti skyrikli-join
}

let masyvas31 = ["knyga", "sasiuvinys", "piestukas"];
console.log(masyvas31);
let separator = ",";
let masyvas31Ats = arrayToString(masyvas31, separator);

console.log(masyvas31Ats);
arrayToString(masyvas31);
/* 5) Parašykite funkciją, kuri iš jai paduoto masyvo
 randa ir išspausdina didžiausią ir mažiausią skaičius.*/
let masyvas51 = [23, 56, 49, 2023, 2, 16, 88, 99];
function rastiMinMax(masyvas) {
  masyvas.sort(function (a, b) {
    return a - b;
  });
  let min = masyvas[0];
  let max = masyvas[masyvas.length - 1];
  console.log("Didžiausias skaičius yra: " + max);
  console.log("Mažiausias skaičius yra: " + min);
}
rastiMinMax(masyvas51);
/*  6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų
 grąžina(išveda į konsolę) pasikartojančias reikšmes. 
 (jeigu yra dvi vienodos reikšmės abejuose masyvuose, 
  ta reikšmė turi būti išvesta į konsolę)*/

let masyvas61 = [23, 56, 49, 2023, 2, 16, 88, 100, 55, 2024];
let masyvas62 = [24, 56, 50, 2023, 1, 17, 89, 99, 51, 2024];

function pasikartojanciosReiksmes(masyvas61, masyvas62) {
  let pasikartojancios = masyvas61.filter(reiksme => masyvas62.includes(reiksme));
  console.log(pasikartojancios);
}

pasikartojanciosReiksmes(masyvas61, masyvas62)
/*8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų
 ir į konsolę išspausdintų tik unikalius duomenis. */
 
 let masyvas81 = [23, 56, 49, 2023, 2, 16, 23, 56, 49, 2023, 2, 16, 7, 1, 23, 56, 49, 2023, 2, 16];
 function unikalusMasyvas(masyvas) {
  const unikalus = masyvas.filter((reiksme, indeksas) => masyvas.indexOf(reiksme) === indeksas);
  console.log(unikalus);
}
unikalusMasyvas(masyvas81);
/* filter -išsaugo tik tuos masyvo elementus, kurių indeksas yra
 lygus jų pirmam pasirodymui masyve. Taip yra išsaugomos tik
  unikalios reikšmės. */

/* 10) Parašykite funkciją, kuri iš jai paduoto skaičių masyvo
 atrinktų n'tąjį didžiausią skaičių. 
 (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).
 let masyvas1011=[12,54,1,65,78,91,45];

 function masyvas101(masyvas) {
  return masyvas.slice().sort(((a, b) => b-a ))[n-1] 
   // palyginame elementus mažėjimo tvarka
 }
*/
//console.log(masyvas1011);
// 9 uzduotis

function recurrentInAllArrays(...arrays){
  const res=[]
  const totalArrays=arrays.length
  for (let i=0;i<arrays[0].length;i+=1){
    let existsInAll =true
    for(let j=1;j<totalArrays;j+=1){
      if(!arrays[j].includes(arrays[0][i])) existsInAll = false
    }
    if(existsInAll) res.push(arrays[0][1])
  }
  return res
}


