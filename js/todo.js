const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY= "todos";

//업데이트가 가능하도록 let으로 변경
let toDos = [];


//list info save
function saveToDos(){
    //toDos array의 내용을 localStorage에 넣어주는 것
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//list delete
function deleteToDo(event){
    //삭제 하고 싶은 li
    const li = event.target.parentElement;
    //해당 li 지우기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

//새로운 todo리스트 생성할 곳
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.text;   

    button.innerText = "❌";
    button.addEventListener("click",deleteToDo); 

    li.appendChild(span);
    li.appendChild(button); 
      
    toDoList.appendChild(li);
    
}

//list write
function handleToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    //enter칠 떄 마다 글자 비우기 전에 저장하기
    const newTodo = toDoInput.value;
    //enter칠 때 마다 글자 비우기
    toDoInput.value = "";
    //object로 저장하기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //toDos array에 push
    toDos.push(newTodoObj);
    //paint ToDo로 보내기
    paintToDo(newTodoObj);
    //list save
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

