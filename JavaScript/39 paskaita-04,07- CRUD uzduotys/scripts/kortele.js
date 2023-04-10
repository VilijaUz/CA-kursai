import Modalas from "./modals.js";
export default class Kate{
  constructor({vardas,lytis,amzius,image,id}){
    this.vardas=vardas;
    this.lytis=lytis;
    this.amzius=amzius;
    this.img=image;
    this.id=id;
    return this.render();
  }
  render(){
    this.kortele=document.createElement('div');
    this.kortele.classList.add('kates');

    this.heading=document.createElement('h1');
    this.headingText=document.createTextNode(`${this.vardas}`);
    this.heading.appendChild(this.headingText);

    this.lytisPar = document.createElement('p');
    this.lytisParText = document.createTextNode(`Lytis: ${this.lytis}`);
    this.lytisPar.appendChild(this.lytisParText);

    this.amziusPar = document.createElement('p');
    this.amziusParText = document.createTextNode(`Amžius: ${this.amzius}`);
    this.amziusPar.appendChild(this.amziusParText);

    this.imageP = document.createElement('img');
    this.imageP.setAttribute('src', this.img);
    this.imageP.setAttribute('alt', 'kate');

    this.deleteButton=document.createElement('button');
    this.deleteButtonText=document.createTextNode('Ištrinti');
    this.deleteButton.appendChild(this.deleteButtonText);

    this.updateButton=document.createElement('button');
    this.updateButtonText=document.createTextNode('Pakeisti');
    this.updateButton.appendChild(this.updateButtonText);
    this.update();
    this.delete();

    this.kortele.append(this.heading,this.lytisPar ,this.amziusPar , this.imageP ,this.updateButton,this.deleteButton);
    return this.kortele;
 } 
delete() {
  this.deleteButton.addEventListener('click', () => {
    this.kortele.remove();
    fetch(`http://localhost:3000/kates/${this.id}`, {
      method: "DELETE"
    }
    )
  });
}
 update() {
    this.updateButton.addEventListener('click',()=>{
      // console.log(this.vardas);
      new Modalas(this.id,this.vardas, this.lytis, this.amzius,this.img,this.kortele);
    
    });
  }

}
