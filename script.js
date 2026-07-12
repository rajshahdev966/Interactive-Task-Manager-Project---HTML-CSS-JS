

// LOGIN BAR CONSTANT AND VARIABLE DECLARATION 

const loginForm = document.querySelector('form')
const loginSection = document.querySelector('.name-form')
const name = document.querySelector("#user-name")
const loginBtn = document.querySelector("#login-button")
const profileFirstName = document.querySelector("#profile-first-name")
let userName = localStorage.getItem('userName');


// NAVIGATION BAR CONSTANT AND VARIABLE DECLARATION 
const navLinks = document.querySelectorAll(".nav-buttons")
const homeButton = navLinks[0]
const planButton = navLinks[1]
const todoButton = navLinks[2]
const settingButton = navLinks[3]
const profileInitial = document.querySelector(".profile-initial")
const profileName = document.querySelector("#profile-name")

// TIME AND DATE SECTION CONSTANT AND VARIABLE DECLARATION 
const greetTime = document.querySelector("#time-greet")
const dayUI = document.querySelector("#day")
const dateUI = document.querySelector("#date")








let updateTimeAndDate = ()=>{
    const now = new Date();

    const timeInfo = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute:  '2-digit',
        hour12: true,
    })

    const dateInfo = now.toDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })


}


// LOGIN SECTION LOGIC CODE 

let profileUpdate = ()=>{
    profileInitial.innerHTML = `<span>${userName[0]}</span>`
    profileName.innerHTML = `${userName}`
    profileFirstName.innerHTML = `${userName.split(" ")[0]}`
    
}
if(userName){
    loginSection.style.display = "none"
    profileUpdate();
}
    
loginForm.addEventListener('submit', (events)=>{
    events.preventDefault();
    userName = name.value;
    if(userName.trim() === "") return;
    console.log(userName)
    loginSection.style.display = "none"
    localStorage.setItem('userName', userName)
    profileUpdate();
    
})





