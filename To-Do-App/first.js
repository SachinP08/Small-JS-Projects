const taskInput = document.getElementById("Task-Input");
const addTaskBtn = document.getElementById("Add-Btn");
const taskList = document.getElementById("Task-List");

let Task = [];

function generateID() {
  return Date.now().toString();
}

function deleteTask(el) {
  const taskID = el.target.dataset.id;

  Task = Task.filter((task) => task.id !== taskID);

  localStorage.setItem("Tasks", JSON.stringify(Task));

  el.target.parentElement.remove();
}

function createTaskElement(taskObj) {
  const newTask = document.createElement("li");
  newTask.textContent = taskObj.text + "";

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "ri-delete-bin-line Delete-Btn";
  deleteBtn.setAttribute("data-id", taskObj.id);
  deleteBtn.addEventListener("click", deleteTask);

  newTask.appendChild(deleteBtn);
  return newTask;
}

function addTask() {
  const inputValue = taskInput.value.trim();
  if (inputValue === "") return;

  let taskObj = {
    id: generateID(),
    text: inputValue,
  };

  Task.push(taskObj);
  localStorage.setItem("Tasks", JSON.stringify(Task));

  const taskElement = createTaskElement(taskObj);
  taskList.appendChild(taskElement);

  taskInput.value = "";
}

function onPageReload() {
  const allTask = JSON.parse(localStorage.getItem("Tasks"));

  if (allTask !== null) {
    Task = allTask;

    for (let i = 0; i < allTask.length; i++) {
      const newTask = document.createElement("li");
      newTask.textContent = allTask[i].text + "";

      const deleteBtn = document.createElement("i");
      deleteBtn.className = "ri-delete-bin-line Delete-Btn";
      deleteBtn.setAttribute("data-id", allTask[i].id);
      deleteBtn.addEventListener("click", deleteTask);

      newTask.appendChild(deleteBtn);
      taskList.appendChild(newTask);
    }
  }
}

addTaskBtn.addEventListener("click", addTask);

window.addEventListener("load", onPageReload);
