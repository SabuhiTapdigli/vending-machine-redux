import styled from 'styled-components'
import coin_200 from '../assets/coin-200.png'
import coin_100 from '../assets/coin-100.png'
import coin_50 from '../assets/coin-50.png'
import coin_20 from '../assets/coin-20.png'
import coin_10 from '../assets/coin-10.png'
import coin_5 from '../assets/coin-5.png'
import {useDispatch} from 'react-redux'
import { getcoinsInitiate } from '../store/actions/actions'
const Coins = () => {
    const dispatch = useDispatch()
    const coinhandler = (e) => {
        dispatch(getcoinsInitiate(Number(e.target.id)))
    }
    return(
        <CoinWrapper>
            <LargeCoins>
                <img src = {coin_200} alt='coin_200' id='200' onClick={coinhandler}/>
                <img src = {coin_100} alt='coin_100' id='100' onClick={coinhandler}/>
                <img src = {coin_50} alt='coin_50' id='50' onClick={coinhandler}/>
            </LargeCoins>
            <SmallCoins>
                <img src = {coin_20} alt='coin_20' id='20' />
                <img src = {coin_10} alt='coin_10' id='10' />
                <img src = {coin_5} alt='coin_5' id='5'/>
            </SmallCoins>
        </CoinWrapper>
    )
}

const CoinWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    img{
        height:80px;
    }
`
const LargeCoins = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 30px;
    background-color:#cecec8;
    border:5px solid black;
    border-radius:10px;
    img:nth-child(2){
        margin:0 15px;
    }
    cursor:pointer;
`
const SmallCoins = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 10px;
    img:nth-child(2){
        margin:0 15px;
    }
    margin-top:98%;
    cursor:pointer;
    
`

export default Coins