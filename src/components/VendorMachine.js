import styled from 'styled-components'
import machine from '../assets/vendor-machine.png';
import Numpad from './Numpad';
import DisplayScreen from './DisplayScreen'
import Cancelbtn from './Cancelbtn';
import Products from './Products';
import Pushproduct from './Pushproduct';
import {useSelector,useDispatch} from 'react-redux'
import { changeInitiate, ordereditemInitiate, getproductInitiate } from '../store/actions/actions'
import { useState} from 'react'
const VendorMachine = () =>{
    const {coins,products} = useSelector(state => state.Products)
    const [id,setid] = useState('')
    const dispatch = useDispatch()

    const onPurchase = () => {
        const newArr = products.map((i)=>{
            if(i.id === id &&  i.price <= coins && i.item_count !== 0 ){
                return{
                    ...i,
                    item_count : i.item_count - 1
                }
            }
            return i
        })
        const foundProduct = products.find(i=> i.id === id &&  i.price <= coins && i.item_count !== 0)
        if(foundProduct){
                dispatch(changeInitiate(coins-foundProduct.price))
                dispatch(ordereditemInitiate({name:foundProduct.item_name}))
        }
        dispatch(getproductInitiate(newArr))
        setid('')
    }
    

    return(
        <Container>
            <Machineimg src={machine} alt='Vendor-Machine'/>
            <DisplayScreen/>
            <ProductWrapper>
                {products.map((item,index)=>(
                    <Products key = {index} item = {item}/>
                ))}
            </ProductWrapper>
            <Numpad onOk={onPurchase} id={id} setid={setid}/>
            <Cancelbtn/>
            <Pushproduct/>
        </Container>
    )
}

const Container = styled.div`
    height:750px;
    width:500px;
    position:relative;
`
const ProductWrapper = styled.div`
    position:absolute;
    top: 54px;
    left: 35px;
    z-index:0;
    display: inline-grid;
    grid-template-columns: 54px repeat(3,55px) 54px;
    grid-template-rows: 86px repeat(4,86px);
    gap:7px 7px;
`
const Machineimg = styled.img`
    width:100%;
    height:100%;
    position:relative;
`



export default VendorMachine

