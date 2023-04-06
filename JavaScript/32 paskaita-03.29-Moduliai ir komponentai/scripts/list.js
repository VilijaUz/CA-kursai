export default class List {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    this.list = document.createElement(this.props.listType);
    console.log(this.list);
    if (this.props.listClass) {
      this.list.classList.add('class',...this.props.listClass);
    }
    
// this.list.setAttribute('type',this.props.typeAttribute);
    console.log(this.props.listItems);
    this.props.listItems.forEach(listItem => {
      this.listItem=document.createElement('li');
      this.listText=document.createTextNode(listItem.text);
      this.listItem.appendChild(this.listText);

      if (this.props.listItemsClass){//bendros klases kiekvienam li
        this.listItem.classList.add(...this.props.listItemsClass);
      }
      if(listItem.class){//specifines klases sios iteracijos li
        this.listItem.classList.add(...listItem.class);
      }
      this.list.appendChild(this.listItem);
    });


    // console.log('wholeList:',this.list);
    return this.list;
  }
}



