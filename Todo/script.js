const addButton = document.querySelector("#add");
const dateField = document.querySelector("#date-field");
const todoList = document.querySelector("#todo-list");
const todoname = document.querySelector("#todo-input");
addButton.addEventListener("click",()=>{
    let task = todoname.value;
    let date = dateField.value;
    let para1 = document.createElement("p");
    para1.innerText = task;
    let para2 = document.createElement("p");
    para2.innerText = date;
    let b = document.createElement("button");
    b.classList.add("delete-button");
    b.innerText = "Delete";
    b.addEventListener("click",()=>{
        para1.remove();
        para2.remove();
        b.remove();
    })
    todoList.append(para1);
    todoList.append(para2);
    todoList.append(b);
    todoname.value = "";
})