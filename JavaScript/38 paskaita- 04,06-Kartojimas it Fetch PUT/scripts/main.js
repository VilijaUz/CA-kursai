//    Kintamieji
let zodis = 'Zodinis kintamasis';
let skaicius = 654;
let loginis = false;
let masyvas = ['tekstas', 54, true];
let objektas = {
  raktinisZodis: 'reiksme',
  rytmetis: true,
  valanda: 9
};
//    Aritmetika

//     Salygos

console.groupCollapsed('NOT AND OR');
console.log(5 == '5');// true
console.log(5 === '5');//false
console.log(!true);//false
console.log(false && true);//false
console.log(true && true);//true
console.log(false || true);//true
console.log(false || false);//false
console.groupEnd();
// if(true){

// }else if(true){
// }else if(true){
// }else{}

// switch (salygosReiksme) {
//   case salyga:
//     //veiksmai
//     break;
//   case salyga:
//     //veiksmai
//     break;
//   default:
//   //veiksmai

// }

// salyga ? tiesa: melas;
// salyga? tiesa: kitaSalyga ? tiesa: melas ;

//salyga && tiesa;

//    CIKLAI
// for(let iteracija=0; salygaSuIteracija;iteracija++){
//   //veiksmai
// }
// while(tiesa){
//   //veiksmai
// }
// for(const elementas of masyvas){
//   //veiksmai su elementais
// }
// for(const raktinisZodis in objektas){
//   //veiksmai su objekto elementu
// }
// do{
//   //veiksmas
// }while(tiesa);

//     FUNKCIJOS
// function nameOffFunction(par1,par2,par3){
//   //veiksmai su par1,par2,par3
// }
// nameOffFunction(arg1,arg2,arg3);
// nameOffFunction(arg5,arg6,arg7);
// nameOffFunction(arg11,arg2222,arg666);

// const arrowFunction =(par1,par2)=>{
//   //veiksmai su par1,par2
// }


//      NODE 
//    Selektinimas
// const rastasElementas=document.querySelector('selektorius');
// const rastiElementai=document.querySelectorAll('selektorius');
//      Event'ai
// NODE.document.addEventListener('veiksmas',funkcija);
//      Kurimas
// const divas=document.createElement('div');
// divas.setAttribute('id','idName');
// divas.classList.add('pridedamKlase');
// document.appendChild(divas);

// //      FORMu nuskaitymas
// document.querySelector('FORMOS_Selektorius')
// .addEventListener('submit',event=>{
//   event.preventDefault();
//   const formosIvestys={
//   ivestis1:event.target.elements.inputName1.value,
//   ivestis2:event.target.elements.inputName2.value,
//   ivesti3:event.target.elements.inputName3.value,
//   ivestis4:event.target.elements.inputName4.value,
//   }
// });

//     METODAI
// Masyvu iteraciniai
// masyvas.forEach(masyvoElementas => {
//   console.log(masyvoElementas);
// });

//     DESTRUKTURIZAVIMAS
// function ageAfter10Years({amzius,...rest}){
//   console.log(rest)//vietoj rest - amzius
//   return amzius+10;
// }
// console.log(ageAfter10Years({vardas:'Rokas',pavarde:"Banaitis",amzius:26}));
//       Moduliai

//  export default function vardas(){}
//  import kazka from './Kazkur.js'

//  export {data1,data2,data3};
//  import {data1 as something,data2,data3} from './kazkur.js';


//    KLASES
// class KlasesVardas {
//   constructor(props) {
//     this.kaipVadinasiuPropsViduje = props;
//     return this.render();//nereikia skliaustuose nieko rasyti jei klases viduje yra

//   }
//   render() {
//     //kazka darau su....
//     this.kaipVadinasiuPropsViduje;
//   }
// }

// class Gyvunas {
//   constructor(vardas, kojuKiekis, spalva, veisle) {
//     this.vardas = vardas;
//     this.kojuKiekis = kojuKiekis;
//     this.spalva = spalva;
//     this.veisle = veisle;
//   }
// }
// class Kate extends Gyvunas {
//   constructor(balsas, ...rest) {
//     super(...rest);
//     this.balsas = balsas;
//   }
// }

// const gyvunas0 = new Gyvunas('Bobas', 2, 'orange', 'kengura');
// const gyvunas1 = new Kate('Miau', 'Raine', 4, 'orange', 'siamo');

// console.log(gyvunas0, gyvunas1);


//        Data Storige
// duomenu saugojimas vartotojo dalyje(atitinkamame domaine)
// document.cookie='';
// window.sessionStorage.metodas();
// window.localStorage.metodas();
// window.sessionStorage.setItem("raktas",`{
//   vardas:"R",
//   pavarde:'b'
// }`);-taip negalima..tik stringai

// Duomenu saugojimas atskirame faile - JSON



// let jsonFormatas=JSON.stringify(objektas);//saugojimui
// let nebejsonFormatas=JSON.parse(JSON_sintaksei????); //paemimui
// ????

// console.log(objektas);
// console.log(jsonFormatas);
// console.log(nebejsonFormatas);

///    FETCH

fetch('URL')
  .then(res => res.json())
  .then(data => {
    //veiksmai su data
  });

fetch('URL', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(objektas)
})
  .then(res => res.json())
  .then(data => {
    //veiksmai su data(data yra issiustas objeltas,kazkaip galbut pakeistas
    //API,sugrazintas)
  });

fetch('URL/ID', {
  method: "DELETE",

})
  .then(res => res.json())
  .then(data => {
    // data gali buti kazkoks atsakymas is serverio ar pavyko ar nepavyko
    //trinti nurodyta irasa
  });
//    PUT
fetch('URL/ID', {
  method: "PUT",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ rytmetis: false })
})
  .then(res => res.json())
  .then(data => {
    //data gali buti pakites duomuo,pagal pateikta informacija
    /*
    {
      rytmetis:false,
      id:1
    }
    */
  });


//    PATCH
fetch('URL/ID', {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ rytmetis: false })
})
  .then(res => res.json())
  .then(data => {
    //data gali buti pakites duomuo,pagal pateikta informacija
    /*
    {
    raktinisZodis: 'reiksme',
    rytmetis: true,
    rytmetis0: false,(prideda nauja)
    valanda: 9,
    id:1
  }
    */
  });

/*
let data_API_Viduje = {
  raktinisZodis: 'reiksme',
  rytmetis: true,
  valanda: 9
};

*/