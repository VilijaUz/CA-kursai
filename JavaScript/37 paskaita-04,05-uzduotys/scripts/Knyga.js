export default class Knyga {
  constructor({ autorius, pavadinimas, zanras, tirazas, prekyboje, id, image }) {
    this.autorius = autorius;
    this.pavadinimas = pavadinimas;
    this.zanras = zanras;
    this.tirazas = tirazas;
    this.prekyboje = prekyboje;
    this.id = id;
    this.image = image;
    return this.render();
  }
  render() {
    this.divKnyga = document.createElement('div');
    this.divKnyga.classList.add('knygosSab');

    this.heading = document.createElement('h1');
    this.headingText = document.createTextNode(`Autorius :${this.autorius}`);
    this.heading.appendChild(this.headingText);

    this.imageP = document.createElement('img');
    this.imageP.setAttribute('src', this.image);
    this.imageP.setAttribute('alt', 'knyga');


    // console.log(this.image);
    this.pavadPar = document.createElement('p');
    this.pavadParText = document.createTextNode(`Pavadinimas : ${this.pavadinimas}`);
    this.pavadPar.appendChild(this.pavadParText);


    this.zanrPar = document.createElement('p');
    this.zanrParText = document.createTextNode(`Žanras : ${this.zanras}`);
    this.zanrPar.appendChild(this.zanrParText);

    this.tirazPar = document.createElement('p');
    this.tirazParText = document.createTextNode(`Tirazas : ${this.tirazas}`);
    this.tirazPar.appendChild(this.tirazParText);

    this.prekybPar = document.createElement('p');
    this.prekybParText = document.createTextNode(`
    ${this.prekybojeFunk()}`);
    this.prekybPar.appendChild(this.prekybParText);

    this.deleteButton = document.createElement('button');
    this.deleteButtonText = document.createTextNode('Ištrinti knygą');
    this.deleteButton.appendChild(this.deleteButtonText);
    this.delete();

    this.divKnyga.append(this.heading, this.imageP, this.pavadPar, this.zanrPar, this.tirazPar, this.prekybPar, this.deleteButton);
    return this.divKnyga;

  }
  prekybojeFunk() {
    if (this.prekyboje === true) {
      return 'Yra prekyboje';
    } else if (this.prekyboje === false) {
      return 'Išparduota';
    }
  }

  delete() {
    this.deleteButton.addEventListener('click', () => {
      this.divKnyga.remove();
      fetch(`http://localhost:3000/knygos${this.id}`, {
        method: "DELETE"
      });
    });
  }
}






