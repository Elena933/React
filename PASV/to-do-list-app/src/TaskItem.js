import {useState} from "react";

const TaskItem = (props) => {
    const [inputTask, setInputTask] = useState(props.task.value)

    return (
        <li>
            <span className='task'>
            {props.task.value}
            </span>
            <input className='inputName' type='text' value={inputTask}
                   onChange={(event) =>
                       setInputTask(event.target.value)}/>
            <button onClick={()=>props.changeTask(props.task.id,inputTask)}>Update</button>
            <button  onClick={()=>props.deleteTask(props.task.id)}>Delete</button>
            <button>Done</button>
        </li>
    )
}
export default TaskItem