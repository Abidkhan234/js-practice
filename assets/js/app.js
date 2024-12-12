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

// var loginForm = document.getElementById("loginForm");

// var signUpForm = document.getElementById("signUp-form");

// var overlay = document.querySelector(".overlay");

// // to show modal

// var login = () => {
//     loginForm.style.top = "50%";
//     overlay.style.width = "100%";
// }

// var closeLogin = () => {
//     loginForm.style.top = "-50%";
//     overlay.style.width = "0%";
// }

// var signUp = () => {
//     signUpForm.style.top = "50%";
//     overlay.style.width = "100%";
// }

// var closeSignUp = () => {
//     signUpForm.style.top = "-50%";
//     overlay.style.width = "0%";
// }

// // to show modal

// // to show/hide password

// var eyeClose = document.getElementById("eye-close");

// var eyeOpen = document.getElementById("eye-open");

// var signUpPassword = document.getElementById("signUp-password");

// var hide = () => {
//     signUpPassword.type = "text";
//     eyeClose.style.display = "none";
//     eyeOpen.style.display = "inline";
// }

// var show = () => {
//     signUpPassword.type = "password";
//     eyeClose.style.display = "inline";
//     eyeOpen.style.display = "none";
// }

// // to show/hide password

// // for signUp-Form

// var signUpRepeatPassword = document.getElementById("repeat-password");

// var signUpName = document.getElementById("signUp-name");

// var signUpEmail = document.getElementById("signUp-email");

// var signUpError = document.getElementById("signUp-error");

// var checkForError = (e) => {

//     var message = [];

//     if (signUpName.value === "") {
//         message.push("User name is mandatory");
//     } else if (signUpEmail.value === "") {
//         message.push("Email is mandatory");
//     } else if (signUpPassword.value === "") {
//         message.push("Password is mandatory");
//     } else if (signUpPassword.value.length < 6) {
//         message.push("Password must be 6 character long");
//     } else if (signUpRepeatPassword.value.length === 0) {
//         message.push("Confirm password is mandatory");
//     } else if (signUpPassword.value !== signUpRepeatPassword.value) {
//         message.push("Confirm password is incorrect!");
//     }

//     if (message.length > 0) {
//         e.preventDefault();
//         message.forEach((value) => {
//             signUpError.innerHTML = value;
//         });
//     }
// }

// // for signUp-Form

// // To store sign-up value in local storage

// function saveToLocalStorage() {
//     localStorage.setItem("signUpName", signUpName.value);
//     localStorage.setItem("signUpEmail", signUpEmail.value);
//     localStorage.setItem("signUpPassword", signUpPassword.value);
// }

// signUpName.addEventListener("input", saveToLocalStorage);
// signUpEmail.addEventListener("input", saveToLocalStorage);
// signUpPassword.addEventListener("input", saveToLocalStorage);

// document.addEventListener("DOMContentLoaded", function () {
//     if (localStorage.getItem("signUpName")) {
//         signUpName.value = localStorage.getItem("signUpName");
//     }
//     if (localStorage.getItem("signUpEmail")) {
//         signUpEmail.value = localStorage.getItem("signUpEmail");
//     }
//     if (localStorage.getItem("signUpPassword")) {
//         signUpPassword.value = localStorage.getItem("signUpPassword");
//     }
// });

// // To store sign-up value in local storage

// // for result

// var resultForm = document.getElementById("resultForm");

// var resultName = document.getElementById("result-name");

// var resultEmail = document.getElementById("result-email");

// var resultPassword = document.getElementById("result-password");


// var result = () => {
//     resultForm.style.top = "50%";

//     resultName.value = signUpName.value;

//     resultEmail.value = signUpEmail.value;

//     resultPassword.value = signUpPassword.value;

//     overlay.style.width = "100%";
// };

// var closeResult = () => {
//     resultForm.style.top = "-50%";
//     overlay.style.width = "0%";
// };

// // for result

// // for login

// var loginName = document.getElementById("login-name");

// var loginEmail = document.getElementById("login-email");

// var loginPassword = document.getElementById("login-password");

// var loginError = document.getElementById("login-error");

// var completeLogin = (e) => {

//     var message = [];
//     if (loginName.value === "") {
//         message.push("Username is mandatory");
//     } else if (loginName.value !== signUpName.value) {
//         message.push("Incorrect Username");
//     }

//     else if (loginEmail.value === "") {
//         message.push("Email is mandatory");
//     } else if (loginEmail.value !== signUpEmail.value) {
//         message.push("Incorrect Email");
//     }

//     else if (loginPassword.value === "") {
//         message.push("Password is mandatory");
//     } else if (loginPassword.value !== signUpPassword.value) {
//         message.push("Incorrect Password");
//     }

//     if (message.length > 0) {
//         e.preventDefault();
//         message.forEach((value) => {
//             loginError.innerHTML = value;
//         });
//     } else {
//         alert("You are now logged In");

//         localStorage.removeItem("signUPName");
//         localStorage.removeItem("signUPEmail");
//         localStorage.removeItem("signUPPassword");

//         localStorage.clear();

//         signUpName.value = "";
//         signUpEmail.value = "";
//         signUpPassword.value = "";
//     }
// }

// for login

//! For login-And-SignUp Form


//! For random color generator

// var colorCode = document.querySelectorAll(".color-code");

