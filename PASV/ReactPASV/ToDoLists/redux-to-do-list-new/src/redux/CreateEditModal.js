import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";

function CreateEditModal(props) {
    const [itemName, setItemName] = useState(props.item === undefined ? '' : props.item.task);
    const [isOpen, setIsOpen] = useState(false);

    function saveButtonHandler() {
        toggle()
        props.item === undefined ? props.createTask(itemName) : props.updateTask(props.item.id, itemName)

    }

    function toggle() {
        setIsOpen(!isOpen);

    }

    return (
        <>
            <Button outline color="primary"onClick={toggle}>{props.buttonLabel}</Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.modalTitle}</ModalHeader>
                <ModalBody>
                    <input value={itemName}
                           onChange={(e) => {
                               setItemName(e.target.value)
                           }}/>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveButtonHandler}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    createTask: (itemName) => dispatch({
        type: 'CREATE_TASK',
        payload: itemName
    }),
    updateTask: (id, task) => dispatch({
        type: 'UPDATE_TASK',
        payload: {id, task}
    }),
    isDoneTask: (id, task) => dispatch({
        type: 'FINISH_TASK',
        payload: {id}
    })
})


export default connect( null, mapDispatchToProps)(CreateEditModal)
