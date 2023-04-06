import Knyga from "./Knyga.js";

fetch('http://localhost:3000/knygos')
  .then(res => res.json())
  .then(knygos => {
    console.log(knygos);
    const visosKnygos = document.querySelector('#knygos');
    knygos.forEach(knyga => {
      const knygaDiv = new Knyga(knyga);
      visosKnygos.appendChild(knygaDiv);
    });

  })

document.querySelector('#knygosF>form').addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e);
  const knygos = e.target.elements;
  console.log(knygos);
  const knyga = {
    autorius: knygos.autorius.value,
    pavadinimas: knygos.pavadinimas.value,
    image: knygos.image.value,
    zanras: knygos.zanras.value,
    tirazas: knygos.tirazas.valueAsNumber,
    prekyboje: knygos.prekyboje.checked
  };
  console.log(knyga);
  const knygaDiv = new Knyga(knyga);
  document.querySelector('#knygos').appendChild(knygaDiv);
  console.log(knygaDiv);

  fetch('http://localhost:3000/knygos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(knyga)
  })
  e.target.reset();
})

// 
function rodytiModal(knyga) {
  const modal = document.querySelector('#myModal');
  const span = document.querySelector('.close');
  const modalContent = modal.querySelector('.modal-content');
  
  // įtraukiame knygos duomenis į modalo turinį
  modalContent.querySelector('h2').textContent = knyga.pavadinimas;
  modalContent.querySelector('img').src = knyga.image;
  modalContent.querySelector('p:nth-of-type(1)').textContent = `Autorius: ${knyga.autorius}`;
  modalContent.querySelector('p:nth-of-type(2)').textContent = `Žanras: ${knyga.zanras}`;
  modalContent.querySelector('p:nth-of-type(3)').textContent = `Tirazas: ${knyga.tirazas}`;
  modalContent.querySelector('p:nth-of-type(4)').textContent = `Ar yra prekyboje: ${knyga.prekyboje ? 'Taip' : 'Ne'}`;
  
  // rodom modalą
  modal.style.display = "block";

  // uždarymo mygtuko veikimas
  span.onclick = function() {
    modal.style.display = "none";
  }

  // uždarome modalą, jei paspaudžiamas bet kuris langas, išskyrus modalą
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
const knygaDiv = new Knyga(knyga);
const knygosContainer = document.querySelector('#knygos');
knygosContainer.appendChild(knygaDiv);

// priskiriame mygtuką knygos elementui
const modalButton = knygaDiv.querySelector('.rodyti-modal');
modalButton.addEventListener('click', function() {
  rodytiModal(knyga);
});










