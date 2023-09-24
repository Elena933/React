import React, {useState} from 'react';

interface IProps {
    appTitle: string;
    counter: number;
    plusMinus: (value: number) => void;
    reset: (newCounter: string) => void;
}

const Counter = (props:IProps) => {
    const [inputCounter, setInputCounter] = useState('')

    const resetButtonHandler = ()=>{
        props.reset(inputCounter)
        setInputCounter('')
    }


    return (
        <div>

            <h1>{props.appTitle}</h1>
            <button onClick={()=> props.plusMinus(-1)}>-</button>
            {props.counter}
            <button onClick={()=> props.plusMinus( +1)}>+</button><br/>
            <input type='number' value={inputCounter} onChange={(event) => setInputCounter(event.target.value)}/>
            <button onClick={resetButtonHandler}>Reset</button>
        </div>
    );
 
};

export default Counter;
