const Square = (props) => {
    const style = {
        border: '1px solid black',
        fontSize: '40px',
        fontWeight: '500',
        cursor: 'pointer',
        backgroundColor: 'lightgray',
    }
    return (

        <button disabled={props.winner}
                onClick={() => props.makeMove(props.index)}
                style={style}>
            {props.square}
        </button>




    )
}
export default Square
