const initialState = {
    priorityArr: [1, 2, 3, 4, 5, 6, 7],
    cards: [],
    columns: []

}
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS' : return {
            ...state,
            cards: action.payload
        }
        default:
            return state

    }
}