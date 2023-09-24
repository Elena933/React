import {connect} from "react-redux";
import ToDoListItem from "./ToDoListItem";

function ToDoList(props) {
    return (
        <div>

            {props.list.map((el, index) => <ToDoListItem item={el}
                                                         index={index}
                                                         key={el.id}
                                                         createTask={props.createTask}

            />)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    list: state.toDoList
})

export default connect(mapStateToProps)(ToDoList);
