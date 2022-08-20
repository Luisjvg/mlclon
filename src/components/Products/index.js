import React from 'react'
import { 
  Container,
  Panel,
  Column,
  Galeria,
   } from './style'

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <img src="../../img/notebook.webp" alt="Producto"></img>
        </Galeria>
          {/* <info/> */}
        </Column>
        <Column>
          {/* <ProuctoVenta />
          <InfoVendedor />
          <Galeria /> */}
        </Column>
      </Panel>
    </Container>
  )
}
