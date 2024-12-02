//! For To-Do

// var listContainer = document.getElementById("list-container");

// var inputBox = document.getElementById("input-box");

// var addTaskBtn = document.getElementById("add-task");

// var updateTaskBtn = document.getElementById("updateTask") ;

// var showError = document.getElementById("error"); 

// var arr = [];

// var ind = null;

// var readerList = () => {
//     listContainer.innerHTML = "";
//     arr.forEach((value,index)=>{
//         listContainer.innerHTML += `<li><span>${value}</span><button id = 'Remove' onclick = 'remove(${index})'>Remove</button><button id = 'edit' onclick = 'edit(${index})'>Edit</button></li>`;
//     })
// }

// var addTask = () => {
//     if(inputBox.value === ""){
//         showError.innerText = "Please enter the task";
//         return;
//     }else{
//         showError.innerText = "";
//         arr.unshift(inputBox.value);
//         inputBox.value = "";
//         readerList();
//     }
// }

// var remove = (i) =>{
//     arr.splice(i,1);
//     readerList();
// }

// var edit = (i) =>{
//     inputBox.value = arr[i];
//     updateTaskBtn.style.display = "inline";
//     addTaskBtn.style.display = "none";
//     ind = i;
// }

// var updateTask = () =>{
//     if(inputBox.value === ""){
//         showError.innerText = "Please enter the task";
//         return;
//     }
//     arr[ind] = inputBox.value;
//     updateTaskBtn.style.display = "none";
//     addTaskBtn.style.display = "inline";
//     inputBox.value = "";
//     readerList();
// };

//! For To-Do

//! For Fan

// var fan = document.querySelector(".fan");

// var on = () => {
//     fan.style.animationName = "spin";
//     fan.style.animationDuration = "2s";
// }

// var off = ()=>{
//     fan.style.animationName = "";
// }

// var fast =()=>{
//     fan.style.animationName = "spin";
//     fan.style.animationDuration = "1s";
// }

// var slow = () =>{
//     fan.style.animationName = "spin";
//     fan.style.animationDuration = "4s";
// }

//! For Fan

//! For Digital-Clock

// var hour = document.getElementById("hour");

// var min = document.getElementById("min");

// var sec = document.getElementById("sec");

// var pmAM = document.getElementById("pm-am");

// function Clock() {
//     var now = new Date();

//     var nowHours = now.getHours();

//     hour.innerText = nowHours;

//     var nowMin = now.getMinutes();

//     min.innerText = nowMin;

//     var nowSec = now.getSeconds();

//     sec.innerText = nowSec;

//     if(nowHours >= 12){
//         pmAM.innerText = "PM";
//     }else{
//         pmAM.innerText = "AM";
//     }
// }

// Clock();

// setInterval(Clock, 1000);


//! For Digital-Clock


//! For login-And-SignUp Form

var loginForm = document.getElementById("loginForm");

var signUpForm = document.getElementById("signUp-form");

var overlay = document.querySelector(".overlay");

// to show modal

var login = () => {
    loginForm.style.top = "50%";
    overlay.style.width = "100%";
}

var closeLogin = () => {
    loginForm.style.top = "-50%";
    overlay.style.width = "0%";
}

var signUp = () => {
    signUpForm.style.top = "50%";
    overlay.style.width = "100%";
}

var closeSignUp = () => {
    signUpForm.style.top = "-50%";
    overlay.style.width = "0%";
}

// to show modal

// to show/hide password

var eyeClose = document.getElementById("eye-close");

var eyeOpen = document.getElementById("eye-open");

var signUpPassword = document.getElementById("signUp-password");

var hide = () => {
    signUpPassword.type = "text";
    eyeClose.style.display = "none";
    eyeOpen.style.display = "inline";
}

var show = () => {
    signUpPassword.type = "password";
    eyeClose.style.display = "inline";
    eyeOpen.style.display = "none";
}

// to show/hide password

// for signUp-Form

var signUpRepeatPassword = document.getElementById("repeat-password");

var signUpName = document.getElementById("signUp-name");

var signUpEmail = document.getElementById("signUp-email");

var signUpError = document.getElementById("signUp-error");

var checkForError = (e) => {

    var message = [];

    if (signUpName.value === "") {
        message.push("User name is mandatory");
    } else if (signUpEmail.value === "") {
        message.push("Email is mandatory");
    } else if (signUpPassword.value === "") {
        message.push("Password is mandatory");
    } else if (signUpPassword.value.length < 6) {
        message.push("Password must be 6 character long");
    } else if (signUpRepeatPassword.value.length === 0) {
        message.push("Confirm password is mandatory");
    } else if (signUpPassword.value !== signUpRepeatPassword.value) {
        message.push("Confirm password is incorrect!");
    }

    if (message.length > 0) {
        e.preventDefault();
        message.forEach((value) => {
            signUpError.innerHTML = value;
        });
    }
}

// for signUp-Form

// To store sign-up value in local storage

function saveToLocalStorage() {
    localStorage.setItem("signUpName", signUpName.value);
    localStorage.setItem("signUpEmail", signUpEmail.value);
    localStorage.setItem("signUpPassword", signUpPassword.value);
}

signUpName.addEventListener("input", saveToLocalStorage);
signUpEmail.addEventListener("input", saveToLocalStorage);
signUpPassword.addEventListener("input", saveToLocalStorage);

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("signUpName")) {
        signUpName.value = localStorage.getItem("signUpName");
    }
    if (localStorage.getItem("signUpEmail")) {
        signUpEmail.value = localStorage.getItem("signUpEmail");
    }
    if (localStorage.getItem("signUpPassword")) {
        signUpPassword.value = localStorage.getItem("signUpPassword");
    }
});

// To store sign-up value in local storage

// for result

var resultForm = document.getElementById("resultForm");

var resultName = document.getElementById("result-name");

var resultEmail = document.getElementById("result-email");

var resultPassword = document.getElementById("result-password");


var result = () => {
    resultForm.style.top = "50%";

    resultName.value = signUpName.value;

    resultEmail.value = signUpEmail.value;

    resultPassword.value = signUpPassword.value;

    overlay.style.width = "100%";
};

var closeResult = () => {
    resultForm.style.top = "-50%";
    overlay.style.width = "0%";
};

// for result

// for login

var loginName = document.getElementById("login-name");

var loginEmail = document.getElementById("login-email");

var loginPassword = document.getElementById("login-password");

var loginError = document.getElementById("login-error");

var completeLogin = (e) => {

    var message = [];
    if (loginName.value === "") {
        message.push("Username is mandatory");
    } else if (loginName.value !== signUpName.value) {
        message.push("Incorrect Username");
    }

    else if (loginEmail.value === "") {
        message.push("Email is mandatory");
    } else if (loginEmail.value !== signUpEmail.value) {
        message.push("Incorrect Email");
    }

    else if (loginPassword.value === "") {
        message.push("Password is mandatory");
    } else if (loginPassword.value !== signUpPassword.value) {
        message.push("Incorrect Password");
    }

    if (message.length > 0) {
        e.preventDefault();
        message.forEach((value) => {
            loginError.innerHTML = value;
        });
    } else {
        alert("You are now logged In");

        localStorage.removeItem("signUPName");
        localStorage.removeItem("signUPEmail");
        localStorage.removeItem("signUPPassword");

        localStorage.clear();
        
        signUpName.value = "";
        signUpEmail.value = "";
        signUpPassword.value = "";
    }
}

// for login

//! For login-And-SignUp Form