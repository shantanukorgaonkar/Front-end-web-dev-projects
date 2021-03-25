import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddForm from './components/AddForm'
import {useState} from 'react'
function App() {
  const [tasks,setTask]=useState([{id:1,text:"Buy Groceries",day:"Monday",reminder:true,},{id:2,text:"Pick up Mom",day:"Tuesday",reminder:true,},{id:3,text:"Call Jake",day:"Friday",reminder:true,},{id:4,text:"Pack Lunch",day:"Sunday",reminder:true,}])
  

  //Delete Task
  const deleteTask=(id)=>{
setTask(tasks.filter((task)=>{
  return task.id !== id
}))
  }

  //add task
  const addTask =()=>{
    console.log("task added")
  }

  //Toggle Reminder
  const toggleReminder=(id)=>{
    setTask(tasks.map((task)=>{
      if(task.id===id)
      {return({ ...task,reminder:!task.reminder}) // ()... )return the entire object task BUT changed reminder
    } else return task


    }))
  }


  let name="Task Tracker"
  return (
    <div className="container">
     <Header title={name}/>
     <AddForm taskAdd={addTask} />
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: "No tasks today"}
    </div> 
  );
}

export default App;

/*class App extends React.Component{
  render(){
    return <h1>Hello world</h1>
  }
}*/