import styled from 'styled-components'
import React from 'react'


const Numpad = ({id,setid,onOk}) => {
    const numhandler = (e) => {
        setid(id+e.target.id)
    }

    const clearhandler = () => {
        setid('')
    }

    const okhandler = () => {
        onOk()
    }
    return(
        <Numpadwrapper>
            <Num id='1' onClick={numhandler}>1</Num>
            <Num id='2' onClick={numhandler}>2</Num>
            <Num id='3' onClick={numhandler}>3</Num><br/>
            <Num id='4' onClick={numhandler}>4</Num>
            <Num id='5' onClick={numhandler}>5</Num>
            <Num id='6' onClick={numhandler}>6</Num><br/>
            <Num id='7' onClick={numhandler}>7</Num>
            <Num id='8' onClick={numhandler}>8</Num>
            <Num id='9' onClick={numhandler}>9</Num><br/>
            <Num onClick={clearhandler}>C</Num>
            <Num id='0' onClick={numhandler}>0</Num>
            <Num onClick={okhandler}>OK</Num>
        </Numpadwrapper>
    )
}
const Numpadwrapper = styled.div`
    position:absolute;
    top:228px;
    right:41px;
`
const Num = styled.div`
    color:black;
    background-color:#e6e5e3;
    border-radius:50%;
    height: 22px;
    width: 22px;
    font-size: 11px;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    cursor:pointer;
    &:active{
        background-color:red;
    }
    &:last-child:active{
        background-color:green;
    }
`
export default React.memo(Numpad)