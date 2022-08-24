import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --fondo: #1f2223;
    --black: #000000;
    --white: #ffffff;

    --text1: rgba(218, 208, 194, .9);
    --text2: rgba(0, 0, 0, .55)

    --green: #72ffda;
    --blue1: #79cfff;
    --blue2: #055ce0;
    --blue3: #52cfff;
    --blue4: #1b69cf;
    --yellow1: #938600;
    --yellow2: #fffef4;
    --gray1: #2c3031;
    --gray2: #272a2b;

    --reputacion1: #4e0000;
    --reputacion2: #553000;
    --reputacion3: #484100;
    --reputacion4: #374604;
    --reputacion5: #374604;

    --family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6{
    color: var(--text1);
    font-weight: inherit;
}
html{
    min-height: 100%;
    background-color: var(--fondo);
}
*, button, input{
    border: 0;
    background-color: none;
    font-family: var(--family);
}
`

