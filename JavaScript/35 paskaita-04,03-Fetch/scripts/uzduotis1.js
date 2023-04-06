export default class User {
  constructor(props) {
    this.props=props;
    return this.render();
 
  }
    render(){
      this.userDiv=document.createElement('div');
      this.userDiv.classList.add('user');

      this.name=document.createElement('h1');
      this.nameText=document.createTextNode(this.props.name.first);
      this.name.appendChild(this.nameText);

      this.surname=document.createElement('h2');  
      this.surnameText=document.createTextNode(this.props.name.last);
      this.surname.appendChild(this.surnameText);

      this.age=document.createElement('p');
      this.ageText=document.createTextNode(this.props.dob.age);
      this.age.appendChild(this.ageText);

      this.country=document.createElement('p');
      this.countryText=document.createTextNode(this.props.location.country);
      this.country.appendChild(this.countryText);

      this.email=document.createElement('span');
      this.emailText=document.createTextNode(this.props.email);
      this.email.appendChild(this.emailText);

      this.photo =document.createElement('img');
      this.photo.setAttribute('src',this.props.picture.large);
      this.photo.appendChild(this.photo);

  
  
  
      this.postDiv.append(this.name,this.surname,this.age,this.country,this.email,this.photo);
  
      return this.userDiv;
  
  
  
    }
  }
 