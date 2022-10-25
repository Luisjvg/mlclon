import styled from "styled-components";

export const Container = styled.div`
/* display: flex;
flex-direction: column; */
background-color: var(--background);
width: 1519px;
@media only screen and (max-width: 1023px){
    width: auto;
}
`
export const Panel = styled.div`
background-color: var(--background);
/* display: grid;
grid-template-columns: 1fr;
align-content: center; */
`

export const Column = styled.div`
background-color: var(--background);
margin-top: 12px;
@media screen and (max-width: 1023px){
    margin-top: 0;
}
`
export const Galeria = styled.div`
display: flex;
justify-items: center;
background-color: var(--background2);
width: 1184px;
margin: 0 auto;
/* display: flex; 
align-items: center;
justify-content: center; */
.galery-img-container{
    width: 100%;
    text-align: center;

    >figure{
        margin-top: 100px;
        position: sticky;
        top: 20px;
    }
    >figure>img{
        width: 85%;
        align-self: center;
    }

}
>section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 70px 10px;
}
.galery-sell{
    color: var(--white);
    font-size: 14px;
    opacity: 55%;
}
h2{
    font-size: 22px;
    font-family: var(--family);
    font-weight: 600;
    text-align: start;
    color: var(--white);
    opacity: 90%;
}
.galery-star img{
    height: 18px;
    width: 18px;
    margin-right: 3px;
    background-color: var(--blue2);
    
}
.galery-betterSell{
    background-color: var(--orange);
    color: var(--white);
    opacity: 90%;
    width: 6rem;
    padding: 3px 3px 3px 5px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    box-shadow: none;
    border-radius: 3px;
}
.galery-img-sell{
    display: none;
}
.galery-OneCategory{
    color: var(--blue1);
    font-size: 12px;
    opacity: 90%;
    margin-left: 8px;
}
.galery-price-container{
    grid-column: 2;
}
.galery-price{
    font-size: 36px;
    opacity: 90%;
    color: var(--white);
}
.galery-fee1{
    font-size: 18px;
    opacity: 90%;
    color: var(--white);
}
.galery-fee2{
    padding-left: 5px;
    font-size: 18px;
    color: var(--green);
    opacity: 90%;
}
.galery-methodPay{
    font-size: 14px;
    line-height: 18.9px;
    color: var(--blue2);
    opacity: 90%;
    margin-top: 10px;
}
.galery-media-info-buy{
    display: none;
}
.galery-info{
    >p{
        margin-bottom: 22px;
        color: var(--white);
        opacity: 90%;
    }
    & li{
        list-style: none;
        margin: 15px 0 15px 0;
        color: var(--white);
        opacity: 90%;
    }
    & li::before{
        content: "•";
        font-size: 18px;
        line-height: 14px;
        margin-right: 8px;
    }
}
.galery-info-buy{
    display: flex;
    flex-direction: column;
}
.galery-info-buy-container{
    border: 1px solid rgba(232, 232, 233, .1);
    border-radius: 8px;
    margin: 30px 15px 0 0;
    padding: 15px 0 0 15px;
    height: auto;
    width: 85%;
}
.galery-info-shipping-container{
    
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
.galery-features{
    color: var(--blue1);
    margin: 8px 0 29px 0;
}
.galery-others{
    >span{
        color: var(--white);
    }
    >span>p{
        color: var(--blue1);
        margin: 15px 0 75px 0;
    }
    
}
.galery-info-sellerInfo{
    font-size: 14px;
    >p{
        color:var(--white);
        padding-bottom: 6px;
    }
    >span{
        font-size: 12px;
        color: var(--white);
        opacity: 50%;
    }
}
.sellerInfo-sellerName{
    color: var(--white);
    padding-bottom: 6px;
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
    display: flex;
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
@media only screen and (max-width: 1023px){
    width: auto;
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;

    .galery-img-container{
        display: none;
    }
    >section{
        grid-row: 1;
        padding: 0;
        width: 90%;
    }
    .galery-sell-container{
        margin: 0 0 0 0;
    }
    .galery-img-sell{
        display: block;
        width: 100%;
    text-align: center;
    >figure{
        margin-top: 20px;
        position: sticky;
        top: 20px;
        }
    >figure>img{
        width: 100%;
        align-self: center;
        }
    }
    .galery-price{
        font-size: 32px;
        font-weight: 300;
    }
    .galery-sell{
        font-size: 12px;
    }
    .galery-Container-media{
        display: flex;
        flex-wrap: wrap;
        >h2{
            font-size: 16px;
            font-weight: 400;
        }
    }
    .galery-sell-media-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 18px 0;
    }
    .galery-star{
        display: flex;
        flex-wrap: wrap-reverse;
        height: 100%;
        align-items: flex-end;
        >img{
            width: 10px;
            height: 10px;
        }
    }
    .galery-betterSell-container{
        margin: 14px 0;
    }
    .galery-media-info-buy{
        display: block;
        border-bottom: 1px solid rgba(182, 169, 150, 0.1);
    }
    .galery-info-buy{
        display: none;
    }
    .galery-media-optionPrice{
        margin: 25px 0;
        display: flex;
    }
    .galery-optionPrice-container{
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(182, 169, 150, 0.1);
        border-radius: 8px;
        padding: 0 14px 10px 14px;
        width: 100%;
        >h2{
            font-size: 13px;
            margin: 14px 0;
        }
        .galery-optionPrice-items{
            list-style: none;
            border-top: 1px solid rgba(182, 169, 150, 0.1);
            >li>div{
                margin: 10px 0;
                >p{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    font-size: 20px;
                    font-weight: 600;
                    >span{
                        font-size: 12px;
                        font-weight: 600;
                        color: rgba(0,0,0,.55);
                        border-radius: 10px;
                        padding: 2px 8px;
                        background-color: #272a2b;
                    }
                }
            }
            >li>ul{
                list-style: none;
                height: 163px;
                .item-optionPay{
                    font-size: 13px;
                    font-weight: 400;
                    color: var(--green);
                    margin: 15px 0 20px 0;
                    >p{
                        margin: 5px 0;
                    }
                }
                .item-seller{
                    font-size: 12px;
                    margin: 2px 0;
                    >p{
                        margin: 2px 0;
                    }
                    >p>a{
                        margin-left: 7px;
                        text-decoration: none;
                    }
                    >span{
                        color: var(--white);
                        opacity: 55%;
                    }
                }
                >li>button{
                    border-radius: 7px;
                    margin: 15px 0 10px 0;
                    width: 100%;
                    >span{
                        display: flex;
                        justify-content: center;
                        padding: 10px;
                        border-radius: 7px;
                        background-color: var(--blue2);
                    }
                }
            }
        }
    }
}
`
export const ShowWindowDimensions = styled.div``
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
