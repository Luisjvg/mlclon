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
justify-content: space-between;
align-items: flex-end;
margin: 0 auto;

.hero-row-container{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 75%;
}
.hero-nav-container li{
    list-style: none;
    display: inline;

}
.nav-container1{
    margin-right: 2%;
    >span {
        font-weight: 700;
        color: var(--white);
        opacity: 90%;
        font-size: 14px;
    }
    >li {
        opacity: 90%;
        font-size: 14px;
    }
    > a {
        text-decoration: none;
        color: var(--white);
        font-size: 14px;
    }
}
.nav-container1 li::before{
    content: "-";
    margin: 0 5px;
}
.nav-container2{
    > span{
        margin-right: 2%;
        font-size: 14px;
    }
    > li{
        color: var(--blue1);
        font-size: 14px;
    }
    > a{
        color: var(--blue1);
        text-decoration: none;
        font-size: 14px;
    }
}
.nav-container2 li::before{
    content: ">";
    margin: 0 5px;
}
.nav-right {
    width: 25%;
    text-align: end;
}
.nav-right span{
    margin-right: 15px;
}
.nav-right li{
    display: inline;
    list-style: none;
    color: var(--blue3);
    width: 100%;
    font-size: 14px;
}
`