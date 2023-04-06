const randomColor =() => {
  kita();
    return `#${Math.floor(Math.random()*(2**24)).toString(16)}`;
   }
   const kita =()=> {
    console.log('hi');
   }

   export default randomColor;
   export {kita};