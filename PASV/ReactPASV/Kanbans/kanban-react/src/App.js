import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Columns from "./components/Columns";

//kanban board
function App() {
    const [columns, setColumns] = useState([]);
    const [cards, setCards] = useState([]);
    const [priority, setPriority] = useState([1, 2, 3, 4, 5]);

    const getColumn = () => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column/')
            .then(function (response) {
                // handle success
                setColumns(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    const getCards = () => {
        axios.get(`http://nazarov-kanban-server.herokuapp.com/card`)
            .then(function (response) {
                // handle success
                setCards(response.data)
            })
            .catch(function (error) {
                // handle error

            })
    }


    const changeStatus = (id, status) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {'status': status})
            .then(function (response) {
                // handle success
                getCards()

            })
            .catch(function (error) {
                // handle error

            })
    }
    //kanban board
    const changePriority = (id, priority, value) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {'priority': priority + value})
            .then(function (response) {
                // handle success
                getCards()

            })
            .catch(function (error) {
                // handle error

            })
    }

    const deleteCard = (id) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(function (response) {
                // handle success
                getCards()

            })
            .catch(function (error) {
                // handle error

            })
    }
    const updateCard = (card) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`,card )
            .then(function (response) {
                // handle success
                getCards()

            })
            .catch(function (error) {
                // handle error

            })
    }


    useEffect(() => {
        getColumn()
        getCards()

    }, [])


    return (
        <div className="App">
            <h1>Kanban Board</h1>

            <div className="container">
                <div className="row align-items-start">
                    {columns.map(el => <Columns key={el._id}
                                                column={el}
                                                cards={cards}
                                                changePriority={changePriority}
                                                columns={columns}
                                                priority={priority}
                                                updateCard={updateCard}


                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App;
