import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {createCard, deleteCard} from "../redux/actions";
import {useState} from "react";

function deleteTaskModal(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }
    function deleteTask(){
        props.deleteTask(props.task._id)
        toggle()
    }

    return (
        <div>
            <Button color='danger' onClick={toggle}> X</Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}> Delete this card?</ModalHeader>
                <ModalBody>
                    {props.task.name}
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={deleteTask}>Submit</Button>
                    <Button color='secondary' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>

    );
}

const mapStateToProps = (state) => (
    {
        statuses: state.statuses,
        priorities: state.priorities,
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        createCard: (newCard) => dispatch(createCard(newCard)),
        deleteTask:(id)=>dispatch(deleteCard(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(deleteTaskModal);
