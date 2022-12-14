import styled from "styled-components";

export const Container = styled.header`
width: 1519px;
height: 100%;
background-color: var(--yellowHeader);
margin: 0 auto;
@media (max-width: 1023px){
    width: auto;
    height: auto;
}
`

export const Wrapper = styled.nav`
width: 1184px;
margin: auto;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
.logo{
    width: 48px;
    height: 34px;
}
form{
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 50%;
}
input{
    width: 100%;
    font-size: 22px;
    padding: 6px 6px 6px 14px;
    margin-left: 28px;
    border-radius: 2px;
    background-color: var(--gray2);
}
.Ofertas{
    height: 50%;
    width: 30%;
}
.row-carrito{
    position: relative;
    top: 75px;
    left: 19px;
}
@media only screen and (max-width: 1023px){
width: auto;
height: auto;
padding: 10px 0;
margin: 0 auto;
justify-content: center;
.logo{
    width: 44px;
    height: 32px;
}
form{
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    >button{
        opacity: 0;
    }
}
input{
    width: 100%;
    font-size: 16px;
    padding: 6px 6px 6px 14px;
    margin-left: 8px;
    border-radius: 2px;
    background-color: var(--gray2);
}
.Ofertas{
    display: none;
}
.row-carrito{
    position: relative;
    top: 0;
    left: 0;
}
}
@media only screen and(min-width: 320px){
width: 100px;
}
`
export const Row = styled.div`
width: auto;
.nav-category{
    display: none;
}
.nav-login{
    display: none;
}
@media screen and (min-width: 1023px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1184px;
    margin: 0 auto;
.nav-category{
    display: flex;
    padding-left: 36px;
    width: 100%;
    & li{
        display: inline;
        padding-left: 19px;
        font-size: 14px;
    }
}
.nav-login{
    display: flex;
    justify-content: end;
    width: 100%;
    >a{
        height: auto;
    }
    & li{
        display: inline;
        padding-right: 15px;
        font-size: 14px;
    }
}
}
`