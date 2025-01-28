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

//! For JS method practice

// let inputBox = document.getElementById("input-box");

// let list = document.getElementById("list");

// let editTaskBtn = document.getElementById("editTask");

// let addTaskBtn = document.getElementById("addTask");

// let paraValue;

// const appendingElement = () => {

//     let li = document.createElement("li");
//     let para = document.createElement("p");
//     let delBtn = document.createElement("span");
//     let editBtn = document.createElement("span");

//     editBtn.setAttribute("class", "edit")

//     para.innerText = inputBox.value;

//     delBtn.innerText = "X";

//     editBtn.innerText = "Edit";

//     li.appendChild(para);
//     li.appendChild(delBtn);
//     li.appendChild(editBtn);

//     list.appendChild(li);

//     delBtn.onclick = () => {
//         li.remove();
//     }

//     editBtn.onclick = () => {
//         inputBox.value = para.innerText;
//         inputBox.focus();
//         addTaskBtn.style.display = "none";
//         editTaskBtn.style.display = "inline";
//         paraValue = para;
//     }
// }

// const addTask = () => {

//     if (inputBox.value === "") {
//         alert("Plase enter a task");
//         return;
//     } else {
//         appendingElement();
//     }

//     inputBox.value = "";
// };

// const editTask = () => {

//     if (list.childElementCount === 0) {
//         addTaskBtn.style.display = "inline";
//         editTaskBtn.style.display = "none";
//         inputBox.focus();
//         inputBox.value = "";
//     } else if (inputBox.value === "") {
//         alert("Plase enter a task");
//         return;
//     } else {
//         paraValue.innerText = inputBox.value;
//     }



//     paraValue = null;
//     addTaskBtn.style.display = "inline";
//     editTaskBtn.style.display = "none";
//     inputBox.value = "";
// };

//! For JS method practice 

//! For Crud Operation

// let userNameInput = document.getElementById("userName");
// let userEmailInput = document.getElementById("email");
// let userRollNoInput = document.getElementById("rollno");
// let list = document.getElementById("list");
// let message = [];
// let selectedRow = null;

// const appendingElement = () => {
//     // Validation
//     if (userNameInput.value === "") {
//         message.push("User Name is mandatory");
//         alert(message);
//         message = [];
//         return;
//     } else if (userEmailInput.value === "") {
//         message.push("Email is mandatory");
//         alert(message);
//         message = [];
//         return;
//     } else if (userRollNoInput.value === "") {
//         message.push("Roll No is mandatory");
//         alert(message);
//         message = [];
//         return;
//     }

//     if (document.getElementById("form-btn").innerText === "Save Changes" && selectedRow) {
//         // Update existing row
//         selectedRow.children[0].innerText = userNameInput.value;
//         selectedRow.children[1].innerText = userEmailInput.value;
//         selectedRow.children[2].innerText = userRollNoInput.value;

//         document.getElementById("form-btn").innerText = "Submit";
//         selectedRow = null; // Reset selected row
//     } else {
//         // Add new row
//         let tr = document.createElement("tr");

//         tr.innerHTML = `
//             <td class="userNameResult">${userNameInput.value}</td>
//             <td class="userEmailResult">${userEmailInput.value}</td>
//             <td class="userRollNoResult">${userRollNoInput.value}</td>
//             <td>
//                 <button class="btn btn-sm btn-warning fw-bold edit">Edit</button>
//                 <button class="btn btn-sm btn-danger fw-bold delete">Delete</button>
//             </td>
//         `;

//         list.appendChild(tr);
//     }

//     // Clear input fields
//     userNameInput.value = "";
//     userEmailInput.value = "";
//     userRollNoInput.value = "";
// };

// list.addEventListener("click", (e) => {
//     let target = e.target;

//     // Delete row
//     if (target.classList.contains("delete")) {
//         target.parentElement.parentElement.remove();
//     }

//     // Edit row
//     if (target.classList.contains("edit")) {
//         selectedRow = target.parentElement.parentElement;

