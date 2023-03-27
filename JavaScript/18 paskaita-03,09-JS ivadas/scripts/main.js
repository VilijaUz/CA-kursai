/* 
       Pagrindiniai kiekvienos programavimo kalbos pagrindai: 
kintamieji-variables
?aritmetika -arithmetic/calculus
salygos -conditions
ciklai - loops
funkcijos - functions
*/

/*      Kintamieji
var | let | const -kintamojo startas(rasyti viena is ju,kol kas rekomenduojama 
    -let,kuriant kintamaji,bet KREIPIANTIS i kintamaji ,rasyti var|let|const nereikia.)
  var - senasis uzrasymo budas ,kurio ribos didesnes
  let - naujas uzrasymo budas,kurio ribos mazesnes
  const -  naujas uzrasymo budas,kuris negali buti keiciamas
  __empty_____ - globalus kintamasis(NENEAUDOTI)

susigalvotasKintamojoPavadinimas - 
   sugalvojate kaip vadinsite kintamaji,kintamasis privalo buti :
    vienas zodis,unikalus,prasmingas,negali prasideti skaiciumi,
    naudoti tik lotyniskas raides ir skaicius.

= 
    priskyrimo zenklas

reiksme
   string - rasomas kabutese("" '' ) - tekstine informacija
   number - skaicius -uzrasomas kaip skaicius arba matematine israiska
   boolean - true|false - tiesa arba melas,dvi galimos reiksmes
*/
var pavadinimas = 'reiksme';
var menesis4_asa = "kovas";
var menesiai ="sausis vasaris ....655555 ^*&#/?";
let grazusSkaicius = 66.6*6/66-6+6.6;
let arDabarVasara = false;
let ardabarvasara = 'nea';
let arNoriMiego = true;
const PI = 3.14;
/*  Informacijos atvaizdavimas narsykleje
consol.log() - isveda duomenis i konsole(esancia dev tools'uose)
  console.group() |console.groupCollapsed() - sukuria konsoles grupe
  console.gruopEnd() - uzbaigia konsoles grupe
window.alert() - isveda duomenis i pranesimo lentele
window.prompt() - ekrane atvaizduoja pranesimo lentele su informacijos ivedimo laukeliu;
prilyginus window.prompt()'a kintamajam - galime pasiimti vartotojo ivesta reiksme

*/
console.log(arDabarVasara);
console.log(ardabarvasara);
window.alert('laikas pertraukai');
console.log(ardabarvasara);
let vartotojoReiskme = window.prompt('ar veluojame i pertrauka');

/*   Aritmetika (operatoriai)
veiksmai su duomenimis ( pgr. kintamaisiais)

  +        - sudetis (sum/addition)
  -        - atimtis (subtract)
  *        - daugyba (multiplication)
  /        - dalyba (division)
  **       - kelimas laipsniu (power) ;5**2=25
 **(1/x)   - saknies traukimas (root),x-saknies laipsnis;  25**(1/2)=5
  %        - liekanos radimas (remainder)16%4  LIELANA 0

  Visi aritmetiniai veiksmai apart sudeties atliekami tik su skaiciais.

  string + number = string



*/
let sk1 = 5;
let sk2 = 9;
let zodis = "hihi haha";
let neSkaicius ='5';
let tiesa = '';

console.group('aritmetika');
console.log('sk1+sk2');
console.log('sk1+sk2','5 + 9 =', sk1+sk2);
console.log('5 + 9 =', sk1+sk2);
console.log('5 * 9 =',sk1*sk2);
console.log('5 / 9 =',sk1/sk2);
console.log('5 ** 9 =',sk1**sk2);
console.log('5 ** (1/9) =',sk1**(sk1/9));
console.log('5 % 9 =',sk1%sk2);
console.log('hihi haha + 9 =',zodis+sk2);
console.log("'5' + 9 =",neSkaicius+sk2);
console.log('hihi haha * 9 =',zodis*sk2);//NaN (not a Number)
console.log("'5' * 9 =",neSkaicius*sk2);// 45
console.log("'5' + 9 =",neSkaicius+sk2);
console.groupEnd('pirmoji dalis');

