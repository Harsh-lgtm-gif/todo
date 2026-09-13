const input = document.getElementById("enter");
const listContainer = document.getElementById("listContainer");

function addtask(){
    if(input.value ===""){
        alert("you mustt write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = '';

}