//         let userNameResult = selectedRow.children[0];
//         let userEmailResult = selectedRow.children[1];
//         let userRollNoResult = selectedRow.children[2];

//         userNameInput.value = userNameResult.innerText;
//         userEmailInput.value = userEmailResult.innerText;
//         userRollNoInput.value = userRollNoResult.innerText;

//         document.getElementById("form-btn").innerText = "Save Changes";
//     }
// });

//! For Crud Operation 

//! For Object Practice

// Singleton way
// Object.create();

// Object literals way

// const userInput = prompt("Enter your name");

// const userInput2 = Number(prompt("Enter your age"));

// const userData = {
// name: "Abid",
// "full name": "Abid Khan",
// age: 17,
// isLoggedIn: true,
// lastLoggedIn: ["Mon", "Fri"]
// userName: userInput,
// userAge:userInput2
// userFunction: function greeting() {
//     return "Hello World"
// },
// }

// userData.Function2 = function () {
//     return `Hello user , ${userData.name}`
// }

// First Way to access value
// console.log(userData.name);
// console.log(userData.age);
// console.log(userData.isLoggedIn);

// userData.lastLoggedIn.forEach((value) => {
//     console.log(value);
// })
// First Way to access value

// Second Way to access value
// console.log(userData["full name"]);
// Second Way to access value

// userData.userName = userData.userName.toUpperCase();

// if (userData.userName === userData.userName.toLowerCase()) {
//     console.log(userData.userName);
// } else {
//     console.log("The value is uppercase");
// }

// console.log(userData.userAge);

// console.log(userData.userFunction());

// console.log(userData.userFunction2());

//! For Object Practice

//! For JS Array method Task

