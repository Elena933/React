import './App.css';
import {useState} from "react";
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css'



function App() {
    const [columns, setColumns] = useState(['to-do', 'in-progress', 'review', 'done'])
    const [tasks, setTasks] = useState([
        {
            id: 123,
            name: 'home work/ next lecture',
            description: 'create app',
            priority: 1,
            status: 'to-do'
        },

        {
            id: 124,
            name: 'review home work',
            description: 'test app',
            priority: 2,
            status: 'review'
        },

    ])
    return (

        <div className="container text-center">
            <h1>Kanban Board</h1>
            <div className="row align-items-start">
                {columns.map(el=> <Column column={el} tasks={tasks}/>)}
            </div>
        </div>
    );
}

export default App;