console.groupCollapsed('antroji dalis');
console.log('daug eiluciu');
console.log('daug eiluciu');
console.log('daug eiluciu');
console.groupEnd('antroji dalis');
console.groupEnd;

/*         Prilyginimas ir palyginimas
     Prilyginimas
Naujos reiksmes prilyginimas:
  let kintamasis = 'labas vakaras';
  kintamasis = 50;

  Trumpiniai:
+=  - didinimas per nurodyta skaiciu;
-=  - mazinimas per nurodyta skaiciu;
*=  - dauginimas per nurodyta skaiciu;
/=  - dalinimas per nurodyta skaiciu;
**=  -laipsnio kelimas per nurodyta skaiciu;
%=  - liekanos radimas per nurodyta skaiciu;
**=x -x laipsnio kelimas per nurodyta skaiciu;

      Palyginimai
 > -daugiau
 <  -maziau
 >=  -daugiau arba lygu
 <=  -maziau arba lygu
 ==   -ar lygios duomenu reiksmes
 ===  -ar lygios duomenu reiksmes ir duomenu tipai
 !=   -ar nelygios duomenu reiksmes
 !==  -ar nelygu  duomenu reiksmes ir duomenu tipai
*/

console.groupCollapsed('Prilyginimas');
let kintamasis = 'labas vakaras';
console.log(kintamasis);//labas vakaras
kintamasis = 50;
console.log(kintamasis);
kintamasis = kintamasis+1;//50+1
console.log(kintamasis);//51
kintamasis = kintamasis+sk2;//51+9
console.log(kintamasis);//60
kintamasis = kintamasis-3;//60-3
console.log(kintamasis);//57
kintamasis += 100;//kintamasis = kintamasis +100;
console.log(kintamasis);//157
kintamasis -= 50;//kintamasis = kintamasis - 50;
console.log(kintamasis);//107
kintamasis **= 1/3;
console.log(kintamasis);//4.74
console.groupEnd;

console.groupCollapsed('Palyginimas');
console.log(10 >3);//true
console.log(10 <3);//false
console.log(10 <=3);//false
console.log(3 <=10);//true
console.log(10 >= 3);//true
console.log(10 != 10);//true
console.log(10 == 10);//true
console.log(10 === 10);//true
console.log(10 !== 10);//false
console.log(10 !== '10');//false
console.log(10 !== '10');//false--patikrinti
console.groupEnd;

/*uzduotys*/
console.groupCollapsed('uzduotis');
let numeris = 10;
let numerisGatves = 1;
let numerisNamo = 3;
let numerisBilieto = 11;
let valgisPirmas = 'kava';
let valgisAntras ='arbata';
let valgisTrecias ='33';
let valgisKrtvirtas ='vanduo';
let valgisPenktas ='vynas';
let rytojBusGeraDiena = true;
let rytojBusBlogaDiena = false;
let asNoriuIlauka = true;

console.log(numeris);
console.log(numeris);
numeris = numeris+1;
console.log(numeris);
numeris = numeris +numerisGatves;
console.log(numeris );
numeris  = numeris - numerisBilieto;
console.log(numeris);
numeris -= 50;
console.log(numeris);
numeris ** 1/3;
console.log(numeris)
console.log('numerisGatves + numerisNamo',numerisGatves);
console.log(numeris >numerisGatves);
console.log(numerisGatves <numerisBilieto);
console.log(rytojBusBlogaDiena <numerisNamo);
console.log( asNoriuIlauka !== valgisPenktas );
console.log(rytojBusBlogaDiena===numerisBilieto);
console.log(numeris===numerisBilieto);
console.groupEnd;
/*Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
WebDevSimplified - https://www.youtube.com/@WebDevSimplified (ne tik JS)

FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)
DaveGray - https://www.youtube.com/@DaveGrayTeachesCode (nebloga info overall)
DevDreamer - https://www.youtube.com/@DevDreamer (trumpi video - nesunku dėmesį išlaikyti)
CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)
CoderCoder - https://www.youtube.com/@TheCoderCoder (apie programavimą bendrai (ne tik coding))
SuperSimpleDev - https://www.youtube.com/c/SuperSimpleDev (very very beginner friendly webDev tutorials and stuff)
DaniKrossing - https://www.youtube.com/@Dani_Krossing (web dev)


*/
 