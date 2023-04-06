//           Cookies
document.cookie = 'pavadinimas=reiksme';
// document.cookie=`vardas=Rokas;expires=${new Date('2023 03 30 13:52')}`;

//            Session Storage
sessionStorage.setItem('raktinisZodis', 'reiksme');
sessionStorage.setItem('vardas', 'Rokas');
sessionStorage.setItem('pavarde', 'Banaitis');
sessionStorage.removeItem('pavarde');
// sessionStorage.clear();//isvalo visa sessionStorage
console.log(sessionStorage.getItem('vardas'));
let sessionVardas = sessionStorage.getItem('vardas');
console.log(sessionVardas);
// sessionStorage.key();//kelintasis elementas
let sessionRaktas = sessionStorage.key(1);
console.log(sessionRaktas);
console.log(sessionStorage.length);

//         Locale Storage
window.localStorage.setItem('tema', 'runescape');
window.localStorage.setItem('iTema', 'false');
window.localStorage.removeItem('iTema');
//localStorage.clear();
console.log(window.localStorage.getItem('tema'));
console.log(window.localStorage.key(0));
console.log(window.localStorage.length);

const duomenys = {
  asmenys: [
    {
      vardas: 'Rokas',
      pavarde: 'Banaitis',
      amzius:26,
      vedes:false
    }, {
      vardas: 'tadas',
      pavarde: 'tadaitis',
      amzius:37
    }, {
      vardas: 'Lukas',
      pavarde: 'Lukaitis',
      amzius:40
    }
  ], masinos: [
    {
      marke: 'Audi',
      modelis: 'pp',
      metai: 2000
    }, {
      marke: 'BMW',
      modelis: '6',
      metai: 2006
    }, {
      marke: 'AFiat',
      modelis: 'xx',
      metai: 2009
    }
  ],
  kazkaDaro(){
    console.log('magija');

  }
};
window.localStorage.setItem('duomenys',JSON.stringify(duomenys));
console.log(window.localStorage.getItem('duomenys'));
console.log(JSON.parse(window.localStorage.getItem('duomenys')));
console.log(JSON.parse(window.localStorage.getItem('duomenys')).asmenys);


//     Node Elementai

const nodeSekcija =document.querySelector('#nodeElements');
let divas =document.createElement('div');
divas.classList.add('kortele','remeliai');
nodeSekcija.appendChild(divas);
let heading=document.createElement('h1');
divas.appendChild(heading);
let textPavadinimas =document.createTextNode('pavadinimas');
heading.appendChild(textPavadinimas);
console.dir(divas);
heading.addEventListener('click',()=>{
  console.log('hi');
  // divas.classList.toggle('redBg');
if(heading.classList.contains('redBg')){
  heading.classList.remove('redBg');
  console.log('atemiau fono spalva');
}else if(!heading.classList.contains('redBg')){
heading.classList.add('redBg');
console.log('pridejau fono spalva');}
});
// heading.addEventListener('mouseleave',()=>{
//   divas.classList.remove('redBg');
// })
let trinimoMygtukas=document.createElement('button');
divas.appendChild(trinimoMygtukas);
let trinimoMygtukoTekstas=document.createTextNode('Trinti');
trinimoMygtukas.appendChild(trinimoMygtukoTekstas);
trinimoMygtukas.addEventListener('click',(e)=>{
  e.target.parentElement.remove();
  console.log('Sunaikinau div kortele MUHAHAHAHA');
});