//! Filter Tasks
//? Task 1
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNums = nums.map((number) => {
//     return number % 2 !== 0;
// });

// console.log(oddNums);

//? Task 2

// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 14 },
// ];

// const youngerPeople = people.filter((peoples) => {
//     return peoples.age <= 18;
// })

// console.log(youngerPeople);

//? Task 3

// const strings = [
//     "apple",
//     "banana",
//     "avocado",
//     "grape",
//     "orange",
//     "blueberry",
//     "apricot",
//     "cherry",
//     "mango",
//     "strawberry"
// ];

// const startFromA = strings.filter((value)=>{
//     if(value.charAt(0) === "a"){
//         return value;
//     }
// });

// console.log(startFromA);

//? Task 4

// const products = [
//     { name: "Laptop", price: 1500 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 1200 },
//     { name: "Smartwatch", price: 500 },
//     { name: "Headphones", price: 200 },
// ];

// const ExpProducts = products.filter((value, index) => {
//     if (value.price >= 1000) {
//         return value.price;
//     }
// });

// console.log(ExpProducts);

//? Task 5

// const strings = [
//     "apple",
//     "banana",
//     "avocado",
//     "grape",
//     "orange",
//     "blueberry",
//     "apricot",
//     "cherry",
//     "mango",
//     "strawberry"
// ];

// const longString = strings.filter((value) => {
//     if (value.length > 5) {
//         return value;
//     }
// })

// console.log(longString);

//! Filter Tasks

//! Map Tasks 

//? Task 1

// const numbers = [12, 5, 8, 130, 44, 7, 23, 90, 3, 17];

// const copyNum = numbers.map((value) => {
//     return value ** 2;
// })

// console.log(copyNum);

//? Task 2

// const names = ["alice", "bob", "charlie", "david", "eve", "frank", "grace", "hannah", "isaac", "jack"];

// const UpperName = names.map((value) => {
//     return value.toUpperCase();
// });

// console.log(names);

// console.log(UpperName);

//? Task 3

// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 14 },
// ];

// const onlyAge = people.map((value) => {
//     return value.age;
// })

// console.log(people);

// console.log(onlyAge);

//? Task 4

// const prices = [299, 499, 1200, 150, 899, 2499, 75, 1999, 349, 450];

// const updatedPrices = prices.map((value) => {
//     return Math.ceil(value + value * 0.1);
// })

// console.log(prices);

// console.log(updatedPrices);

//? Task 5

// const programmingLanguages = [
//     "javascript",
//     "python",
//     "java",
//     "c++",
//     "ruby",
//     "go",
//     "swift",
//     "typescript",
//     "php",
//     "kotlin"
// ];

// const afterAppending = programmingLanguages.map((value) => {
//     return `${value} JS`
// });

// console.log(programmingLanguages);

// console.log(afterAppending);

//! Map Tasks

//! Filter and Map Tasks

//? Task 1
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const filterEvenSquare = (nums) => {
//     return nums.filter((item) => item % 2 === 0).map((item) => item ** 2);
// }

// const updatedNum = filterEvenSquare(nums);

// console.log(nums);

// console.log(updatedNum);

//? Task 2

// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 14 },
// ];

// const updatedPeople = (people) => {
//     return people.filter((value) => value.age > 18).map((value) => value.name);
// }

// const updatedPeople2 = (people) => {
//     return people.filter((value) => value.age < 18).map((value) => value.name)
// };

// const adultPeople = updatedPeople(people);

// const youngerPeople = updatedPeople2(people);

// console.log(people);

// console.log(adultPeople);

// console.log(youngerPeople);

//? Task 3

// const prices = [299, 499, 1200, 150, 899, 2499, 75, 1999, 349, 450];

// const cheaperProducts = (prices) => {
//     return prices.filter((item) => item > 1000).map((item) => Math.round(item + item * 0.2));
// }

// const result = cheaperProducts(prices);

// console.log(prices);

// console.log(result);

//? Task 4

// const strings = [
//     "apple",
//     "banana",
//     "avocado",
//     "grape",
//     "orange",
//     "blueberry",
//     "apricot",
//     "cherry",
//     "mango",
//     "strawberry"
// ];

// const longerThanSixCha = (strings) => {
//     return strings.filter((item) => item.length > 6).map((item) => item.toUpperCase())
// }

// const result = longerThanSixCha(strings);

// console.log(strings);

// console.log(result);

//? Task 5


// const users = [
//     { username: "user1", isActive: true },
//     { username: "user2", isActive: false },
//     { username: "user3", isActive: true },
//     { username: "user4", isActive: false },
//     { username: "user5", isActive: true },
// ];

// const activeUser = (user) => {

//     return user.filter((item) => {
//         return item.isActive === true;
//     }).map((item) => {
//         return item.username;
//     });

// }

// const result = activeUser(users);

// console.log(users);

// console.log(result);

//! Filter and Map Tasks

//! For JS Array method Practice

//! For API Practice start

// const startBtn = document.getElementById("start");

// const stopBtn = document.getElementById("stop");

// const hexCodeFunc = () => {
//     let hexFormat = Math.floor(Math.random() * 16777215).toString(16);
//     let hexCode = `#${hexFormat.padStart(6, "0")}`;
//     document.querySelector(".back-ground-color").style.backgroundColor = hexCode
// };

// let flag = null;

// startBtn.addEventListener("click", () => {
//     hexCodeFunc();
//     flag = setInterval(hexCodeFunc,1000)
// })

// stopBtn.addEventListener("click", () => {
//     clearInterval(flag);
// })

//! For API Practice end

//! For custom-Cursor start

const innerBox = document.querySelector(".inner-box");

innerBox.addEventListener("mousemove", (event) => {

    let clientX = event.pageX;

    let clientY = event.pageY;

    const outerCircle = document.querySelector(".outer-circle");

    const innerCircle = document.querySelector(".inner-circle");

    innerCircle.style.left = `${clientX}px`;
    innerCircle.style.top = `${clientY}px`;

    // innerCircle.animate({
    //     left:`${clientX}px`,
    //     top:`${clientY}px`
    // },{duration:500,fill:"backwards"})



    outerCircle.style.left = `${clientX}px`;
    outerCircle.style.top = `${clientY}px`;

    outerCircle.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:500,fill:"backwards"})

})

//! For custom-Cursor end