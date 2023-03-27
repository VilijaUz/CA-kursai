//      FUNKCIJOS
/*
  Funkcija yra uzvadintas kodas,kuris nevyksta tol,kol i ji nera kreipiamasi.
  Funkcijos gali priimti duomenis.
  Funkcijos gali grazinti duomenis.

  Sintakse:(Syntax)
      function pavadinimas(){veiksmai....}
      function pavadinimas(params){veiksmai....}

   Kreipimasis:
       pavadinimas();
       pavadinimas(params);

// function pasisveikinimas(){
    console.log'hello,world'); 
}
*/

/*console.log('hello,world');  ${Math.random()}  */
/*function pasisveikinimas(vardas){
    console.log(`Hello ${vardas}!`);
}
pasisveikinimas('Rokas');
pasisveikinimas('Onute');
pasisveikinimas('Adomas');*/

/*function dauginti(sk1,sk2){
    console.log(sk1*sk2);
    console.log(sk1,sk2);
}
dauginti(3,2);
dauginti(20,15);
dauginti(9,105);
*/
/*function dauginti(sk1,sk2){
    return sk1*sk2;   
}
console.log(dauginti(5,4));

let funkcijosAtsakymas = dauginti(5,4)+5;
console.log(funkcijosAtsakymas);*/

/* 
     Kreipimasis i DOM

DOM - Document Object Model

Kreipimasis i dokumente esancius tag'us - document.querySelector
(selektorius)
Ivykio klausimasis dokumente esancio elemento - addEventListener
('event',callback)
*/


/*function keiciamDiva(){
let divas = document.querySelector
('#canGetMe');
console.dir(divas);/*norint atvaizduoti HTML elementa (nod'a)
su issamia informacija,naudojame ne console.log(),bet console.dir()
mouseover <> click*/
/*divas.style.fontSize = "50px";
divas.textContent += ' ,bet pakeistas :)';
divas.style.color = 'red';
}
document
.querySelector('#pressMe')
.addEventListener('click',keiciamDiva);*/

/*
            METODAI (methods)
  Metodas yra funkcija,kuri priklauso kazkokiam elementui/objektio.

  Vieni metodai modifikuoja pradinius duomenis,kiti-nemodifikuoja pradiniu duomenu.

   //Masyvu metodai
pop() - išima iš galo 
shift() - išima iš pradžios 
push() - prideda prie galo 
unshift() - prideda prie pradžios 

splice(1,2,3,4,5...) - 1 pozicijoj prideda 3,4,5... elementą/us ir išima 2 kiekį elementų esančių toliau  
slice(1,2) - paima nuo 1 iki 2, bet masyvo nepakeičia  

sort() - išrikiuoja abecelės tvarka.    
 Su skaičiais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a-b}". 
 Su lietuviškai simboliais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant 
 "function(a,b){return a.localeCompare(b)}". 

  reverse() - apsuka masyvą.  
  1.concat(2,3,4...) - sujungia 1 su 2,3,4... masyvų/ais, bet jų nepakeičia.


  
*/ 
const zemynai = ['Europa','Azija','Afrika','S.Amerika','P.Amerika','Antarktida','Australija'];


console.log(zemynai.pop());//isima  ir grazina paskutini
console.log(zemynai.shift());// isima ir grazina pirma
console.log(zemynai.push('Europa'));//prideda i gala ir grazina nauja masyvo ilgi
console.log(zemynai.unshift('Australija'));//prideda i pradzia ir grazina nauja masyvo ilgi
console.log(zemynai);
console.log(zemynai.reverse());//apvercia sarasa

const lietuvybes = ['šalis','ąsotis','ėdalas','egle','silpnas','stiprus','šakotis','žirafa','zebras','ąžuolas'];
const skaiciai =[1,54,23,66,77,88,105,985,1,2];

console.log(skaiciai.sort((a,b)=> a-b));//rikiuoja 1->9
console.log(skaiciai.sort((a,b)=> b-a));;//rikiuoja 9->1
//console.log(lietuvybes.sort());
//console.log(lietuvybes.sort((a,b)=> a.localeCompare(b)));

console.log(lietuvybes.slice(5,9));// grazina masyvo elementus nuo pirmojo(imtinai)
// iki antrojo (neimtinai)indekso,bet nemutuoja pradinio masyvo


console.log(lietuvybes.splice(5,3,'naujas','dar'));//nuo pirmojo parametro pradeda trinti
// antrajame parametre nurodyta kieki elementu ir toje vietoje prideda sekancius parametrus(jeigu ju yra)
//sitaip mutuodamas pradini masyva.o grazina iskirptus elementus.

console.log(lietuvybes.concat(zemynai));//grazina sujungtus masyvus.Nemutuoja nei vieno is masyvu

/*     funkcijos su masyvais */
function spausdinuMasyvus(masyvas){
    let nenoriModifikuoti = masyvas.slice();
  while(nenoriModifikuoti.length){
    console.log(nenoriModifikuoti.shift());
  }

}

let skaiciuMasyvas =[6,4,694,1,695,123,61];
spausdinuMasyvus(skaiciuMasyvas);
spausdinuMasyvus(lietuvybes);
console.log(skaiciai);
spausdinuMasyvus(skaiciai);
console.log(skaiciai);
