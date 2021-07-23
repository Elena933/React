import React from 'react';

const style = {
    border: '1px solid black',
    fontSize: '25px',
    fontWeight: '110',
    outline: 'none'
}


const Square = (props) => {

    const buttons = () => {
        return (
            <>
                <div>
                    <element onClick={() => props.move("up")}>▲</element>

                </div>
                <div>
                    <element onClick={() => props.move("left")}>◀</element>
                    🐞

                    <element onClick={() => props.move("right")}>▶</element>
                </div>
                <div>
                    <element onClick={() => props.move("down")}>▼</element>
                </div>
            </>
        )
    }

    return (
        <div style={style}>
            {props.row.gamer ? buttons() : null}
            {props.row.prize ? <p>🍀</p> : null}
        </div>
    );
};

export default Square;