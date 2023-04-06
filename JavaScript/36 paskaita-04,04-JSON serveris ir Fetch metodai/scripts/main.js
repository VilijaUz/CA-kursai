import Zmogus from './zmogus.js'

// json-server --watch data.json
// fetch('http://localhost:3000/masinos')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
// //   GET metodas nurodant specific
// fetch('http://localhost:3000/masinos/3')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })


//     DELETE metodas
// fetch('http://localhost:3000/masinos/2', {
//   method: 'DELETE'
// })
//   .then(res => res.json())
//   .then(data => console.log(data))

//       POST metodas
// fetch('http://localhost:3000/masinos', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     marke: 'BMW',
//     modelis: '6',
//     gamybosMetai: 2020
//   })
// })

/*

     CRUD
     C- create  2
     R - read   1
     U - update 4
     D - delete 3
*/

fetch('http://localhost:3000/zmones')
  .then(res => res.json())
  .then(zmones => {
    console.log(zmones);
    const allCards = document.querySelector('#allCards');
    zmones.forEach(zmogus => {
      const zmogusDiv = new Zmogus(zmogus);
      allCards.appendChild(zmogusDiv);

    });
  })

document.querySelector('#newCard>form').
  addEventListener('submit', e => {
    e.preventDefault();
    const elementai = e.target.elements;
    console.log(elementai);
    const zmogus = {
      vardas: elementai.vardas.value,
      pavarde: elementai.pavarde.value,
      amzius: elementai.amzius.valueAsNumber,
      vedes: elementai.vedes.checked,
      lytis: elementai.lytis.value,
      profileImage: elementai.profileImage.value
    };
    // console.log(zmogus);
    const zmogusDiv = new Zmogus(zmogus);
    // console.log(zmogusDiv);
    document.querySelector('#allCards').appendChild(zmogusDiv);
    fetch('http://localhost:3000/zmones', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(zmogus)
    })
    e.target.resest();
  })
const duomenys = [
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
]
console.log(JSON.stringify(duomenys));