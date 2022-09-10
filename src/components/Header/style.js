import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 100%;
background-color: var(--yellowHeader);
margin: 0 auto;
`

export const Wrapper = styled.nav`
max-width: 84.5%;
margin: 8px 8px;
margin: 0 auto;
height: 100px;
img{
    width: 134px;
    height: 34px;
}
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
.nav-category{
    & li{
        display: inline;
        padding-right: 24px;
    }
}
.nav-login{
    & li{
        display: inline;
    }
}
`;