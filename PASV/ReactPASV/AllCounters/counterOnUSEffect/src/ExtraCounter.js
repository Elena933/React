import React, {useEffect, useState} from 'react';

const ExtraCounter = () => {
    const [counter, setCounter] = useState(1)
    const plusMinus = (value) => {
        setCounter(counter + value)
    }
    useEffect(() => {
        console.log('useEffect')
    },[])

    return (
        <div>
            <h1>Extra Counter</h1>

            <button onClick={()=> plusMinus(-1)}>Minus</button>
           {counter}
            <button onClick={()=> plusMinus(1)}>Plus</button>
        </div>
    );
};

export default ExtraCounter;
