const form=document.querySelector('#task-list')
const filter=document.querySelector('#filter')
const clearBtn=document.querySelector('.clear-tasks')
const taskList=document.querySelector('.collection')
const taskInput=document.querySelector('#task')



function loadEventListeners(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click', removeTask)
    filter.addEventListener('keyup',filterTasks)
    clearBtn.addEventListener('click',clearTasks)
    document.addEventListener('DOMContentLoaded', getTasks) // always document since this fires when the whole page reloads

}
loadEventListeners()


function getTasks()
{
    let tasks // for storing array of tasks from LS
if(localStorage.getItem('tasks')===null)
{
    tasks=[]
    
}else
{
    tasks=JSON.parse(localStorage.getItem('tasks')); //Data in LS are strings.Need to convert to JS to work on it here. JSON.parse does it.
}

tasks.forEach(function(task){  // creating task item for each task from the array and displaying

    const li=document.createElement('li')
    li.className='collection-item' //materialise class for li
    li.appendChild(document.createTextNode(task))
    const link=document.createElement('a')

    link.className="secondary-content delete-item"
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    li.appendChild(link)

    taskList.appendChild(li)
    
})
}

function addTask(e)
{ const task = taskInput.value
    if(task==="")
    {
        alert("Add a task")
        e.preventDefault()
    }
    else{

    const li=document.createElement('li')
    li.className='collection-item' //materialise class for li
    li.appendChild(document.createTextNode(task))
    const link=document.createElement('a')

    link.className="secondary-content delete-item"
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    li.appendChild(link)

    taskList.appendChild(li)
    
    addTaskToLS(taskInput.value) // adds to local storage
    taskInput.value=""

    e.preventDefault()
    }


}

function addTaskToLS(task){
let tasks // for storing array of tasks from LS
if(localStorage.getItem('tasks')===null)
{
    tasks=[]
    
}else
{
    tasks=JSON.parse(localStorage.getItem('tasks')); //Data in LS are strings.Need to convert to JS to work on it here. JSON.parse does it.
}

tasks.push(task)

localStorage.setItem('tasks', JSON.stringify(tasks))// Data stored back in LS need to be in the form of strings.
}



function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item'))
{    if(confirm('Are you sure')){
    
     e.target.parentElement.parentElement.remove()

     removeTaskFromLS(e.target.parentElement.parentElement) // task we have clicked on goes as a param
    
     
}
}
}

function removeTaskFromLS(taskDeleted)
{
    console.log(taskDeleted)
    let tasks // for storing array of tasks from LS
if(localStorage.getItem('tasks')===null)
{
    tasks=[]
    
}else
{
    tasks=JSON.parse(localStorage.getItem('tasks')); //Data in LS are strings.Need to convert to JS to work on it here. JSON.parse does it.
}

tasks.forEach(function(task1,index){
    if(taskDeleted.textContent===task1)
    { tasks.splice(index,1)

    }

    localStorage.setItem('tasks',JSON.stringify(tasks))

})
}

function clearTasks(e){
   // taskList.innerHTML='' slower

    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild)
    }

    clearLS();
}

function clearLS(){
    localStorage.clear();
}
function filterTasks(e){
    let text =e.target.value.toLowerCase()


    document.querySelectorAll('.collection-item').forEach( function(task){
        const taskText=task.firstChild.textContent

        if(taskText.toLowerCase().indexOf(text)!== -1)
        {
            task.style.display ='block'

        }
        else{
            task.style.display='none'
        }

    })
}