// var colorDisplay = document.querySelectorAll(".color-display");

// var colorBox = document.querySelectorAll(".color-box");

// var refresh = () => {
//     var hexValues = [];
//     var hexcode;
//     colorDisplay.forEach((value, index) => {

//         hexcode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

//         value.style.backgroundColor = hexcode;

//         colorCode[index].innerHTML = hexcode;

//         hexValues.push(hexcode);
//     });

//     localStorage.setItem("hexColors", JSON.stringify(hexValues));
// }

// var loadColors = () => {
//     const savedColors = JSON.parse(localStorage.getItem("hexColors"));

//     if (savedColors && savedColors.length === colorDisplay.length) {
//         // Apply saved colors to the displays and codes
//         colorDisplay.forEach((value, index) => {
//             value.style.backgroundColor = savedColors[index];
//             colorCode[index].innerHTML = savedColors[index];
//         });
//     } else {
//         // If no saved colors, generate new ones
//         refresh();
//     }
// };

// colorBox.forEach((box, index) => {
//     box.addEventListener("click", () => {
//         const hexValue = colorCode[index].innerHTML; // Get the hex code from the corresponding color-code
//         navigator.clipboard.writeText(hexValue) // Copy the hex code to the clipboard
//             .then(() => {
//                 alert(`Copied Successfully!`); // Notify the user
//             })
//             .catch((err) => {
//                 console.error("Failed to copy!", err); 
//             });
//     });
// });

// loadColors();

//! For random color generator

//! For local-storage practice

// var userName = document.getElementById("user-name");

// var userEmail = document.getElementById("user-email");

// var userPassword = document.getElementById("user-password");

// var result = document.getElementById("result");



// var saveData = () => {

//     if (userName.value === "") {
//         alert("Name is mandatory")
//         return
//     } else if (userEmail.value === "") {
//         alert("Email is mandatory")
//         return
//     } else if (userPassword.value === "") {
//         alert("Password is mandatory")
//         return
//     } else {

//         localStorage.setItem("userName", userName.value);
//         localStorage.setItem("userEmail", userEmail.value);
//         localStorage.setItem("userPassword", userPassword.value);

//         result.innerHTML = `Name: ${localStorage.getItem("userName")} <br> Email: ${localStorage.getItem("userEmail")} <br> Passowrd: ${localStorage.getItem("userPassword")}`;

//         if (result.innerHTML !== "") {
//             result.innerHTML += "<br>";
//         }

//     }

//     userName.value = "";
//     userEmail.value = "";
//     userPassword.value = "";
// }

// var clearData = () => {
//     result.innerHTML = "";
//     localStorage.clear();
// }

//!For local-storage practice

//! For Quiz Practice

// const simpleQuestions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Berlin", "Madrid"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "What is the largest mammal in the world?",
//         options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
//         correctAnswer: "Blue Whale"
//     },
//     {
//         question: "Which language is primarily used for web development?",
//         options: ["Python", "Java", "JavaScript", "C++"],
//         correctAnswer: "JavaScript"
//     },
//     {
//         question: "Who wrote 'Romeo and Juliet'?",
//         options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
//         correctAnswer: "William Shakespeare"
//     }
// ];

// const quizQuestion = document.getElementById("quiz-question");

// const quizOptions = document.querySelectorAll(".ans");

// const quizModal = document.getElementById("quiz-modal");

// const quizScoreModal = document.getElementById("quiz-score-modal");

// const quizScoreSpan = document.getElementById("quiz-score");

// let quizQuestionIndex = 0;

// let quizScore = 0;

// let checker = (userInput) => {
//     let userSelect = userInput.innerText;
//     let correctAnswer = simpleQuestions[quizQuestionIndex].correctAnswer;

//     if (userSelect === correctAnswer) {
//         userInput.classList.add("correct");
//         quizScore++;
//     } else {
//         userInput.classList.add("incorrect");
//     }

//     quizOptions.forEach((element) => {
//         if (element.innerText === correctAnswer) {
//             element.classList.add("correct");
//         }
        
//         element.style.pointerEvents = "none";
//     });
// };


// let showFirstQuestion = () => {

//     quizQuestion.innerText = `Qno${quizQuestionIndex + 1}. ${simpleQuestions[quizQuestionIndex].question}`;

//     quizOptions.forEach((btn, index) => {
//         btn.innerText = simpleQuestions[quizQuestionIndex].options[index];
//     })
// }

// let next = () => {

//     quizScoreSpan.innerText = quizScore;

//     quizQuestionIndex++;

//     if (quizQuestionIndex === simpleQuestions.length) {

//         quizScoreModal.style.top = "50%";
//         quizModal.style.display = "none";

//         return;
//     }

//     quizQuestion.innerText = `Qno${quizQuestionIndex + 1}. ${simpleQuestions[quizQuestionIndex].question}`;

//     quizOptions.forEach((btn, index) => {
//         btn.innerText = simpleQuestions[quizQuestionIndex].options[index];
//     })

//     quizOptions.forEach((btn)=>{
//         btn.classList.remove("correct");
//         btn.classList.remove("incorrect");
//         btn.style.pointerEvents = "";
//     })
// }

// const closeScoreModal = () => {
//     location.reload();
// }

// showFirstQuestion();

//! For Quiz Practice