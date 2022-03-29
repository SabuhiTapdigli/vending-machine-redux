import styled from 'styled-components';
import React from 'react'
const Products = ({item}) =>{
    const product_img = '../assets/';
    
    return(
        <Wrapper>
                {[...Array(item.item_count).keys()].map((img)=>(
                    <img 
                        className={`${item.item_name === 'bomba'? 'bomba' : null}`}
                        key={img} 
                        src={item.item_name ? `${product_img}${item.item_name}.png` : null} 
                        alt={item.item_name ? item.item_name : null}
                        />
                ))}
                <Ids>
                    <span>{item.id}</span>
                </Ids>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position:relative;
    img{
        height:55px;
        width:48px;
        position:absolute;
        bottom:0;
        left:8%;
    }
    img:nth-child(1){
        z-index:3
    }
    img:nth-child(2){
        z-index:2;
        top:29%;
    }
    img:nth-child(3){
        z-index:1;
        top:23.5%
    }
`
const Ids = styled.div`
    text-align:center;
    position:relative;
    height:100%;
    z-index:5;
    span{
        border-radius:50%;
        padding:5px;
        color:white;
        background-color:black;
        border: 1px solid white;
        position:absolute;
        bottom: -20%;
        left: 26%;

    }
`
export default React.memo(Products)