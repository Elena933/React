import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {createCard} from "../redux/actions";

function CreateTaskModal(props) {
    const [inputPriority, setInputPriority] = useState(props.priorities[0]);
    const [inputStatus, setInputStatus] = useState(props.statuses[0].title);

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');


    function submitButtonHandler() {
        const newTask = {
            name: inputName,
            description: inputDescription,
            priority: inputPriority,
            status: inputStatus,
        }
        props.toggle()
      props.createCard(newTask)
    }

    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}> Create</ModalHeader>
                <ModalBody>

                    <select className="form-select" value={inputStatus}
                            onChange={(e) => setInputStatus(e.target.value)}>
                        {props.statuses.map(el => <option value={el.title}>{el.title}</option>)}
                    </select>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter task name"
                               value={inputName} onChange={(e) => setInputName(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter description"
                               value={inputDescription} onChange={(e) => setInputDescription(e.target.value)}/>
                    </div>
                    <select className="form-select" value={inputPriority}
                            onChange={(e) => setInputPriority(e.target.value)}>
                        {props.priorities.map(el => <option value={el}>priority {el}</option>)}
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={submitButtonHandler}>Save</Button>
                    <Button color='secondary' onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>

    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    priorities: state.priorities,
})
const mapDispatchToProps = (dispatch) => ({
    createCard: (newCard) => dispatch(createCard(newCard))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal);
