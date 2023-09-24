import './App.css';
import {connect} from "react-redux";
import ToDoList from "./redux/ToDoList";
import CreateEditModal from "./redux/CreateEditModal";


function App(props) {
    return (
        <div className="App">
            <CreateEditModal buttonLabel='Create new task' modalTitle='Create new task to do'/>
            <h1>{props.appName}</h1>
            <ToDoList/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    appName: state.title

})

export default connect(mapStateToProps)(App);
