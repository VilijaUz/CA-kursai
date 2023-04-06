
import Post from './post.js';
import User from './uzduotis1.js'
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {//logiskai users/katinelis
    // console.log(data);
    data.forEach(user => {
      document.querySelector('#test').innerHTML += `<h1>${user.name}</h1>`
    })
  })
  .catch(err => {//kazka atliekame su error klaidos atveju
    console.log(err.message);
  })
  .finally(() => {
    // console.log('end');
  })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const allPosts = document.querySelector('#allPosts');
    posts.forEach(post => {
      // console.log(post);
      const newPost = new Post(post);
      allPosts.appendChild(newPost);
    });
  });

fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0]);
  })
// 1) Puslapyje paspaudus ant mygtuko "Generuoti vartotoją",
//  po apačia turi būti sukurta vartotojo kortelė, kurioje 
//  bus atvaizduoti vartotojo duomenys (minimum: Vardas,
//    Pavardė, amžius, šalis, elPaštas, nuotrauka).
// Random vartotojas gaunamas iš https://randomuser.me/api/.
// Vėl paspaudus ant mygtuko "Generuoti vartotoją", vietoj
//  esamo atsiras naujas. (neprikurti puslapio su 999 vartotojais)
const generateUser = () => {//kreipimasis i mygtuka
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      const allUsers = document.querySelector('#userCard');
      const newUser = data.results[0];
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
          <h1>${newUser.name.first} ${newUser.name.last}</h1>
          <h2>${newUser.login.username}</h2>
          <p>${newUser.dob.age}</p>
          <p>${newUser.location.country}</p>
          <img src="${newUser.picture.large}" alt="photo">
          <span>${newUser.email}</span>
        `;
      allUsers.appendChild(userDiv);
    })
    .catch((error) => console.log(error));
}
// .finally(() => {
// console.log('end');
// });

const generateButton = document.getElementById('generUser');
generateButton.addEventListener('click', generateUser);
// --------------------------------------------------------
// document.querySelector('#generUser').addEventListener('click',()=>{

// trumpesnis-geras,tik kazkodel neveikia
// fetch('https://randomuser.me/api/')
// .then(res => res.json())
// .then(userCard => {
//   const result=userCard.results
//   result.forEach(userCard =>{
//     const userDiv=new User(userCard)
//     document.querySelector('userCard').innerHTML=''//isvalyti
//     document.querySelector('userCard').append(userDiv);
//   });
// })

// 2) Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
// 2.1) Naudojant tik JS, sukurkite lentelę ir į ją įrašykite
//  duomenis (id, name, city, fav_color).
// 2.2) Naudojant JS metodus, padalinkite vardą į dvi dalis: 
// vardą ir pavardę (lentelėje).
// 2.3) Pridėkite prie lentelės (tarp id ir name) nuotrauką.

const tableBody = document.querySelector("#secondTask tbody");

  fetch("https://magnetic-melon-yam.glitch.me")
    .then(response => response.json())
    .then(data => {
      data.forEach(person => {
        const nameParts = person.name.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts[1];

        const row = tableBody.insertRow();
        const idCell = row.insertCell();
        const imgCell = row.insertCell();
        const nameCell = row.insertCell();
        const lastNameCell = row.insertCell();
        const cityCell = row.insertCell();
        const colorCell = row.insertCell();

        idCell.textContent = person.id;

        const img = document.createElement("img");
        img.src = person.img;
        imgCell.appendChild(img);

        nameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        cityCell.textContent = person.city;
        colorCell.textContent = person.fav_color;
      });
    })
    .catch(error => console.error(error));
