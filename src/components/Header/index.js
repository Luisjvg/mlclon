import React from 'react'
import { Container, Wrapper, Row } from './style'
import { img } from '../../img/img'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={img.logo} alt='Logo_Ml' />
      </Wrapper>
      <Row>
        <img src={img.domicilio}></img>
        <div className='nav-category'>
          <ul>
            <li>Categoría</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda</li>
          </ul>
        </div>
        <div className='nav-login'>
          <ul>
            <li>Creá tu cuenta</li>
            <li>Ingresá</li>
            <li>Mis compras</li>
          </ul>
        </div>
      </Row>
    </Container>
  )
}
