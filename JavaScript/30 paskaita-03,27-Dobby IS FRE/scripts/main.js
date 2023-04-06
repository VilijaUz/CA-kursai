let asmenys0=[{
  vardas:'rokas',
  pavarde:'ban',
  amzius:26
},{
  vardas:'tadas',
  pavarde:'rus',
  amzius:29
}];

class Asmuo{
  constructor(vardas,pavarde,amzius){
    this.vardas=vardas;
    this.pavarde=pavarde;
    this.amzius=amzius;
  }
  sako(){
    return 'labas';
  }
  pasisveikinti({vardas}){
    return `${this.vardas} pasisveikina su ${vardas}`;
  }
};



let asmenys1=[
  new Asmuo('rokas','ban',26),
  new Asmuo('tadas','rus',29)
];
console.log('non class',asmenys1);
console.log(' class',asmenys1);
console.log(asmenys1[0].pasisveikinti(asmenys1[1]));

// class AntAsmuo {
//   construction(vardas,pavarde,amzius,superGalia){
//     this.vardas=vardas;
//     this.pavarde=pavarde;
//     this.amzius=amzius;
//     this.superGalia=superGalia;
//   }
// }
// class AntAsmuo extends Asmuo{
//   construction(superGalia){
//     super();
//     this.superGalia=superGalia;
//   }
// }
// let zmogusVoras=new AntAsmuo('Peter',"Parker",15,"Voro savybes");
// console.log(zmogusVoras);
// class AntAsmuo extends Asmuo{
//   constructor(superGalia,... zmogausSavbes){
//     this.superGalia=superGalia;
//   }
// }
// let zmogusVoras =new AntAsmuo('')


class Kate{
  sako(){
return 'Miau';
  }
}
let kate1=new Kate();

const skaiciuoti =(a,b)=>{
  return a+b
}
console.log(skaiciuoti(5,6));