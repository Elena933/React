import Cards from "./Cards";

function Columns(props) {
    return (
        <div className="col">
            <h3>{props.column.title}</h3>
            {props.cards.map(el => <Cards card={el}
                                          key={el.id}
                                          columns={props.columns}
                                          changePriority={props.changePriority}
                                          priority={props.priority}
                                          updateCard={props.updateCard}
                                        />)}


        </div>
    );
}

export default Columns;
