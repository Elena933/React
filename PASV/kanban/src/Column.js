import Task from "./Task";

const Column = (props) => {
    return (
            <div className="col">
                <h2>
                {props.column}
                </h2>
                {props.tasks.filter(el=>el.status === props.column).map(el=><Task task={el}/>)}
            </div>

    )
}
export default Column