import {v4 as uuidv4} from 'uuid';


const initialState = {

    toDoList: [
        {id: 1, task: 'Finish JSP', done: false},
        {id: 2, task: 'Finish React', done: false},
        {id: 3, task: 'Start React Project', done: false},
        {id: 4, task: 'Find Job', done: false},
    ],
    title: 'To Do List Redux',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            const newItem = {
                id: uuidv4(),
                task: action.payload,
                done: false
            }
            return {...state, toDoList: [...state.toDoList, newItem]}

        case
        'DELETE_TASK':

            const newToDo = state.toDoList.filter(el => el.id !== action.payload);
            return {...state, toDoList: newToDo};

        case
        'UPDATE_TASK':
            const updatedToDoList = state.toDoList.map(el => {
                if (el.id === action.payload.id) {
                    return {...el, task: action.payload.task}
                } else {
                    return el
                }
            })
            return {...state, toDoList: updatedToDoList};


        case
        'FINISH_TASK':
            const newToDoList = state.toDoList.map(el => el.id === action.payload ? {...el, done: !el.done} : el);
            return {...state, toDoList: newToDoList};

        case
        'MOVE_UP':
          const toDoListUp = [...state.toDoList]
            const index = toDoListUp.map(el => el.id).indexOf(action.payload)
            const currentTask = toDoListUp[index]
            toDoListUp[index] = toDoListUp[index -1]
            toDoListUp[index -1] = currentTask
            return {...state, toDoList: toDoListUp};

        case
        'MOVE_DAWN':
            const toDoListDawn = [...state.toDoList]
            const arrayId = toDoListDawn.map(el => el.id)
            const taskIndex = arrayId.indexOf(action.payload)
            const current = toDoListDawn[taskIndex]
            toDoListDawn[taskIndex] = toDoListDawn[taskIndex +1]
            toDoListDawn[taskIndex +1] = current
            return {...state, toDoList: toDoListDawn};

        default:
            return state;


    }


}
export default reducer;
