
import styled from 'styled-components';
import {useSelector} from 'react-redux'

const Pushproduct = () => {
    const product_img = '../assets/';
    const {orderedItem} = useSelector(state=>state.Products)
    return(
        <Wrapper>
                {orderedItem.cond && <img src={`${product_img}${orderedItem.product}.png`} alt='product'/> }
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