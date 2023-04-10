export default class Modalas {
  constructor(id, vardas, lytis, amzius, image, kortele) {// priimti visą card
    this.id = id;
    this.vardas = vardas;
    this.lytis = lytis;
    this.amzius = amzius;
    this.img = image;
    this.kortele = kortele; // užsivadinti visą card
    this.render();

  }
  render() {
    this.kortele = document.createElement('div');
    this.kortele.classList.add('updateForma');

    this.closeButton = document.createElement('button');
    this.closeButtonText = document.createTextNode('Close');
    this.closeButton.appendChild(this.closeButtonText);
    this.closeModal();

    this.form = document.createElement('form');
    this.update();
    this.kortele.append(this.closeButton, this.form);

    this.vardasInput = document.createElement('input');
    this.vardasInput.setAttribute('type', 'text');
    this.vardasInput.setAttribute('name', 'vardas');
    this.vardasInput.setAttribute('id', 'vardas');
    this.vardasInput.setAttribute('value', this.vardas);

    this.lytisInput = document.createElement('input');
    this.lytisInput.setAttribute('type', 'text');
    this.lytisInput.setAttribute('name', 'lytis');
    this.lytisInput.setAttribute('id', 'lytis');
    this.lytisInput.setAttribute('value', this.lytis);

    this.amziusInput = document.createElement('input');
    this.amziusInput.setAttribute('type', 'text');
    this.amziusInput.setAttribute('name', 'amzius');
    this.amziusInput.setAttribute('id', 'amzius');
    this.amziusInput.setAttribute('value', this.amzius);

    this.imgInput = document.createElement('input');
    this.imgInput.setAttribute('type', 'url');
    this.imgInput.setAttribute('name', 'image');
    this.imgInput.setAttribute('id', 'image');
    this.imgInput.setAttribute('value', this.img);
  

    this.submitInput = document.createElement('input');
    this.submitInput.setAttribute('type', 'submit');
    this.submitInput.setAttribute('name', 'Pakeisti');

    this.form.append(this.vardasInput, this.lytisInput,  this.amziusInput ,this.imgInput,this.closeButton, this.submitInput);

    document.body.appendChild(this.kortele);

  }
  closeModal() {
    this.closeButton.addEventListener('click', () => {
      this.kortele.remove();

    });
  }
  update() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.data = {
        vardas: e.target.elements.vardas.value,
        lytis: e.target.elements.lytis.value,
        amzius: e.target.elements.amzius.value,
        image: e.target.elements.image.value,
      }
      fetch(`http://localhost:3000/kates/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      });
      // window.location.reload(); // nebereikia su tuo ugly fix'u
      this.kortele.remove(); // be window reload reikia panaikinti modalą
    });
  }
}



