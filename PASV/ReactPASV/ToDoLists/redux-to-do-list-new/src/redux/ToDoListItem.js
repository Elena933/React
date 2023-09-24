import {connect} from "react-redux";
import CreateEditModal from "./CreateEditModal";
import { Button } from 'reactstrap';

function ToDoListItem(props) {
    return (
        <ol style={props.item.done ? {textDecoration: 'line-through'} : {}}>
            {props.item.task}
            <Button outline color='danger'  onClick={() => props.deleteTask(props.item.id)}>X</Button>{' '}
            <Button outline color="success"  onClick={() => props.isDoneTask(props.item.id)}>✔</Button>{' '}
            <Button disabled={props.index === 0} outline color="secondary" onClick={()=> props.toUpTask(props.item.id)} >⬆</Button>{' '}
            <Button disabled={props.index === props.toDoListLastIndex} outline color="secondary" onClick={()=> props.toDawnTask(props.item.id)} >⬇</Button>{' '}
            <CreateEditModal  buttonLabel='Edit' modalTitle='Update your task' item={props.item}/>
        </ol>
    );

}
const mapStateToProps = (state) => ({
    toDoListLastIndex: state.toDoList.length -1
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    isDoneTask: (id) => dispatch({type: 'FINISH_TASK', payload: id}),
    toUpTask: (id) => dispatch({type: 'MOVE_UP', payload: id}),
    toDawnTask: (id)=> dispatch({type: 'MOVE_DAWN', payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);
