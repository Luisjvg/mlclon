import React from "react";
import { Header } from '../Header/index'
import { Hero } from '../Hero/index'
import { Products } from '../Products/index'
import { 
    Container,
    Wrapper
 } from "./styles"


export const Layout = () =>{
    return (
        <Container>
            <Header />
            <Wrapper />
                <Hero />
                <Products />
            <Wrapper />
        </Container>
    )
}

