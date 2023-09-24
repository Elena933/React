import React from 'react';
import {connect} from "react-redux";
import {changePriority, changeStatus, deleteCard} from "../redux/actions";
import DeleteTaskModal from "./deleteTaskModal";

function Card(props) {

    function changeStatusButtonHandler(direction) {
        const statusesArray = props.statuses.map(el => el.title)
        const indexCurrentStatus = statusesArray.indexOf(props.task.status)
        const moveStatus = direction === 'left' ? -1 : 1
        const newStatus = statusesArray[indexCurrentStatus + moveStatus]
        props.changeStatus(props.task._id, newStatus)
    }


    return (
        <div className="card">
            <div className="card-header">
                {props.task.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">{props.task.description}</p>
                <p className="card-text">
                    <button className="btn btn-outline-primary"
                            disabled={props.priorities[props.priorities.length - 1] === props.task.priority}
                            onClick={() => props.changePriority(props.task._id, props.task.priority + 1)}>↑
                    </button>
                    {props.task.priority}
                    <button className="btn btn-outline-primary"
                            disabled={props.priorities[0] === props.task.priority}
                            onClick={() => props.changePriority(props.task._id, props.task.priority - 1)}>↓
                    </button>
                </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-warning">Update</button>

                <button onClick={()=>changeStatusButtonHandler('left')} className="btn btn-outline-primary">←</button>
                <button onClick={()=>changeStatusButtonHandler('right')} className="btn btn-outline-secondary">→</button>
                <DeleteTaskModal  task={props.task} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    priorities: state.priorities,
    statuses: state.statuses,


})
const mapDispatchToProp = (dispatch) => ({
    changePriority: (id, priority) => dispatch(changePriority(id, priority)),
    changeStatus: (id, newStatus) => dispatch(changeStatus(id, newStatus)),
    deleteCard: (id) => dispatch(deleteCard(id)),

})

export default connect(mapStateToProps, mapDispatchToProp)(Card);
