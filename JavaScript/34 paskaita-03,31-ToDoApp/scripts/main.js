
import Todo2 from './todo1.js';
import Task from './Task.js';

 // task'ų sąrašas
 const tasks = [];

 // DOM elementai
 const newTaskInput = document.querySelector('#new-task');
 const addTaskButton = document.querySelector('#add-task');
 const taskList = document.querySelector('#task-list');

 // funkcija, kuri sukuria HTML kodą su task'u
 function createTaskElement(task) {
   const li = document.createElement('li');

   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = `task-${tasks.indexOf(task)}`;
   checkbox.checked = task.completed;
   checkbox.addEventListener('change', () => {
     task.completed = checkbox.checked;
   });
   li.appendChild(checkbox);

   const label = document.createElement('label');
   label.htmlFor = `task-${tasks.indexOf(task)}`;
   label.textContent = task.title;
   label.classList.toggle('completed', task.completed);
   li.appendChild(label);

   const deleteButton = document.createElement('i');
  //  deleteButton.type = 'button';
  //  deleteButton.textContent = 'Istrinti';
   deleteButton.classList.add('fa', 'fa-trash-alt'); // pridedame fontawesome klasę
  //  deleteButton.dataset.index = tasks.indexOf(task);
   deleteButton.addEventListener('click', () => {
    //  tasks.splice(tasks.indexOf(task), 1);
    //  taskList.removeChild(li);
   li.remove()
  });
   li.appendChild(deleteButton);

   return li;
 }

 // funkcija, kuri atvaizduoja visus task'us
 function renderTasks() {
   taskList.innerHTML = '';

   for (let i = 0; i < tasks.length; i++) {
     const task = tasks[i];
     const li = createTaskElement(task);
     taskList.appendChild(li);
   }
 }

 // funkcija, kuri prideda naują task'ą
 function addTask(event) {
  event.preventDefault();
   const title = newTaskInput.value.trim();

   if (title) {
     const task = { title, completed: false };
     tasks.push(task);
     const li = createTaskElement(task);
     taskList.appendChild(li);
     newTaskInput.value = '';
   }
 }

 // event listeners
 addTaskButton.addEventListener('click', addTask);

 // atvaizduoti task'us pirmą kartą
 renderTasks();






//---------------------------
/* Sukurti aplikaciją nenaudojant Klasių, nei duomenų, 
nei duomenų saugojimo vartotojo dalyje. */
// const todo1List = [];
document.querySelector('#newTask>form')
.addEventListener('submit',e=>{
  e.preventDefault();
  const value=e.target.elements.task.value;
const newTask = new Task(value);/*susikurti klase,kuri grazina elemeneta<li>,<h3>,i */
                  /*({title.value}) */

  document.querySelector('#tasks >ul').appendChild(newTask);
  /*innerHTML+=`
  <li>
  <h3>${value}</h3>
  <i class="bi bi-trash-fill"></i>
  `;*/
  e.target.reset();/*istrinti value is formos*/ 
});


