import React from 'react'
import { Container, Row } from './style'

export const Hero = () => {
  return (
    <Container>
      <Row>
        <div className="hero-row-container">
          <div className="hero-nav-container">
            <ul className="nav-container1">
              <li>También puede interesarte: </li>
              <li>laptop notebook</li>
              <li>notebook samsung</li>
              <li>sony vaio</li>
              <li>computadora notebook</li>
              <li>lenovo notebook</li>
              <li>lenovo s145</li>
            </ul>
          </div>
          <div className="hero-nav-container">
            <ul className="nav-container2">
              <li>Volver al listado</li>
              <li>Computación</li>
              <li>Laptops y Accesorios</li>
              <li>Notebooks</li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>Compartir</li>
            <li>Vender uno igual</li>
          </ul>
        </div>
      </Row>
    </Container>
  )
}
