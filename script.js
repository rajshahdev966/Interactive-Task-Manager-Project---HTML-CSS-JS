

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
const timeUI = document.querySelector("#time")
const amPm = document.querySelector("#am-pm")

// TODO LIST CONSTANT AND VARIABLE DECLARATION

const taskAddForm = document.querySelector("#todo-task-add-form")
const newTaskInput = document.querySelector("#task-input")
const taskAddButton = document.querySelector("#task-add-button")
const taskCollection = document.querySelector(".todo-task-collection")
const deleteButton = document.querySelector(".ri-delete-bin-line")
const checkBox = document.querySelector("#checkbox")
let taskCollectionArr = [
    "Complete DSA Practice",
    "Go to GYM",
    "Go to JEE Practice",
];
let deleteTask;
let taskCheck;
let allCheckBox;
let allTaskText

let taskUpdateUI = ()=>{
    taskCollection.innerHTML = ""
    taskCollectionArr.forEach((elem, index)=>{
        taskCollection.innerHTML += `
        <div class="todo-task">
                  <div>
                      <i class="ri-checkbox-blank-circle-line" id="checkbox" onclick="taskCheck(${index})"></i>
                      <!-- Make it checkbox-circle-line to make it filled -->
                      <span id="task-text">${elem}</span>
                  </div>
                  <i class="ri-delete-bin-line" onclick="deleteTask(${index})"></i>
                </div>`
    })

}
taskUpdateUI();


taskAddForm.addEventListener('submit', (events)=>{
    events.preventDefault();
    if(newTaskInput.value.trim() == "") return;
    taskCollectionArr.push(newTaskInput.value);
    taskUpdateUI();
    taskAddForm.reset();
})

deleteTask = (index)=>{
    taskCollectionArr.splice(index, 1);
    taskUpdateUI();
}
allCheckBox = document.querySelectorAll("#checkbox")
allTaskText = document.querySelectorAll("#task-text")

taskCheck = (index)=>{    
    if(allCheckBox[index].classList.contains("ri-checkbox-blank-circle-line")){
        allCheckBox[index].classList.replace('ri-checkbox-blank-circle-line', 'ri-checkbox-circle-line')
        allTaskText[index].style.textDecoration = "line-through"
    }else{
        allCheckBox[index].classList.replace('ri-checkbox-circle-line', 'ri-checkbox-blank-circle-line')
        allTaskText[index].style.textDecoration = "none"
    }


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

// TIME AND DATE SECTION LOGIC 

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

    const dayInfoArr = dateInfo.split(" ")
    const timeInfoArr = timeInfo.split(" ")

    dayUI.innerHTML = `${dayInfoArr[0]}day`
    dateUI.innerHTML = `${dayInfoArr[2]} ${dayInfoArr[1]} ${dayInfoArr[3]}`
    timeUI.innerHTML = `${timeInfoArr[0]}`
    amPm.innerHTML = ` ${timeInfoArr[1]}`


}
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000)




