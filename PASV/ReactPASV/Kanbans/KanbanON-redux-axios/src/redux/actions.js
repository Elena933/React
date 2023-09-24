import axios from "axios";

export function getStatuses (){
    return(dispatch) =>{
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(response => {
                dispatch({
                    type: 'GET_STATUSES',
                    payload: response.data
                })
            })
            .catch((error) =>{
        console.log(error)
        })
    }
}
export function getCards (){
    return(dispatch) =>{
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(response => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: response.data
                })
            })
            .catch((error) =>{
                console.log(error)
            })
    }
}
export function createCard (newCard){
    return(dispatch) =>{
        axios.post('http://nazarov-kanban-server.herokuapp.com/card', newCard)
            .then(response => {
                dispatch(getCards())
            })
            .catch((error) =>{
                console.log(error)
            })
    }
}

export function changePriority (id, priority){
    return(dispatch) =>{
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {priority})
            .then(response => {
                dispatch(getCards())
            })
            .catch((error) =>{
                console.log(error)
            })
    }
}
export function changeStatus (id, newStatus){
    return(dispatch) =>{
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {status: newStatus})
            .then(response => {
                dispatch(getCards())
            })
            .catch((error) =>{
                console.log(error)
            })
    }
}
export function deleteCard (id){
    return(dispatch) =>{
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(response => {
                dispatch(getCards())
            })
            .catch((error) =>{
                console.log(error)
            })
    }
}
