

const loginForm = document.querySelector('form')
const loginSection = document.querySelector('.name-form')
const name = document.querySelector("#user-name")
const loginBtn = document.querySelector("#login-button")
let userName = localStorage.getItem('userName');
const navLinks = document.querySelectorAll(".nav-buttons")
const homeButton = navLinks[0]
const planButton = navLinks[1]
const todoButton = navLinks[2]
const settingButton = navLinks[3]
const profileInitial = document.querySelector(".profile-initial")
const profileName = document.querySelector("#profile-name")



let profileUpdate = ()=>{
    profileInitial.innerHTML = `<span>${}</span>`
}
if(userName){
    loginSection.style.display = "none"

}
    
loginForm.addEventListener('submit', (events)=>{
    events.preventDefault();
    userName = name.value;
    console.log(userName)
    loginSection.style.display = "none"
    localStorage.setItem('userName', userName)
    
    
})



