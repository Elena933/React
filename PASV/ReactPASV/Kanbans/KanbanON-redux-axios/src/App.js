import './App.css';
import {connect} from "react-redux";
import {getCards, getStatuses} from "./redux/actions";
import React, {useEffect, useState} from "react";
import Column from "./components/Column";
import CreateTaskModal from "./components/CreateTaskModal";
import {Button} from "reactstrap";

function App(props) {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        props.getStatusesToProps()
        props.getCardsToProps()

    }, [])
    console.log(props.statuses)

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="App">
            <h1>{props.appName}</h1>
            <Button color='success' onClick={toggle}> Create Task </Button>
            {isOpen && <CreateTaskModal isOpen={isOpen} toggle={toggle}/>}
            <div className="container text-center" >
                <div className="row align-items-start" >
                    {props.statuses.map(el=> <Column key={el._id}
                                                     status={el}
                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    appName: state.appName,
    statuses: state.statuses,
})
const mapDispatchToProps = (dispatch) => ({
    getStatusesToProps: () => dispatch(getStatuses()),
    getCardsToProps: () => dispatch(getCards())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
