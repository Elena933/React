import {useState} from "react";

const AddTask = (props) => {
    const [newTask, setNewTask] = useState('')
    const addTaskButtonHandler = () => {
        props.addNewTask(newTask)
    setNewTask('')
    }
  return(
      <div>
          <ul>

          <input placeholder='type new task' value={newTask}
                 onChange={(e)=>
                 setNewTask(e.target.value)}/>
          <button onClick={addTaskButtonHandler}>Add Task</button>
          </ul>
      </div>
  )
}
export default AddTask