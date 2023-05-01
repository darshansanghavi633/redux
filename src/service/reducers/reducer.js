import { ADD_TO_CART,REMOVE_TO_CART} from '../constants'
//initailState means what should be the value of data when it is initially stored 
const initialState = {
    cardData: []
}
console.log(initialState)
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            // console.warn("reducer",action)
            state.pop()
            return [
                ...state,
            ]
        default:
            return state
    }


}
