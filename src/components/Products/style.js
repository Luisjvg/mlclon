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
align-items: center;
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
.galery-info-buy{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 649px;
}
.galery-info-shipping-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0 15px 0;
}
.galery-info-shipping{
    color: var(--green);
    font-size: 16px;
    & span{
        font-weight: 600;
        font-size: 16px;
    }
}
.galery-info-direction a{
    text-decoration: none;
    color: var(--blue1);
    >img{
        width: 14px;
        margin: 0 5px 0 35px;
    }
}
.galery-info-sellerInfo{
    font-size: 14px;
    >span{
        font-size: 12px;
        color: var(--white);
        opacity: 50%;
    }
    >p{
        color:var(--white)
    }
}
.sellerInfo-sellerName{
    color: var(--white);
    & a {
        color: var(--blue1);
    }

}
.galery-info-stock{
    color: var(--white);
    margin: 35px 0 0 0;
}
.galery-info-stockInfo{
    opacity: 90%;
    margin: 30px 0;
    color: var(--white);
    .stockInfo-quantities{
        opacity: 55%;
    }
}
.galery-info-buttonBuy button{
    width: 275px;
    height: 48px;
    margin: 0 0 8px 0;
    border-radius: 6px;
}
.buttonBuy-buy{
    background-color: var(--blue2);
}
.buttonBuy-addCar{
    background-color: rgba(30, 45, 61, 1);
    >span{
        color: var(--blue3);
    }
}
.galery-info-buyInfo{
    display: grid;
    grid-template-columns: auto 3fr;
    grid-template-rows: repeat(4, .2fr);
}
.galery-info-buyInfo img{
    grid-column: 1;
}
.buyInfo-list{
    margin: 15px 8px;
    list-style: none;
    >li{
        margin: 15px 0;
        }
    & span{
        color: rgba(255, 255, 255, 0.55);
        font-size: 14px;
        /* opacity: 55%; */
        }
    & a{
        text-decoration: none;
        }
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
