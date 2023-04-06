// function car(make,model,year){
// return{
//   make:make,
//   model:model,
//   year:year,
//   metodas(){

//   },kitasmetodas(){

//   }
// }
// };

//new Date().getFullYear()    Date.current  //rgb 0-255*3


class Car {
  #make; #model; #year; #color; #basePrice; #engineType; #photo;
  constructor({ make, model, year, basePrice, engineType, photo }) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}
    ,${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    this.#basePrice = basePrice;
    this.#engineType = engineType;
    this.#photo = photo;
  }
  getMake() {
    return this.#make;
  }
  setMake(newMake) {
    return this.#make = newMake;
  }
  getModel() {
    return this.#model;
  }
  setModel(newModel) {
    return this.#model = newModel;
  }
  getYear() {
    return this.#year;
  }
  setYear(newYear) {
    return this.#year = newYear;
  }
  getColor() {
    return this.#color;
  }
  setColor(newColor) {
    return this.#color = newColor;
  }
  getEngineType() {
    return this.#engineType;
  }
  setEngineType(newEngineType) {
    this.#engineType = newEngineType;
  }
  getBasePrice() {
    return this.#basePrice;
  }
  setBasePrice(newBasePrice) {
    this.#basePrice = newBasePrice;
  }
  getPrice() {
    switch (this.#engineType) {
      case 'gas':
        return this.#basePrice + 300;
      case 'petrol':
        return this.#basePrice + 600;
      case 'electic':
        return this.#basePrice + 2500;
      default:
        return this.#basePrice;
    }
  }
  getPhoto() {
    return this.#photo;
  }
  setPhoto(newPhoto) {
    this.#photo = newPhoto;
  }
  turnEngineOn() {
    return "Vroom!!!";
  }
  getCarAge() {
    return new Date().getFullYear() - this.#year;
  }
}


const carsData = [
  {
    make: 'Volswagen',
    model: 'Passat',
    year: 2005,
    basePrice: 500,
    enginePrice: 'gas',
    photo: 'https://www.startmag.it/wp-content/uploads/volkswagen-emblem.jpg'
  },
  {
    make: 'Audi',
    model: 'TT',
    year: 2010,
    basePrice: 1200,
    enginePrice: 'petrol',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6bF8FAVtLVMp58QvOIc1BtpJfX8JxJOCfZlwNax2&s'
  },
  {
    make: 'BMW',
    model: '6',
    year: 2015,
    basePrice: 3400,
    enginePrice: 'electric',
    photo: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X3/8712/1643014589234/front-view-118.jpg?tr=w-420'
  },
  {
    make: 'Fiat',
    model: 'Punto',
    year: 2001,
    basePrice: 400,
    enginePrice: 'petrol',
    photo: 'https://media.istockphoto.com/id/492426878/photo/fiat-500-engine.jpg?s=612x612&w=0&k=20&c=t1YjSty3JfVf0S_ClkDCkUItlYiw250yivqRPYx3lj4='
  },
];
// console.log(JSON.stringify(duomenys));
// const carsObjects =[];
// carsData.forEach(car=>carsObjects.push(new Car(car)));
// is duomenu paversta OBJEKTAIS,klase is paprasto objeto padaro sudetingesni

const carsObjects = carsData.map(car => new Car(car));
//per carsData sukame cikla per visus elementus(car),kuri grazina duomenis(klase?) i  nauja klase

console.log(carsObjects);
//console.log(carsobjects[0].make); undefined
console.log(carsObjects[0].getMake());
//console.log(carsData[0].getMake());-


