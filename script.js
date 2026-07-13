

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
    "quote": "Discipline is choosing between what you are now and what you want most.",
    "author": "Abraham Lincoln"
  },
  {
    "quote": "Success grows quietly from the small promises you keep to yourself each day.",
    "author": "Robin Sharma"
  },
  {
    "quote": "Your future is shaped more by your habits than by your hopes or dreams.",
    "author": "James Clear"
  },
  {
    "quote": "The hardest step toward success is often the decision to begin today.",
    "author": "John C. Maxwell"
  },
  {
    "quote": "Great achievements are built from ordinary actions repeated with extraordinary consistency.",
    "author": "Darren Hardy"
  },
  {
    "quote": "You become stronger every time you choose progress over comfort and excuses.",
    "author": "Mel Robbins"
  },
  {
    "quote": "Dreams remain wishes until daily effort transforms them into lasting reality.",
    "author": "Les Brown"
  },
  {
    "quote": "Every meaningful victory begins with a mindset that refuses to surrender easily.",
    "author": "Tony Robbins"
  },
  {
    "quote": "Confidence is earned by keeping the commitments you make to yourself consistently.",
    "author": "Brian Tracy"
  },
  {
    "quote": "Time rewards those who invest it wisely instead of spending it carelessly.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Your greatest competition is the person you were yesterday, not anyone else.",
    "author": "Unknown"
  },
  {
    "quote": "Small improvements practiced every day eventually create results that seem impossible.",
    "author": "James Clear"
  },
  {
    "quote": "Courage is moving forward even when fear insists that you should stop.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "The quality of your life reflects the quality of your daily decisions.",
    "author": "Stephen R. Covey"
  },
  {
    "quote": "Consistency will carry you farther than motivation ever promises to take you.",
    "author": "Zig Ziglar"
  }
]



