// Define UI variables
const form = document.querySelector(".task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {

  // Add task event
  form.addEventListener("submit", addTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  }

  // Create li element
  const li = document.createElement("li");
  li.className = "collection-item";

  // Create text node and append it to li
  const textNode = document.createTextNode(taskInput.value);
  li.appendChild(textNode);

  // Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  // Create icon and append it to link
  const icon = document.createElement("i");
  icon.className = "fa fa-remove";
  link.appendChild(icon);

  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = "";

  e.preventDefault();
}