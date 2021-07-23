import {Button, Modal} from "reactstrap";

const AddCardModal = () => {

    function handleClose() {

    }

    return(
        <Modal show={show} onHide={handleClose}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Modal.Header closeButton>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )

}
export default AddCardModal

// < div
// className = "input-group mb-3" >
//     < div
// className = "input-group-prepend" >
//     < span
// className = "input-group-text"
// id = "basic-addon1" > @ < /span>
// </div>
// <input type="text" className="form-control" placeholder="Username" aria-label="Username"
//        aria-describedby="basic-addon1">
// </div>



