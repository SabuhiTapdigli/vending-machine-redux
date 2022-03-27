import styled from 'styled-components';
import React from 'react'
const Products = ({item}) =>{
    const product_img = '../assets/';
    
    return(
        <Wrapper>
            {item.map((i,index)=>(
                <Product key={index}>
                    {[...Array(i.item_count).keys()].map((img)=>(
                            <img className={`${i.item_name === 'bomba'? 'bomba' : null}`} key={img} src={i.item_name ? `${product_img}${i.item_name}.png` : null} alt={i.item_name ? i.item_name : null}/>
                    ))}
                </Product>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    height:84px;
`
const Product = styled.div`
    display:inline-flex;
    width:53px;
    height:73px;
    justify-content:center;
    align-items:end;
    position:relative;
    img{
        height:55px;
        position:absolute;
    }
    margin:0 5px;
    img:nth-child(1){
        z-index:3
    }
    img:nth-child(2){
        z-index:2;
        top:14.5%;
    }
    img:nth-child(3){
        z-index:1;
        top:4.5%
    }
`
const Imgwrapper = styled.div`
    position:relative;
    img{
        height:80px;
        position:absolute;
        left:0;
    }
    
    div:second-child{
        position:absolute;
        left:10px;
    }
`
export default React.memo(Products)