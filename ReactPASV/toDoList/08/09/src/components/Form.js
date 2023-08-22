import React, {useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({input,setInput,todos,setTodos, edit,setEdit}) => {

    const updateTodo =(title, id, completed) =>{
        const newTodo = todos.map(todo=>
            todo.id === id ? {title, id, completed} : todo

        )
        setTodos(newTodo)
        setEdit('')
    }
     useEffect(()=>{
         if(edit){
             setInput(edit.title)
         }else {
             setInput('')
         }
     }, [setInput, edit])

    const onFormSubmit = (event)=>{
        event.preventDefault()

        if(!edit){

        setTodos([...todos,{ id: uuidv4(), title: input, completed: false}])
            setInput('')
        }else {
            updateTodo(input, edit.id, edit.completed)
        }
    }

    const onInputChange = (event)=>{
        setInput(event.target.value)
    }



    return (
        <form
            onSubmit={onFormSubmit}

        >
            <input
                className='task-input'
                onChange={onInputChange}
                type='text'
                placeholder='enter here'
                className='task-input'
                value={input}

            />
            <button
                className='add-button'
                type='submit'

            >
                {edit ? 'ok' : 'add'}


            </button>



        </form>
    );
};

export default Form;
