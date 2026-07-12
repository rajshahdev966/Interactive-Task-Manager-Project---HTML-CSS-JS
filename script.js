

const loginForm = document.querySelector('form')
cosnt loginSection = document.querySelector('section')
const name = document.querySelector("#user-name")
const loginBtn = document.querySelector("#login-button")
let userName;
const navLinks = document.querySelectorAll(".nav-buttons")
const homeButton = navLinks[0]
const planButton = navLinks[1]
const todoButton = navLinks[2]
const settingButton = navLinks[3]

loginForm.addEventListener('submit', (events)=>{
    events.preventDefault();
    userName = name.value;
    
    console.log(userName);

})




