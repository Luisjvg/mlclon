import styled from "styled-components";

export const Container = styled.div`
padding-top: 25px;
background-color: var(--background);
/* width: 1519px; */
/* align-items: center; */
`
export const Row = styled.div`
width: 1184px;
display: flex; 
.hero-row-container{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.nav-right{
    justify-content: flex-end;
    & li{
        list-style: none;
    }
}
.hero-nav-container li{
    list-style: none;
    display: inline;

}
.hero-nav-container li::after{
    content: "-";
}
`