export default class Element {
  constructor(element, text) {
    this.element = element;
    this.text = text;
    return this.render();

  } render() {

    this.element = document.createElement(this.element);
    this.textNode = document.createTextNode(this.text);
    this.element.appendChild(this.textNode);

     return this.element;
  }
}