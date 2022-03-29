import * as types from './actionTypes'

const getProducts = (products) => {
    return{
        type:types.GET_PRODUCT,
        payload:products
    }
}
const sumCoins = (coins) => {
    return{
        type:types.SUM_COINS,
        payload:coins
    }
}

const changeAmount = (change) => {
    return{
        type:types.CHANGE_AMOUNT,
        payload:change
    }
}

const orderedItem = (item) => {
    return{
        type:types.ORDERED_ITEM,
        payload: item
    }
}

export const getproductInitiate = (data) =>{
    return function(dispatch){
        dispatch(getProducts(data))
    }
}

export const getcoinsInitiate = (coins) =>{
    return function(dispatch){
        dispatch(sumCoins(coins))
    }
}

export const changeInitiate = (change) =>{
    return function(dispatch){
        dispatch(changeAmount(change))
    }
}

export const ordereditemInitiate = (item) => {
    return function(dispatch){
        dispatch(orderedItem(item))
    }
}
