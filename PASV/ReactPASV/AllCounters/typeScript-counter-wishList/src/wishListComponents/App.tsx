import React, {useState} from 'react';

import '../App.css';
import Counter from "../Counter";
import WishList from "./WishList";
import {IWish} from "./Interfaces";
const initialWishList = [
  {
    id: 1, name: 'House', price: 200000000, date: '2025'
  },
  {
    id: 12, name: 'Car', price: 10000000, date: '2023'
  },
  {
    id: 13, name: 'Vocation', price: 10000, date: '2024'
  }
]

function App() {
  const [wishList, setWishList] = useState(initialWishList)
  const [counter, setCounter] = useState(1)
  const appTitle = 'Counter'

  const plusMinus = (value: number)=>{
    setCounter(counter + value)
  }

  const reset = (newCounter: string) => {
    setCounter(+newCounter)

  }

  function creatNewWish(newWish: IWish){
    setWishList([...wishList, newWish])

  }




    return (
    <div className="App">
      <WishList wishList={wishList}
                creatNewWish={creatNewWish}

      />


      {/*<Counter counter={counter}*/}
      {/*         appTitle={appTitle}*/}
      {/*         plusMinus={plusMinus}*/}
      {/*         reset={reset}*/}

      {/*/>*/}

    </div>
  );
}

export default App;
