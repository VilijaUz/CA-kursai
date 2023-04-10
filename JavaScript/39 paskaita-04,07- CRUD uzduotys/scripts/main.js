import Kate from './kortele.js';

// alert('nevertinkite labai grieztai')
fetch('http://localhost:3000/kates')
  .then(res => res.json())
  .then(kates => {
    const visiGyvunai = document.
      querySelector('#visiGyvunai');
    kates.forEach(kate => {
      const kateKortele = new Kate(kate);
      console.log(visiGyvunai, kateKortele);
      visiGyvunai.appendChild(kateKortele);

    });
  })
document.querySelector('#pridetiKortele>form').addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e);
  const kates = e.target.elements;
  console.log(kates);
  const kate = {
    vardas: kates.vardas.value,
    image: kates.image.value,
    lytis: kates.lytis.value,
    amzius: kates.amzius.valueAsNumber,
    image: kates.image.value
  };
  console.log(kate);
  const kateDiv = new Kate(kate);
  document.querySelector('#visiGyvunai').appendChild(kateDiv);
  console.log(kateDiv);

  fetch('http://localhost:3000/kates', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(kate)
  })
  e.target.reset();
})
