

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
const completedTaskCount = document.querySelector("#completed-todo-tasks")
const totalTaskCount = document.querySelector("#total-todo-tasks")
const totalTimeline = document.querySelector(".todo-total-timeline")
const doneTimeline = document.querySelector(".todo-done-timeline")



let taskCollectionArr = JSON.parse(localStorage.getItem('allTasks')) || [];

let deleteTask; 
let taskCheck;
let allCheckBox; 
let allTaskText
let statusUpdate

let taskUpdateUI = ()=>{
    taskCollection.innerHTML = ""
    taskCollectionArr.forEach((elem, index)=>{
        taskCollection.innerHTML += `
        <div class="todo-task">
                  <div>
                      <i class="${elem.completed ? 'ri-checkbox-circle-line': 'ri-checkbox-blank-circle-line' }" id="checkbox" onclick="taskCheck(${index})"></i>
                      <!-- Make it checkbox-circle-line to make it filled -->
                      <span id="task-text" style="text-decoration: ${elem.completed ? 'line-through' : 'none'}">${elem.text}</span>
                  </div>
                  <i class="ri-delete-bin-line" onclick="deleteTask(${index})"></i>
                </div>`
        
    })

    totalTaskCount.innerHTML = taskCollectionArr.length
    allCheckBox = document.querySelectorAll("#checkbox")
    allTaskText = document.querySelectorAll("#task-text")

}
taskUpdateUI();


taskAddForm.addEventListener('submit', (events)=>{
    events.preventDefault();
    if(newTaskInput.value.trim() == "") return;
    taskCollectionArr.push(
        {
            text: newTaskInput.value,
            completed: false,
        });
    localStorage.setItem('allTasks', JSON.stringify(taskCollectionArr))
    taskUpdateUI();
    taskAddForm.reset();
})

deleteTask = (index)=>{
    taskCollectionArr.splice(index, 1);
    localStorage.setItem('allTasks', JSON.stringify(taskCollectionArr))
    taskUpdateUI();
}
allCheckBox = document.querySelectorAll("#checkbox")
allTaskText = document.querySelectorAll("#task-text")

let allTickCheckBox ;
completedTaskCount.innerHTML = 0

let checkUpdate = ()=>{
    allTickCheckBox = document.querySelectorAll(".ri-checkbox-circle-line")
    completedTaskCount.innerHTML = allTickCheckBox.length
    doneTimeline.style.width = `${((allTickCheckBox.length / taskCollectionArr.length)*100)}%`
}
checkUpdate();

taskCheck = (index)=>{    
    taskCollectionArr[index].completed = !taskCollectionArr[index].completed
    localStorage.setItem('allTasks', JSON.stringify(taskCollectionArr))
    taskUpdateUI();
    checkUpdate();
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



// MOTIVATIONAL QUOTE CONSTANT DECLARATION

const allMotQuote = [
  {
    "quote": "The only way to do great work is to love what you do.",
    "writer": "Steve Jobs"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "writer": "Winston Churchill"
  },
  {
    "quote": "In the middle of every difficulty lies opportunity.",
    "writer": "Albert Einstein"
  },
  {
    "quote": "Be yourself; everyone else is already taken.",
    "writer": "Oscar Wilde"
  },
  {
    "quote": "The future belongs to those who believe in the beauty of their dreams.",
    "writer": "Eleanor Roosevelt"
  },
  {
    "quote": "Do what you can, with what you have, where you are.",
    "writer": "Theodore Roosevelt"
  },
  {
    "quote": "It always seems impossible until it's done.",
    "writer": "Nelson Mandela"
  },
  {
    "quote": "Life is what happens when you're busy making other plans.",
    "writer": "John Lennon"
  },
  {
    "quote": "The journey of a thousand miles begins with a single step.",
    "writer": "Lao Tzu"
  },
  {
    "quote": "Whether you think you can or you think you can't, you're right.",
    "writer": "Henry Ford"
  },
  {
    "quote": "Happiness depends upon ourselves.",
    "writer": "Aristotle"
  },
  {
    "quote": "Dream big and dare to fail.",
    "writer": "Norman Vaughan"
  },
  {
    "quote": "The best way to predict the future is to create it.",
    "writer": "Peter Drucker"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "writer": "Theodore Roosevelt"
  },
  {
    "quote": "What we think, we become.",
    "writer": "Buddha"
  }
]


