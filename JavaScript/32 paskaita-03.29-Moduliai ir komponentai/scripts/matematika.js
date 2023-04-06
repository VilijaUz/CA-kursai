const randomColor =() => {
  return '#${Math.floor(Math.random()*(2**24)).toString(16)}';
}

const sum =(nr1, nr2)=>{
  return nr1 +nr2;
} 
const subraction=(nr1,nr2)=>{
  return nr1-nr2;
}
const multiplication=(nr1,nr2)=>{
  return nr1 *nr2;
}
const division=(nr1,nr2)=>{
  return nr1 /nr2;
}

export { sum,division,subraction,multiplication };