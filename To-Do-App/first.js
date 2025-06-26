const taskInput = document.getElementById("Task-Input");
const addTaskBtn = document.getElementById("Add-Btn");
const taskList = document.getElementById("Task-List");
let Task = [];

function addTask() {
  if (taskInput.value.trim() === "") return;

  Task.push(taskInput.value);

  localStorage.setItem("Tasks", JSON.stringify(Task));

  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value + "";

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "ri-delete-bin-line";
  deleteBtn.id = "Delete-Btn";

  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);

  taskInput.value = "";
}

function onPageReload() {
  const allTask = JSON.parse(localStorage.getItem("Tasks"));

  if (allTask !== null) {
    Task = allTask;

    for (let i = 0; i < allTask.length; i++) {
      const newTask = document.createElement("li");
      newTask.textContent = allTask[i] + "";

      const deleteBtn = document.createElement("i");
      deleteBtn.className = "ri-delete-bin-line";
      deleteBtn.id = "Delete-Btn";

      newTask.appendChild(deleteBtn);
      taskList.appendChild(newTask);
    }
  }
}

addTaskBtn.addEventListener("click", addTask);

window.addEventListener("load", onPageReload);
