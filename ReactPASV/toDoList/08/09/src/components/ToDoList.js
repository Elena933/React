import React from 'react';

const ToDoList = ({todos, setTodos, setEdit}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleEdit =({id})=>{
        const findToDo = todos.find(todo=>todo.id==id)
        setEdit(findToDo)

    }
    const handleComplete = (todo)=>{
        setTodos(
            todos.map(item =>{
                if (item.id === todo.id){
                    return{...item, completed:!item.completed}
                }return item
            })
        )
    }

    return (
        <div>
            {todos.map(todo => (

                <li className='list-item'  key={todo.id}>

                    <input
                        type="text"
                        value={todo.title}
                        onChange={event => event.preventDefault()}
                        className={`list  ${todo.completed ? "complete" : ""}`}

                    />
                    <div>

                        <button className='edit' onClick={()=>handleEdit(todo)}>Edit</button>
                        <button className='complete-btn' onClick={()=>handleComplete(todo)}>Complete</button>
                        <button className='delete' onClick={() => handleDelete(todo)}>delete</button>
                    </div>

                </li>
            ))}

        </div>
    );
};

export default ToDoList;
