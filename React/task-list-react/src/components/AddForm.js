import {useState} from 'react'

const AddForm = ({addTask}) => {

    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(false)


    const onSubmit=()=>{
        if(!text)
        {
            alert('add text')
        }
        
        
    }

    return (
        <form className="add-form">
            <div className="form-control"> 
                <label>Task</label>
                <input type='text' placeholder="Add Task" onChange={(e)=>{setText(e.currentTarget.value)}}/>
                </div>
                <div className="form-control"> 
                <label>Day and Time</label>
                <input type='text' placeholder="Add Day and Time" onChange={(e)=>{setDay(e.currentTarget.value)}}/>
                </div>
                <div className="form-control form-control-check"> 
                <label>Set Reminder</label>
                <input type='checkbox' onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
                </div>
                <input type="submit" value="Save Task" className="btn btn-block" />
            
        </form>
    )
}

export default AddForm
