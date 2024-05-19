// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const categorySelect = document.getElementById("categoryOptions");

// Event Listeners
document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);
filterOption.addEventListener("change", filterTodo);

// Functions
function showPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function hidePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  const category = categorySelect.value;

  if (todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.textContent = `${todoText} [${category}]`;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Add Edit button
    const editButton = createButton("fas fa-edit", "edit-btn");
    todoDiv.appendChild(editButton);

    // Add buttons
    const completedButton = createButton("fas fa-check-circle", "complete-btn");
    const trashButton = createButton("fas fa-trash", "trash-btn");
    todoDiv.appendChild(completedButton);
    todoDiv.appendChild(trashButton);

    // Save to local storage
    saveLocalTodos({ text: todoText, category: category });

    todoList.appendChild(todoDiv);
    todoInput.value = "";
    categorySelect.value = "None";
  }
}

function handleTodoClick(event) {
  const target = event.target;
  const todo = target.parentElement;

  if (target.classList.contains("trash-btn")) {
    todo.classList.add("slide");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  } else if (target.classList.contains("complete-btn")) {
    todo.classList.toggle("completed");
  } else if (target.classList.contains("edit-btn")) {
    editTodoItem(todo);
  }
}

function editTodoItem(todo) {
  const todoTextElement = todo.querySelector(".todo-item");
  const initialText = todoTextElement.textContent.split(" [")[0];

  const input = document.createElement("input");
  input.type = "text";
  input.value = initialText;
  input.classList.add("edit-input");

  todo.replaceChild(input, todoTextElement);
  input.focus();

  input.addEventListener("blur", () => {
    saveEdit(todo, input, initialText);
  });

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      saveEdit(todo, input, initialText);
    }
  });
  addTodo();
}

function saveEdit(todo, input, initialText) {
  const newText = input.value.trim();
  const category = getCategory(todo);

  if (newText) {
    const todoTextElement = document.createElement("li");
    todoTextElement.textContent = `${newText} [${category}]`;
    todoTextElement.classList.add("todo-item");
    todo.replaceChild(todoTextElement, input);
    updateLocalTodos(initialText, newText, category);
  } else {
    input.value = initialText;
    input.focus();
  }
}

function getCategory(todo) {
  return todo.querySelector(".todo-item").textContent.split(" [")[1].slice(0, -1);
}

function filterTodo() {
  const todos = Array.from(todoList.childNodes);
  todos.forEach(function(todo) {
    switch (filterOption.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  if (Array.isArray(todos)) {
    todos.forEach((todo) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      const newTodo = document.createElement("li");
      newTodo.textContent = `${todo.text} [${todo.category}]`;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);

      // Add buttons
      const completedButton = createButton("fas fa-check-circle", "complete-btn");
      const trashButton = createButton("fas fa-trash", "trash-btn");
      todoDiv.appendChild(completedButton);
      todoDiv.appendChild(trashButton);

      // Add Edit button
      const editButton = createButton("fas fa-edit", "edit-btn");
      todoDiv.appendChild(editButton);

      todoList.appendChild(todoDiv);
    });
  }
}

function updateLocalTodos(oldText, newText, category) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.map(todo => {
    if (todo.text === oldText) {
      return { text: newText, category: category };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoText = todo.children[0].textContent.split(" [")[0];
  todos = todos.filter(t => t.text !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Helper function to create buttons
function createButton(iconClass, buttonClass) {
  const button = document.createElement("button");
  button.innerHTML = `<i class="${iconClass}"></i>`;
  button.classList.add(buttonClass);
  return button;
}
