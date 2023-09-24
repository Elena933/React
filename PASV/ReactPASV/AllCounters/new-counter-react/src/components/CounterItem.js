import Buttons from "./Buttons";

function CounterItem(props) {

    return (
       <div>
           <ul>
               <Buttons id={props.counter.id} buttonLabel={'Minus 4'} buttonOnClick={props.minusFour}/>
               <Buttons id={props.counter.id} buttonLabel={'Minus 3'} buttonOnClick={props.minusThree}/>
               <Buttons id={props.counter.id} buttonLabel={'Minus 2'} buttonOnClick={props.minusDouble}/>
               <Buttons id={props.counter.id} buttonLabel={'Minus 1'} buttonOnClick={props.minus}/>
               {props.counter.value}
               <Buttons id={props.counter.id} buttonLabel={'Plus 1'} buttonOnClick={props.plus}/>
               <Buttons id={props.counter.id} buttonLabel={'Plus 2'} buttonOnClick={props.addDouble}/>
               <Buttons id={props.counter.id} buttonLabel={'Plus 3'} buttonOnClick={props.plusThree}/>
               <Buttons id={props.counter.id} buttonLabel={'Plus 4'} buttonOnClick={props.plusFour}/>
               <Buttons id={props.counter.id} buttonLabel={'Delete'} buttonOnClick={props.deleteCounter}/>
               <Buttons id={props.counter.id} buttonLabel={'Reset'} buttonOnClick={props.resetCounter}/>
               <Buttons id={props.counter.id} buttonLabel={'↑'} buttonOnClick={props}/>
               <Buttons id={props.counter.id} buttonLabel={'↓'} buttonOnClick={props}/>
           </ul>
       </div>
    )
}

export default CounterItem;
