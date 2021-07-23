import TaskItem from "./TaskItem";

const ToDoList = (props) => {
  return(
      <div>
          {props.tasks.map(task=><TaskItem changeTask={props.changeTask}
                                           key={task.id}
                                           task={task}
                                           deleteTask={props.deleteTask}
          />)}
      </div>
  )
}
export default ToDoList