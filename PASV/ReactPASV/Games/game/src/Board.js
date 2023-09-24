import Square from "./Square";
const style =
    {
        display: 'grid',
        gridDap:'10px',
gridTemplateColumns:'repeat(3, 1fr)',
gridTemplateRows:'repeat(3, 1fr)',
border: '3px solid red',
width: '450px',
height: '450px',
margin: ' auto',
}
const Board = (props) => {
    return (
        <div style={style}>
            {props.board.map((el, index) => <Square key={index}
                                                    index={index}
                                                    square={el}
                                                    makeMove={props.makeMove}
                                                    winner={props.winner}/>)}


        </div>
    )
}
export default Board
