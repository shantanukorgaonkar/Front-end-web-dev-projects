import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddForm from './components/AddForm'
import About from './components/About'
import {useState} from 'react'
function App() {
  const [tasks,setTask]=useState([])
  const [showAddTask,setShowAddTask]=useState('false')

  //Delete Task
  const deleteTask=(id)=>{
setTask(tasks.filter((task)=>{
  return task.id !== id
}))
  }

  //add task
  const addTask =(taskDetails)=>{

    const id = Math.floor(Math.random() * 10000) +1 
    const newTask={id,...taskDetails}
    console.log(newTask)
    setTask([...tasks,newTask])
    
   
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
     <Header title={name} toggleButton={()=> { setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
     { showAddTask && <AddForm taskAdd={addTask} />}
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: "No tasks today"}
     <Footer />

    </div> 
  );
}

export default App;

/*class App extends React.Component{
  render(){
    return <h1>Hello world</h1>
  }
}*/