import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 12px;

`
export const Panel = styled.div`
background-color: var(--white);
display: grid;
grid-template-columns: 67fr 33fr;
`

export const Column = styled.div`
background-color: var(--gray1);
`
export const Galeria = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr;
justify-items: center;
background-color: var(--background2);
margin: 0 150px;
/* display: flex; 
align-items: center;
justify-content: center; */
width: 1184px;


>img{
    height: 40%;
    align-self: center;
}
.galery-sell{
    color: var(--gray2);
    font-size: 14px;
    opacity: 55%;
}
>p{
    display:flex;
    flex-direction: column;
    justify-content: center;
    
}

>p h2{
    font-size: 22px;
    font-family: var(--family);
    line-height: 25.96px;
    text-align: start;
    color: var(--white);
    opacity: 90%;
}
>p .galery-star{
    height: 14px;
    width: 15px;
    margin-right: 3px;
    background-color: var(--blue2);
    
}
>p .galery-betterSell{
    background-color: var(--orange);
    padding: 2px 2px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    box-shadow: none;
    border-radius: 3px;
    opacity: 90%;
}
>p .galery-OneCategory{
    color: var(--blue1);
    font-size: 12px;
    opacity: 90%;
}
>p .galery-price{
    font-size: 36px;
    opacity: 90%;
}
>p .galery-fee1{
    font-size: 18px;
    opacity: 90%;
}
>p .galery-fee2{
    padding-left: 5px;
    font-size: 18px;
    color: var(--green);
    opacity: 90%;
}
>p .galery-methodPay{
    font-size: 14px;
    line-height: 18.9px;
    color: var(--blue2);
    opacity: 90%;
    margin-top: 700px auto;
}
`
export const Description = styled.div`
border-top: 1px solid black;
width: 88%;
margin: 0 auto;
padding: 40px 0;
>h4{
    font-size: 24px;
}
>p{
    font-size: 20px;
    letter-spacing: normal;
    text-align: start;
    line-height: 27px;
    color: var(--text1);
}
`
