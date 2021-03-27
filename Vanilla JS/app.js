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
}
loadEventListeners()

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
    taskInput.value=""

    e.preventDefault()
    }

}



function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item'))
{    if(confirm('Are you sure')){
    
     e.target.parentElement.parentElement.remove()
     
}
}
}

function clearTasks(e){
   // taskList.innerHTML='' slower

    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild)
    }
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