import styled from "styled-components";

export const Container = styled.div`
/* display: flex;
flex-direction: column; */
background-color: var(--background);
`
export const Panel = styled.div`
background-color: var(--background);
/* display: grid;
grid-template-columns: 1fr;
align-content: center; */
`

export const Column = styled.div`
background-color: var(--background);
/* width: 1519px; */
margin-top: 12px;
`
export const Galeria = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr 1fr;
justify-items: center;
align-items: center;
background-color: var(--background2);
width: 85%;
margin: 0 auto;
/* display: flex; 
align-items: center;
justify-content: center; */

 >img{
    width: 75%;
    align-self: center;
}
.galery-sell{
    color: var(--gray2);
    font-size: 14px;
    opacity: 55%;
}
>section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 100px 20px 0 0;
}

>section h2{
    font-size: 22px;
    font-family: var(--family);
    font-weight: 600;
    text-align: start;
    color: var(--white);
    opacity: 90%;
}
>section .galery-star{
    height: 18px;
    width: 18px;
    margin-right: 3px;
    background-color: var(--blue2);
    
}
>section .galery-betterSell{
    background-color: var(--orange);
    width: 6rem;
    padding: 3px 3px 3px 5px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    box-shadow: none;
    border-radius: 3px;
    opacity: 90%;
}
>section .galery-OneCategory{
    color: var(--blue1);
    font-size: 12px;
    opacity: 90%;
    margin-left: 8px;
}
>section .galery-price{
    font-size: 36px;
    opacity: 90%;
}
>section .galery-fee1{
    font-size: 18px;
    opacity: 90%;
}
>section .galery-fee2{
    padding-left: 5px;
    font-size: 18px;
    color: var(--green);
    opacity: 90%;
}
>section .galery-methodPay{
    font-size: 14px;
    line-height: 18.9px;
    color: var(--blue2);
    opacity: 90%;
    margin-top: 10px;
}
.galery-info{
    >span{
        font-weight: 600;
    }
    & li{
        margin: 0 17px 10px 0;
    }
}
.galery-info-buy{
    border: 1px solid rgba(69, 66, 142, 1);
    border-radius: 8px;
    margin: 0 15px 0 0;
    padding: 15px 0 0 15px;
}
.galery-info-shipping-container{
    display: flex;
    flex-direction: column;
    margin: 25px 0 15px 0;
}
.galery-info-shipping{
    color: var(--green);
    font-size: 16px;
    & span{
        font-weight: 600;
        font-size: 16px;
    }
    >img{
        margin-right: 10px;
    }
}
.galery-info-direction a{
    text-decoration: none;
    color: var(--blue1);
    >img{
        width: 14px;
        margin: 5px 5px 0 40px;
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
