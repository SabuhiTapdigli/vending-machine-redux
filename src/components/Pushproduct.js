
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { ordereditemInitiate } from '../store/actions/actions';

const Pushproduct = () => {
    const product_img = '../assets/';
    const dispatch = useDispatch()
    const { purchasedProduct } = useSelector(state=>state.Products)
    
    useEffect(() => {
        if(purchasedProduct){
            setTimeout(() => {
                dispatch(ordereditemInitiate(null))
            }, 3000);
        }
    }, [purchasedProduct,dispatch])
    
    return(
        <Wrapper>
                {purchasedProduct && <img src={`${product_img}${purchasedProduct.name}.png`} alt={`${purchasedProduct.name}`}/> }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:absolute;
    bottom:97px;
    left:45%;
    
    img{
        height:55px;
    }
`

export default Pushproduct