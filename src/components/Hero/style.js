import styled from "styled-components";

export const Container = styled.div`
padding-top: 12px;
display: flex;
justify-content: space-between;
flex-direction: column;
`
export const Row = styled.div`
>a{
    font-size: 14px;;
    text-decoration: none;
    color: var(--blue1)
    padding: 2.5px 0;
    transition: all 300ms ease-in-out;

    & + a{
        padding-left: 5px;
    }
    & + span{
        margin 0 5px;
    }
}
>section{
    display: grid;
    grid-template-columns: repeat(4, auto) 1fr;
    gap: 25px;
    text-decoration: none;
    >div{
        display: flex;
        justify-content: center;
        gap: 25px;
    }
}

`