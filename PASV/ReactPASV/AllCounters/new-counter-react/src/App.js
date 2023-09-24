import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import CounterWrapper from "./components/CounterWrapper";

function App() {
    const [counters, setCounters] = useState([
        {
            id: uuidv4(),
            value: 1,
        },
        {
            id: uuidv4(),
            value: 2,
        },
        {
            id: uuidv4(),
            value: 3,
        }
    ])

    function moveUp(id) {

    }

    function moveDown(id) {

    }


    function plusFour(id) {
        const updatedFour = counters.map(el => el.id === id
            ? {...el, value: el.value + 4} : el)
        setCounters(updatedFour)
    }

    function plusThree(id) {
        const updatedMinus = counters.map(el => el.id === id
            ? {...el, value: el.value + 3} : el)
        setCounters(updatedMinus)
    }

    function addDouble(id) {
        const updatedDouble = counters.map(el => el.id === id
            ? {...el, value: el.value + 2} : el)
        setCounters(updatedDouble)

    }

    function plus(id) {
        const updatedMinus = counters.map(el => el.id === id
            ? {...el, value: el.value + 1} : el)
        setCounters(updatedMinus)
    }

    function minus(id) {
        const updatedMinus = counters.map(el => el.id === id
            ? {...el, value: el.value - 1} : el)
        setCounters(updatedMinus)
    }

    function minusDouble(id) {
        const updatedDouble = counters.map(el => el.id === id
            ? {...el, value: el.value - 2} : el)
        setCounters(updatedDouble)

    }

    function minusThree(id) {
        const updatedDouble = counters.map(el => el.id === id
            ? {...el, value: el.value - 3} : el)
        setCounters(updatedDouble)

    }

    function minusFour(id) {
        const updatedFour = counters.map(el => el.id === id
            ? {...el, value: el.value - 4} : el)
        setCounters(updatedFour)

    }

    function deleteCounter(id) {
        const delCounters = counters.filter(el => el.id !== id)
        setCounters(delCounters)
    }

    function addCounter() {
        const newCounter = {
            id: uuidv4(),
            value: 0
        }
        setCounters([...counters, newCounter])
    }

    function resetCounter(id) {
        const newReset = counters.map(el => el.id === id ?
            {...el, value: 0} : el)

        setCounters(newReset)
    }


    return (
        <div className="App">
            <CounterWrapper counters={counters}
                            minus={minus}
                            plus={plus}
                            deleteCounter={deleteCounter}
                            addCounter={addCounter}
                            addDouble={addDouble}
                            minusDouble={minusDouble}
                            minusThree={minusThree}
                            plusThree={plusThree}
                            minusFour={minusFour}
                            plusFour={plusFour}
                            resetCounter={resetCounter}

            />

        </div>
    );
}

export default App;
