import UpdateModal from "./UpdateModal";

function Cards(props) {

    return (
        <div className="card">
            <h5 className="card-header"></h5>
            {props.card.status}
            <div className="card-body">
                <h5 className="card-title">{props.card.name}</h5>
                <li className="list-group-item">{props.card.description}</li>
                <p className="card-text">priority: {props.card.priority}
                    <button onClick={()=> props.changePriority(props.card._id,props.card.priority, +1) }
                            className="btn btn-outline-warning">↑</button>
                    <button onClick={()=> props.changePriority(props.card._id,props.card.priority, -1) }
                            className="btn btn-outline-warning">↓</button>
                </p>
                <button className="btn btn-outline-success">Add</button>
                <button onClick={()=> props.moveCardLeft(props.card._id.status)} className="btn btn-outline-info">←</button>
                <button onClick={()=> props.moveCardRight(props.card._id)} className="btn btn-outline-info">→</button>
                <button onClick={()=>props.deleteCard(props.card._id)} className="btn btn-outline-danger">Delete</button>
                <UpdateModal card={props.card}
                             columns={props.columns}
                             priority={props.priority}
                             updateCard={props.updateCard}

                />
            </div>
        </div>
    );
}

export default Cards;
