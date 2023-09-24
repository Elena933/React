import CounterItem from "./CounterItem";

const CounterWrapper = (props) => {
    return (
        <div>
            {props.counters.map(el => <CounterItem
                key={el.id}
                counter={el}
                minus={props.minus}
                plus={props.plus}
                deleteCounter={props.deleteCounter}
                addDouble={props.addDouble}a
                minusDouble={props.minusDouble}
                minusThree={props.minusThree}
                plusThree={props.plusThree}
                plusFour={props.plusFour}
                minusFour={props.minusFour}
                resetCounter={props.resetCounter}
            />)}
                <button onClick={props.addCounter}>Add counter</button>
        </div>
    );
};

export default CounterWrapper;
