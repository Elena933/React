import './App.css';
import Square from "./Square";
import {useEffect, useState} from "react";

const style = {
    border: '1px solid black',
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(5, 1fr) / repeat(5, 1fr)'
}

function App() {

    const [square, setSquare] = useState([
        [{gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false}],
        [{gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false}],
        [{gamer: false, prize: false},
            {gamer: true, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false}],
        [{gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false}],
        [{gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false},
            {gamer: false, prize: false}],
    ]);

    const [step, setStep] = useState(1)

    const move = (direction) => {
        let newSquare = [...square];
        if (direction === "right") {
            for (let i = 0; i < newSquare.length; i++) {
                let current;
                for (let j = 0; j < newSquare[i].length; j++) {
                    if (newSquare[i][j].gamer === true) {
                        newSquare[i][j].gamer = false;
                        current = j + 1;
                    } else if (j === current) {
                        if (newSquare[i][j].prize === true) newSquare[i][j].prize = false;
                        newSquare[i][j].gamer = true;
                    }
                }
            }
        }
        if (direction === "left") {
            for (let i = 0; i < newSquare.length; i++) {
                let current;
                for (let j = newSquare[i].length - 1; j >= 0; j--) {
                    if (newSquare[i][j].gamer === true) {
                        newSquare[i][j].gamer = false;
                        current = j - 1;
                    } else if (j === current) {
                        if (newSquare[i][j].prize === true) newSquare[i][j].prize = false;
                        newSquare[i][j].gamer = true;
                    }
                }
            }
        }
        if (direction === "down") {
            let row;
            let current;
            for (let i = 0; i < newSquare.length; i++) {
                for (let j = 0; j < newSquare[i].length; j++) {
                    if (newSquare[i][j].gamer === true) {
                        newSquare[i][j].gamer = false;
                        current = j;
                        row = i + 1;
                    }
                    if (i === row && j === current) {
                        if (newSquare[i][j].prize === true) newSquare[i][j].prize = false;
                        newSquare[i][j].gamer = true;
                    }
                }
            }
        }
        if (direction === "up") {
            let row;
            let current;
            for (let i = newSquare.length - 1; i >= 0; i--) {
                for (let j = newSquare[i].length - 1; j >= 0; j--) {
                    if (newSquare[i][j].gamer === true) {
                        newSquare[i][j].gamer = false;
                        current = j;
                        row = i - 1;
                    }
                    if (i === row && j === current) {
                        if (newSquare[i][j].prize === true) newSquare[i][j].prize = false;
                        newSquare[i][j].gamer = true;
                    }
                }
            }
        }
        setSquare(newSquare);
        setStep(step + 1);
    }

    const putprize = () => {
        const newSquare = [...square];
        const row = Math.floor(Math.random() * 5)
        const index = Math.floor(Math.random() * 5)
        newSquare[row][index].prize = true;
        setSquare(newSquare)
    }

    const [win, setWin] = useState(false);

    const winner = () => {
        let newSquare = square.map(el => el.map(el => (el.prize === false) ? 1
            : el).reduce((acc, curr) =>
            acc + curr, 0)).reduce((acc, curr) =>
            acc + curr, 0);

        if (newSquare === 25) {
            setWin(true);
        }
    }

    useEffect(() => {
        alert("LETS GET STARTED. \n Your task is to remove all clovers")
    }, [])

    useEffect(() => {
        setInterval(() => {
            putprize()
        }, 5000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (step > 4) {
                winner()
            }
        }, 2400)
    }, [step])

    useEffect(() => {
        if (win === true) {
            setTimeout(() => {
                alert("REFRESH PAGE \n to start all over again")
            }, 1000)
        }
    }, [win])

    return (
        <div className="App">
            <h1>Let's go!</h1>
            {!win && <div style={style}>
                {square.map(el => el.map(elm => <Square key={Math.random()} row={elm} move={move}/>))}
            </div>}
            {win && <div>
                <hr/>
                <h2>Congratulation!</h2>
                <h3>You are win!</h3>
            </div>
            }
        </div>
    );
}

export default App;