//const divElements = document.querySelector('.number');
//for(let i = 100; i >= 50; i -= 10){

//   const paragraph = document.createElement('p');

//   paragraph.textContent = i;

//   divElements.appendChild(paragraph);
//}

//let massiv = ['Slava', 'Nikita', 'Aleksander', 'Maxim'];

//const stringContainer = document.querySelector('.string_container');
//for(let i = 0; i<massiv.length; i++) {
//      const paragraph = document.createElement('p');
//      paragraph.textContent = String(massiv[i]);
//      stringContainer.appendChild(paragraph)
//}



const users = [
   { first_name: "Slava", last_name: "Famin", age: 25 },
   { first_name: "Nikita", last_name: "Osipenko", age: 22 },
   { first_name: "Stsepan", last_name: "Sholkov", age: 26 },
   { first_name: "Vintik", last_name: "Pishenko", age: 15 }
];

const userContainer = document.querySelector('.user_container');

users.forEach(user => {
   if (user.age >= 18) {
   const card = document.createElement('div'); 

   card.classList.add('user_card');

   const name = document.createElement('p');
   name.textContent = `Имя: ${user.first_name} ${user.last_name}`;

   const age = document.createElement('p');
   age.textContent = `Возраст: ${user.age}`;

   card.appendChild(name);
   card.appendChild(age);

   userContainer.appendChild(card);
   }
});