carsObjects.forEach(car => {
  document.querySelector('#allCars').innerHTML += `
<div class="car">
        <h1>${car.getMake()} ${car.getModel()}</h1>
        <img src="${car.getPhoto()}" alt="${car.getMake()} ${car.getModel()} photo">
        <div class="carSpecs">
          <div>
            <p>YoM:${car.getYear()}</p>
            <p>Engine:${car.getEngineType()}</p>
            <p>Color: <span style="background-color:${car.getColor()}"></span></p>
          </div>
          <div>
            <p>Price:${car.getPrice()} &euro;</p>
          </div>
         </div>
       </div>
`;
});
document.querySelector('#newCars>form').addEventListener('submit', e =>{
  e.preventDefault();
  console.log(e.target.elements);
  let car ={
    make:e.target.elements.make.value,
    model:e.target.elements.model.value,
    year:e.target.elements.year.valueAsNumber,
    basePrice:e.target.elements.basePrice.valueAsNumber,
    engineType:e.target.elements.engineType.value,
    photo:e.target.elements.photo.value
  };
  console.log(car);
  const coolCar =new Car(car);
  console.log(coolCar);
  document.querySelector('#allCars').innerHTML += `
<div class="car">
        <h1>${coolCar.getMake()} ${coolCar.getModel()}</h1>
        <img src="${coolCar.getPhoto()}" alt="${coolCar.getMake()} ${coolCar.getModel()} photo">
        <div class="carSpecs">
          <div>
            <p>YoM:${coolCar.getYear()}</p>
            <p>Engine:${coolCar.getEngineType()}</p>
            <p>Color: <span style="background-color:${coolCar.getColor()}"></span></p>
          </div>
          <div>
            <p>Price:${coolCar.getPrice()} &euro;</p>
          </div>
         </div>
       </div>
`;
});
// UZDUOTYS
// 1 optional) Pastilizuoti formą (kurios pagalba kuriamos naujos mašinos).
// 1.1 optional) Perrašyti innerHTML į createElement, append, textNode....
// 1.2 optional) Visą mašinos kūrimo (ar tai su append ar tai su innerHTML) 
// dalį parašyti funkcijos viduje, į kurią galima kreiptis iš kur nori ir
//  kiek nori kartų.(25 paskaita)

let naujasDok =document.querySelector(`#allCars`);
let naujasDivas = document.createElement('div');
naujasDivas.classList.add('car');
let naujasHeading = document.createElement('h1');
let tekstas = document.createTextNode('Pavadinimas');
let naujasImage = document.createElement('img');
naujasImage.setAttribute('src', '${coolCar.getPhoto()}');
naujasImage.setAttribute('alt', 'photo');
let naujasDivas2 = document.createElement('carSpecs');
let naujasParYear = document.createElement('p');
let naujasParEngine = document.createElement('p');
let naujasParPrice = document.createElement('p');

naujasHeading.appendChild(tekstas);
naujasParYear.appendChild(tekstas);
naujasParEngine.appendChild(tekstas);
naujasParPrice.appendChild(tekstas);
naujasDivas.append(naujasHeading, naujasImage, naujasParYear,naujasParEngine,naujasParPrice);
console.dir(naujasDivas);








// 2) Sukurkite klasę vardu "Rectangle" 
// ir duokite jai "width" ir "height" parametrus.
// 2.1) Sukurkite papildomą parametrą "color"
//  ir priskirkite jam randomly parinktą spalvą
//2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  } 
  //  `#${Math.floor(Math.random()*167777256.toString(16))};
  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangl = new Rectangle(10, 5);
console.log(rectangl.color); // spausdina sugeneruotą atsitiktinę spalvą
console.log(rectangl.area()); // spausdina stačiakampio plotą
console.log(rectangl.perimeter()); // spausdina stačiakampio perimetrą

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
//   3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų 
//   taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  coordinates() {
    return `(${this.x};${this.y})`;
  }
  //Point.distance(point1,point2)  
  //point1.distance(point1)
  distance(otherPoint) {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(10, 20);
const p2 = new Point(30, 40);
const distance = p1.distance(p2);
console.log(distance); // spausdina: 28.284271247461902

// 4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", 
// "height" ir "depth" parametrus.
// 4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
// 4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio
// paviršiaus plotą.
// 4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

class Rectangle_3D {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  volume() {
    return this.width * this.height * this.depth;
  }
  surfaceArea() {
    return  2*(this.width * this.height + this.height * this.depth + this.width * this.depth);
    // plotas = 2 * (plotis * aukštis + aukštis * gylis + plotis * gylis). 
  }
  
  perimeter() {
    return 4 * (this.width + this.height + this.depth);
  }
}

const rect = new Rectangle_3D(10, 20, 30);
// const volume = rect.volume();
// const surfaceArea = rect.surfaceArea();
// const perimeter = rect.perimeter();
console.log(rect.volume()); 
console.log(rect.surfaceArea()); 
console.log(rect.perimeter());

//  5 - Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja))
//  2-4 užduotims ir spausdinti informaciją į ekraną. 
//  (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti 
//   figūras puslapyje(bent jau 2D))
