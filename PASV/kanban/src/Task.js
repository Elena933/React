const Task = (props) => {
    return (
        <div className="card">
            <h5 className="card-header">{props.task.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.task.description}</h5>
                <p className="card-text">PRIORITY:{props.task.priority}
                    <button>↑</button>
                    <button>↓</button>
                </p>
                <button disabled={props.task.status==='to-do'} className="btn btn-primary">←</button>
                <button disabled={props.task.status==='done'} className="btn btn-primary">→</button>
                <button className="btn btn-primary">UPDATE</button>
                <button className="btn btn-primary">DELETE</button>
            </div>
        </div>

    )
}
export default Task