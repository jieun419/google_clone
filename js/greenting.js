
//파일 먼저 찾아주기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greenting = document.querySelector("#greenting");

//반복되는 string을 사용할 때는 대문자로 이용해 준다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    //기본 속성 사용 못하도록
    event.preventDefault();
    //hidden class를 loginForm에 추가해 안 보이게 처리
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //loginInput의 value값을 username에 할당
    const username = loginInput.value;
    //localStorage에 username저장
    localStorage.setItem(USERNAME_KEY, username);
    //paintGreeting function으로 연결
    paintGreeting(username);
}

function paintGreeting(username){
    // 순서가 중요하다.
    //input 값을 입력할 경우 글자 작성 됨
    //hidden class로 숨겨져 있던 greenting을 보이게 표시
    greenting.innerText = `Hello ${username}`;
    greenting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    // saveUsername값이 null인 경우 show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    // saveUsername값이 있을 경우 show the greenting
    paintGreeting(saveUsername);
}
