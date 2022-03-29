import * as types from '../actions/actionTypes'
import data from '../../data.json';

const Initialstate = {
    coins:0,
    purchasedProduct:null,
    products : data.products
}

const Products = (state = Initialstate,action) =>{
    switch(action.type){
        case types.GET_PRODUCT:
          return{...state,products:action.payload}
        case types.SUM_COINS:
          return{...state,coins:state.coins + action.payload}
        case types.CHANGE_AMOUNT:
          return{...state,coins:action.payload}
        case types.ORDERED_ITEM:
          return{...state,purchasedProduct:action.payload}
        default:
            return state
    }
}

export default Products
