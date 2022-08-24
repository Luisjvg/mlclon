import styled from "styled-components";
import { img } from "../../img/img";

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
grid-template-columns: 1fr 1fr;
justify-items: center;
/* display: flex; 
align-items: center;
justify-content: center; */
width: 891px;


>img{
    height: 40%;
    align-self: center;
}
.galery-sell{
    color: var(--gray2);
    font-size: 14px;
    opacity: 55%;
}
>p h2{
    font-size: 22px;
    font-family: var(--family);
    line-height: 25.96px;
    text-align: start;
    color: var(--white);
    opacity: 90%;
}
.galery-star{
    height: 14px;
    width: 15px;
    margin-right: 3px;
    background-color: var(--blue2);
    
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
