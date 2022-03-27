import styled from 'styled-components'
import cancel_btn from '../assets/cancel-button.png'
import {useDispatch} from 'react-redux'
import { changeInitiate } from '../store/actions/actions'
const Cancelbtn = ({setcoins}) => {
    const dispatch = useDispatch()
    const cancelorder = () => {
        dispatch(changeInitiate(0))
    }
    return(
        <Cancel onClick={cancelorder}><img src={cancel_btn} alt='cancel-btn'/></Cancel>
    )
}

const Cancel = styled.div`
    position:absolute;
    top: 169px;
    right: 51px;
    img{
        height:29px;
    }
    cursor:pointer;
}
`
export default Cancelbtn 