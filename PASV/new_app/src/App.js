
import './App.css';
import {connect} from "react-redux";
import {getCardsInActions} from "./redux/Actions";
import {useEffect} from "react";

function App(props) {

    useEffect(() => {props.getCards()}, [])
    console.log(props.cards)
  return (
    <div className="App">
      <h1> Learn Redux Axios </h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
    priorityArr: state.priorityArr,
    columns: state.columns,
    cards: state.cards

})
const mapDispatchToProps  = (dispatch) => ({
    getCards: ()=>dispatch(getCardsInActions())

})
export default connect(mapStateToProps,mapDispatchToProps) (App);
