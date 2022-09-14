import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 100%;
background-color: var(--yellowHeader);
margin: 0 auto;
`

export const Wrapper = styled.nav`
max-width: 84.5%;
margin: 0 auto;
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
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
.nav-category{
    display: flex;
    padding-left: 48px;
    width: 100%;
    & li{
        display: inline;
        padding-left: 9%;
        font-size: 14px;
    }
}
.nav-login{
    display: flex;
    justify-content: end;
    width: 100%;
    & li{
        display: inline;
        padding-right: 15px;
        font-size: 14px;
    }
}
`;