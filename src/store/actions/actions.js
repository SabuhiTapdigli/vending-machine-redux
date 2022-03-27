import * as types from './actionTypes'

const getproducts = (products) => {
    return{
        type:types.GET_PRODUCT,
        payload:products
    }
}
const sumcoins = (coins) => {
    return{
        type:types.SUM_COINS,
        payload:coins
    }
}

const change_amount = (change) => {
    return{
        type:types.CHANGE_AMOUNT,
        payload:change
    }
}

const ordered_item = (item) => {
    return{
        type:types.ORDERED_ITEM,
        payload: item
    }
}

export const getproductInitiate = (data) =>{
    return function(dispatch){
        dispatch(getproducts(data))
    }
}

export const getcoinsInitiate = (coins) =>{
    return function(dispatch){
        dispatch(sumcoins(coins))
    }
}

export const changeInitiate = (change) =>{
    return function(dispatch){
        dispatch(change_amount(change))
    }
}

export const ordereditemInitiate = (item) => {
    return function(dispatch){
        dispatch(ordered_item(item))
    }
}
