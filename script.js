// select Dom Element
const input = document.getElementById('todo-input')
const addbtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

// try to save todos from local storage
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved):[];

function saveTodos(){
    // Save current todos in local storage
    localStorage.setItem('todos',JSON.stringify(todos) );
}

// Create a dom node for a todo object and append it to the list
 function createTodoNode(todo, index){
 const li = document.createElement('li');


//checkbox to toggle completion
 const checkbox = document.createElement('input');
 checkbox.type = 'checkbox';
 checkbox.checked = !!todo.completed;
checkbox.addEventListener("change",  ()=>{
    todo.completed = checkbox.checked;
    saveTodos();
})
 }
//  render th whole todo list from todos array
function render(){
    list.innerHTML = ' ';
    // Recreate each item
  todos.foreach((todo, index) =>{
    const node = createTodoNode(todo, index);
    list.appendChild(node)
  }
);
}
