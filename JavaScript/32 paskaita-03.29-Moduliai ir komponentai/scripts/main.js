import{ sum as sudetis,division }from './matematika.js';
import mumboJumbo,{kita}from './randomColor.js';
import P from './paragraph.js';
import H from './heading.js';
import Card from './card.js';
import List from './list.js';

console.groupCollapsed('moduliai');
kita();kita();
console.log(sudetis(`spalva:`,mumboJumbo()));
console.log(division(800000,3));
console.groupEnd();


const testSection = document.querySelector('#test');
const paragraph0 = new P({
  text:'Sukureme paragrafa :',
  class: ['raudonasTekstas','didelisTekstas','centruotasTekstas']
});
const paragraph1 = new P({text:'Saule sviecia :'});
// console.log(paragraph0);
// console.dir(paragraph0);

testSection.append(paragraph0,paragraph1);
const heading0 =new H({
  text:'As esu paragrafas',
  size:1
});
const heading1 =new H({
  text:'As esu  mazas paragrafas',
  size:5
});

const card0 =new Card({ 
 class:[],
 image:{
src:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
alt:'cat'

 },
 heading:{
  text:'Katinas maziukas..',
  size:1
 },
 paragraph:{
  text:'as dar augu...'
}
});

const sarasas0=new List({
  listType:'ol',
  listClass:['vienaKlase' ,'kitaKlase'],
  // typeAttribute:'A',
  listItemsClass:['liKlase'],
  listItems:[
    {
      text:'Pirmas'
    },{
      text:'Antras'
    },{
      text:'Ne PIRMAs',
      class:['unikaliKlase']
    },{
      text:'Kazkelintas'   
    },{
      text:'Paskutinis maybe'
    }
  ]
});
console.log(card0);


testSection.append(card0,heading0,paragraph0,heading1,paragraph1);





// 0) Sukurti Klasę, kurios pagalba galima būtų kurti IMG 
// elementą, su jo atributais.

class Image {
  constructor(props) {    //src, alt, title, className
    this.props=props;
    return this.render();
  }
  render() {
    this.image=document.createElement('img');
    this.image.setAttribute('src',this.props.src);
    this.props.alt && this.image.setAttribute('alt',this.props.alt);
    return this.image;
  }
}
const image0=new Image(
 {src:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=',alt:'cat'}
  
);
console.log(image0);
let imageSection=document.querySelector('#image');
imageSection.append(image0);


// 1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus 
// su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus) 
// P.S. Stilizuoti :)

// class List {
//   constructor(type = "ul") {
//     this.type = type;
//     this.items = [];
//   }

//   add(text, attrs = {}) {
//     this.items.push({ text, attrs });
//   }

//   render() {
//     const list = document.createElement(this.type);

//     this.items.forEach((item) => {
//       const listItem = document.createElement("li");

//       for (const [key, value] of Object.entries(item.attrs)) {
//         listItem.setAttribute(key, value);
//       }

//       listItem.textContent = item.text;
//       list.appendChild(listItem);
//     });

//     // list.style.listStyle = "none";
//     // list.style.padding = "0";
//     // list.style.margin = "0";

//     return list;
//   }
// }

// // Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą,
// //  kurio viduje būtų OPTION'ai. (kas be ko, galimybė suteikti 
// //   tekstus ir atributus). P.S. Stilizuoti :)

class Select {
  constructor(options) {
    this.element = document.createElement("select");
    this.options = options;
    
    this._render();
  }
  
  _render() {
    for (let i = 0; i < this.options.length; i++) {
      const option = document.createElement("option");
      option.textContent = this.options[i].text;
      option.value = this.options[i].value;
      
      for (let attr in this.options[i].attributes) {
        option.setAttribute(attr, this.options[i].attributes[attr]);
      }
      
      this.element.appendChild(option);
    }
  }
  
  renderTo(parent) {
    parent.appendChild(this.element);
  }
}
const options = [
  { text: "Pasirinkite vieną", value: "", attributes: { disabled: true, selected: true } },
  { text: "Vilnius", value: "vilnius" },
  { text: "Kaunas", value: "kaunas" },
  { text: "Klaipėda", value: "klaipeda" }
];

const select = new Select(options);
select.renderTo(document.body);
console.log(Select);

let listSection=document.querySelector('#list');
listSection.append(select);
////-----------------------------

