const taskInput = document.getElementById("Task-Input");
const addTaskBtn = document.getElementById("Add-Btn");
const taskList = document.getElementById("Task-List");
let Task = [];

function addTask() {
  if (taskInput.value.trim() === "") return;

  Task.push(taskInput.value);

  localStorage.setItem("Tasks", JSON.stringify(Task));

  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = "";
}

function onPageReload() {
  const allTask = JSON.parse(localStorage.getItem("Tasks"));

  if (allTask !== null) {
    Task = allTask;

    for (let i = 0; i < allTask.length; i++) {
      const newTask = document.createElement("li");
      newTask.innerText = allTask[i];
      taskList.appendChild(newTask);
    }
  }
}

addTaskBtn.addEventListener("click", addTask);

window.addEventListener("load", onPageReload);
