import React from 'react'
import { Container, Row } from './style'

export const Hero = () => {
  return (
    <Container>
      <Row>
        <div class="hero-row-container">
          <div class="hero-nav-container">
            <ul class="nav-container1">
              <li>También puede interesarte: </li>
              <li>laptop notebook</li>
              <li>notebook samsung</li>
              <li>sony vaio</li>
              <li>computadora notebook</li>
              <li>lenovo notebook</li>
              <li>lenovo s145</li>
            </ul>
          </div>
          <div class="hero-nav-container">
            <ul class="nav-container2">
              <li>Volver al listado</li>
              <li>Computación</li>
              <li>Laptops y Accesorios</li>
              <li>Notebooks</li>
            </ul>
          </div>
        </div>
        <div class="nav-right">
          <ul>
            <li>Compartir</li>
            <li>Vender uno igual</li>
          </ul>
        </div>
      </Row>
    </Container>
  )
}
