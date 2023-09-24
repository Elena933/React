import React, {useState} from 'react';
import {IWish} from "./Interfaces";

interface IProps {
    creatNewWish: (newWish: IWish) => void;

}

const CreateNewWish = (props: IProps) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')

    function createButtonHandler() {
        const newWish = {id: Math.random(), name, price: +price, date}
        props.creatNewWish(newWish)
        reset()

    }

    function reset() {
        setName('')
        setDate('')
        setPrice('')
    }


    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}
                   placeholder='name'/>
            <input type = 'date' value={date} onChange={(e) => setDate(e.target.value)}
                   placeholder='date'/>
            <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}
                   placeholder='$'/>
            <div>
            <button disabled={name === '' || date === '' || price === ''} onClick={createButtonHandler}>Create</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default CreateNewWish;
