const taskInput= document.getElementById("taskInput");

const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const fetchTaskButton = document.getElementById("fetchTasks");

function addTask(){
    const taskText = taskInput.value;
    
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class ="delete">Delete</button> `
    taskList.appendChild(li);
    taskInput.value = "";

}
addTaskButton.addEventListener("click", addTask);
function deleteTask(e){
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();

    }
}


taskList.addEventListener("click", deleteTask);