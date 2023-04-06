export default class Task {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    this.listIteam = document.createElement('li');
    this.heading = document.createElement('h3');
    this.headingText.document.createTextNode(this.props.title);
    this.heading.appendChild(this.headingText);
    this.listIteam.appendChild(this.heading);
    this.icon = document.createElement('i');
    this.icon .classList.add('bi',' bi-trash-fill');
    this.listIteam.appendChild(this.icon);
    return this.listIteam;
  }
}
