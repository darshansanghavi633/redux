import {ADD_TO_CART} from '../constants'
import { REMOVE_TO_CART } from '../constants'
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:REMOVE_TO_CART    
    }
}

//type basically tells us how data is related , or it is related to which type 

