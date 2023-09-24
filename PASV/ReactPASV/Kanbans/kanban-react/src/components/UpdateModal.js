import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default  function  UpdateModal (props)  {
    const  [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(props.card.name);
    const [description, setDescription] = useState(props.card.description);
    const [status, setStatus] = useState(props.card.status);
    const [taskPriority, setTaskPriority] = useState(props.card.priority);


   const toggle = () =>
       setIsOpen(!isOpen);

   const okButtonHandler = () => {
         props.updateCard(
             {
                 description: description,
                 priority: taskPriority,
                 status: status,
                 _id: props.card._id,
                 name: name
             }
         );
         toggle();
   }

        return (
            <div>
                <Button className="btn btn-outline-primary" onClick={toggle}>Update</Button>
                <Modal isOpen={isOpen}>
                    <ModalHeader toggle={toggle}>Update card</ModalHeader>
                    <ModalBody>
                        <select className="form-select" aria-label="Default select example"
                                value={status} onChange={(event)=>  setStatus(event.target.value)}>
                            {props.columns.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                        </select>

                        <select className="form-select" aria-label="Default select example"
                                value={taskPriority} onChange= {(event)=>  setTaskPriority(event.target.value)}>
                            {props.priority.map(el => <option key={el._id} value={el}>{el}</option>)}
                        </select>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" value={name}
                                   onChange={(event)=>  setName(event.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" value={description}
                                   onChange={(event)=>  setDescription(event.target.value)}/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={okButtonHandler}>Ok</Button>{' '}
                        <Button color="secondary" onClick={toggle}>X</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }



