const form=document.querySelector('#task-list')
const filter=document.querySelector('#filter')
const clearBtn=document.querySelector('.clear-tasks')
const taskList=document.querySelector('.collection')
const taskInput=document.querySelector('#task')



function loadEventListeners(){
    document.addEventListener('submit',addTask);
}
loadEventListeners()

function addTask(e)
{ const task = taskInput.value
    if(task==="")
    {
        alert("Add a task")
    }

    const li=document.createElement('li')
    li.className='collection-item' //materialise class for li
    li.appendChild(document.createTextNode(task))
    const link=document.createElement('a')
    link.setAttribute
    link.className="secondary-content delete-item"
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    li.appendChild(link)

    taskList.appendChild(li)
    taskInput.value=""

    e.preventDefault()

}