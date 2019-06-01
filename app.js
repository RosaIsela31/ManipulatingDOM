//Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = ducument.querySelector(".clear-tasks");
const filter = document.wuerySlector("#filter");
const taskInput = document.querySelector("#tasks");

// Load all events listeners
loadEventListeners();

// Load all events listeners
function loadEventListener() {
  // add task event
  form.addEventListener("submit", addTask);
}

// add task
function addTask(e){
  if(taskInput.value === ""){
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  //// Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>";
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the input 
  taskInput.value = " ";

  e.preventDefault();
}