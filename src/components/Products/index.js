import React from 'react'
import { img } from '../../img/img'
import { 
  Container,
  Panel,
  Column,
  Galeria,
  Description,
   } from './style'

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galeria>
          <img src={img.notebook} alt="Producto"></img>
          <p>
            <span class='galery-sell'>
                Nuevo | 4637 vendidos
            </span>
              <br/>
                <h2>
                Notebook HP 15-ef2126wm spruce blue 15.6", AMD Ryzen 5 5500U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 7 1920x1080px Windows 10 Home
                </h2>
              <br/>
                <span>
                <img src={img.star} alt="Estrella de puntuacion" class="galery-star"></img>
                <img src={img.star} alt="Estrella de puntuacion" class="galery-star"></img>
                <img src={img.star} alt="Estrella de puntuacion" class="galery-star"></img>
                <img src={img.star} alt="Estrella de puntuacion" class="galery-star"></img>
                <img src={img.star} alt="Estrella de puntuacion" class="galery-star"></img>
                </span>
              <br/>
              <span class="galery-betterSell">
                  MÁS VENDIDO
              </span>
              <span class="galery-OneCategory">
                  1° en Notebooks
              </span>
              <span>
              <br/>
                <span class="galery-price">$</span>
                <span class="galery-price">123.499</span>
               <br/>
                <span class="galery-fee1">en</span>
                <span class="galery-fee2">6x $ 20.583 sin interés</span>
              <br/>
              </span>
              <span class="galery-methodPay">
                Ver los medios de pago
              </span>
              <br/>
              <br/>
              <ul>
                <span>Lo que tenés que saber de este producto
                </span>
                <li>Procesador AMD Ryzen 5.</li>
                <li>Memoria RAM de 8GB.</li>
                <li>Resolución de 1920x1080 px.</li>
                <li>Es antirreflejo.</li>
                <li>Placa de video AMD Radeon RX Vega 7.</li>
                <li>Conexión wifi y bluetooth.</li>
                <li>Cuenta con 3 puertos USB y puerto HDMI.</li>
                <li>Incluye lector de tarjeta de memoria.</li>
                <li>Posee pad numérico.</li>
                <li>Modo de sonido Stereo.</li>
              </ul>
          </p>
          <div class="galery-info-buy">
            <div class="galery-info-shipping-container">
              <p class="galery-info-shipping">
                Llega gratis
                <span> mañana</span>
              </p>
              <div class="galery-info-direction">
                <a href="#">
                  <img src={img.pin}></img>
                  Dirección del comprador
                </a>
              </div>
            </div>
            <div class="galery-info-sellerInfo">
              <div class="sellerInfo-sellerName">
                Vendido por
                <a>Nombre Vendedor</a>
              </div>
              <p>MercadoLíder | 43.159 ventas</p>
              <span>Hace Factura A</span>
            </div>
            <p class="galery-info-stock">Stock disponible</p>
            <div class="galery-info-stockInfo">
               <span>Cantidad: </span>
               <span class="stockInfo-unit">1 unidad </span>
               <span class="stockInfo-quantities">(4 disponibles)
              </span>
            </div>
            <div class="galery-info-buttonBuy">
              <button class="buttonBuy-buy">Comprar ahora</button>
              <button class="buttonBuy-addCar">Agregar al carrito</button>
            </div>
            <div class="galery-info-buyInfo">
              <ul class="buyInfo-list">
                <li>
                  <span>
                    <a href='#'>Devolución gratis. </a>
                    Tenés 30 días desde que lo recibís
                  </span>
                </li>
                <li>
                  <span>
                    <a href='#'>Compra Protegida, </a>
                    recibí el producto que esperabas o te devolvemos tu dinero.
                  </span>
                </li>
                <li>
                  <span>
                    <a href='#'>Mercado Puntos. </a>
                    Sumás 907 puntos.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Galeria>
          <Info /> 
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

const Info = ()=>{
  return(
    <Description>
      <h4>Descripcion</h4>
      <br/>
      <p>
          <span>La notebook HP 15-ef2126wm es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.</span>
          <br/>
          <br/>
          <span>Pantalla con gran impacto visual
          <br/>
Su pantalla de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.</span>
          <br/>
          <br/>
          <span>Eficiencia a tu alcance
          <br/>
Su procesador AMD Ryzen 5 de 6 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.
</span>
          <br/>
          <br/>
<span>Potente disco sólido
          <br/>
El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.</span>
          <br/>
          <br/>
<span>Un procesador exclusivo para los gráficos
          <br/>
Su placa de video AMD Radeon RX Vega 7 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.</span>
          <br/>
          <br/>
<span>
Una batería que acompaña tu jornada
          <br/>
La batería de este equipo tiene una autonomía de alrededor de 9.3 horas. La duración varía según el uso, la configuración y otros factores, pero vas a poder usarla durante varias horas sin depender de los enchufes.
</span>
</p>
    </Description>
  )
}