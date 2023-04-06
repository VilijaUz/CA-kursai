export default class Image{
  constructor(props){
    this.props=props;
    return this.render();
  }
  render(){
    this.image=document.createElement('img');
    this.image.setAttribute('src',this.props.src);
    this.props.alt && this.image.setAttribute('alt',this.props.alt);
    return this.image;
  }
}