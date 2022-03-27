import styled from 'styled-components';
import React from 'react'
const Itemid = ({item}) =>{
    return(
        <Wrapper>
            {item.map((i)=>
                <span key={i.id}>{i.id}</span>
            )}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    span{
        border-radius:50%;
        padding:5px;
        color:white;
        background-color:black;
        border: 1px solid white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin:16px;

    }
    


`
export default React.memo(Itemid)