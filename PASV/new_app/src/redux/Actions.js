import axios from "axios";
export const getCardsInActions = () =>{
    return (dispatch) => axios.get('http://nazarov-kanban-server.herokuapp.com/card')
        .then(res => dispatch({type: 'GET_CARDS', payload: res.data}))
        .catch((err) => console.log(err))
}