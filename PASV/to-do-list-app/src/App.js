import './App.css';
import {useState} from "react";
import Title from "./Title";
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";
import { v4 as uuidv4 } from 'uuid';

function App() {
    const title = "To Do List App"
    const [tasks, setTasks] = useState([

    ])
    const changeTask = (id, newValue) => {
        const newTasks = tasks.map(el => el.id === id
            ? {...el, value: newValue,
            } :el
        );
        setTasks(newTasks)
    }
    const addNewTask = (newTask) => {
        const addTask =
        {
            id: uuidv4(),
            value: newTask,
            isDone: false
        }
        setTasks([...tasks, addTask])

    }
    const deleteTask = (id) => {
        const removeTask=
            tasks.filter(el => el.id !== id)
        setTasks(removeTask)


    }
    return (
        <div className="App">

            <Title title={title}/>
            <ToDoList tasks={tasks} changeTask={changeTask}deleteTask={deleteTask}/>
            <AddTask addNewTask={addNewTask} />


        </div>
    );
}

export default App;
