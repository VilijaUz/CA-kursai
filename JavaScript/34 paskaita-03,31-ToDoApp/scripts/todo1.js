export default class Todo2 {
  constructor(task) {
    this.task = task;
    this.done = false;
    return this.render();
  }

  toggleDone() {
    this.done = !this.done;
    this.render();
  }

  render() {
    const todoItem = document.createElement("div");
    const task = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneCheckbox = document.createElement("input");

    task.innerText = this.task;
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = this.done;

    deleteButton.innerText = "Ištrinti";
    deleteButton.onclick = () => this.remove();

    doneCheckbox.onclick = () => this.toggleDone();

    todoItem.appendChild(doneCheckbox);
    todoItem.appendChild(task);
    todoItem.appendChild(deleteButton);

    this.element = todoItem;

    return this.element;
  }

  remove() {
    const index = todoList.indexOf(this);
    if (index !== -1) {
      todoList.splice(index, 1);
      renderTodoList();
    }
  }
}
const todoList = [];

function addTodo() {
  const newTodo = prompt("Įveskite naują užduotį:");
  const todo = new Todo2(newTodo);
  todoList.push(todo);
  const todoListContainer = document.getElementById("todoListContainer");
  todoListContainer.appendChild(todo.render());
}

function renderTodoList() {
  const todoListContainer = document.getElementById("todoListContainer");
  todoListContainer.innerHTML = "";
  todoList.forEach((todo) => {
    todoListContainer.appendChild(todo.render());
  });
}
