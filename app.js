
// ******************** Define UI variables ********************

const form = document.querySelector(".task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// ******************** Load all event listeners ********************

loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task
  window.addEventListener("click", removeTask);

  // Clear tasks
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks
  filter.addEventListener("keyup", filterTasks);
}




// ******************** Functions ********************

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

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks() {
  // first method (slower)
  // taskList.innerHTML = "";

  // second method (faster)
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const itemsArray = document.querySelectorAll(".collection-item");
  // const filterInput = document.querySelector("#filter");
  // the above is the same as bellow
  const text = e.target.value.toLowerCase();
  itemsArray.forEach(function (task) {
    // const item = task.firstChild.textContent;
    // the above is the same as bellow I don't know why
    const item = task.firstChild.textContent;
    console.log(item.toLowerCase().indexOf(text));
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  })
}
