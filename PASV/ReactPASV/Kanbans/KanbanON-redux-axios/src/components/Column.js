import React from 'react';
import {connect} from "react-redux";
import Card from "./Card";

function Column(props) {
    return (
        <div className="col">
            <h3>{props.status.title}</h3>
            {props.cards
                .filter(el=>el.status === props.status.title)
                .map(el=><Card key={el._id}
                               task={el}

            />)}
        </div>
    );
}
const mapStateToProps = (state) => ({
    cards: state.cards,
})
export default connect(mapStateToProps)(Column);
