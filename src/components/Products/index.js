import React from 'react'
import { img } from '../../img/img'
import { 
  Container,
  Panel,
  Column,
  Galeria,
  Description,
} from './style'
import {hidden} from '../../styles/Event'

export const Products = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
          <div className='galery-img-container'> 
            <figure>
              <img src={img.notebook} alt="Producto"></img>
            </figure>
          </div>
          <section>
            <div className='galery-sell-container'>
              <div className='galery-Container-media'>
                <div className='galery-sell-media-container'>
                  <span className='galery-sell'>
                      Nuevo | 4637 vendidos
                  </span>
                  <span className='galery-star'>
                        <img src={img.star} alt="Estrella de puntuacion"></img>
                        <img src={img.star} alt="Estrella de puntuacion"></img>
                        <img src={img.star} alt="Estrella de puntuacion"></img>
                        <img src={img.star} alt="Estrella de puntuacion"></img>
                        <img src={img.star} alt="Estrella de puntuacion"></img>
                  </span>
                </div>
                  <br/>
                    <h2>
                    Notebook HP 15-ef2126wm spruce blue 15. 6", AMD Ryzen 5 5500U 8GB de RAM 256GB   SSD, AMD Radeon RX Vega 7 1920x1080px   Windows 10 Home
                    </h2>
                  <br/>
                  <br/>
                  <div className='galery-betterSell-container'>
                    <span className="galery-betterSell">
                        MÁS VENDIDO
                    </span>
                    <span className="galery-OneCategory">
                        1° en Notebooks
                    </span>
                  </div>
              </div>
            </div>
            <div className='galery-img-sell'> 
                <figure>
                  <img src={img.notebook} alt="Producto"></img>
                </figure>
              </div>
              <div className='galery-price-container'>
                <span>
                  <br/>
                  <span className="galery-price">$</span>
                  <span className="galery-price">123.499</span>
                  <br/>
                  <span className="galery-fee1">en</span>
                  <span className="galery-fee2">6x $ 20.583 sin interés</span>
                  <br/>
                </span>
                <span className="galery-methodPay">
                  Ver los medios de pago
                </span>
              </div>
              <div className='galery-media-info-buy'>
                <div class="galery-media-info-buy">
                <div className="galery-info-shipping-container">
                <p className="galery-info-shipping">
                <img src={img.camion} alt='imagen de camion'></img>
                Llega gratis
                <span> mañana</span>
                </p>
                <div className="galery-info-direction">
                <a href="#">
                  <img src={img.pin}></img>
                  Dirección del comprador
                </a>
                </div>
              </div>
              <div className="galery-info-sellerInfo">
              <div className="sellerInfo-sellerName">
                Vendido por
                <a> Nombre Vendedor</a>
              </div>
              <p>MercadoLíder | 43.159 ventas</p>
              <span>Hace Factura A</span>
              </div>
              <p className="galery-info-stock">Stock disponible</p>
              <div className="galery-info-stockInfo">
               <span>Cantidad: </span>
               <span class="stockInfo-unit">1 unidad </span>
               <span class="stockInfo-quantities">(4 disponibles)
              </span>
              </div>
              <div className="galery-info-buttonBuy">
              <button className="buttonBuy-buy">Comprar ahora</button><br/>
              <button className="buttonBuy-addCar">
                <span>Agregar al carrito</span></button>
              </div>
              <div className="galery-info-buyInfo">
              <ul className="buyInfo-list">
                <li>
                  <img src={img.flecha}></img>
                </li>
                <li>
                  <img src={img.escudo}></img>
                </li>
                <li>
                  <img src={img.trofeo}></img>
                </li>
                <li>
                  <img src={img.insignia}></img>
                </li>
              </ul>
              <ul className="buyInfo-list">
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
                <li>
                  <span>
                    12 meses de garantía de fábrica.
                  </span>
                </li>
              </ul>
              </div>
            </div>
                </div>
                <div className='galery-media-optionPrice'>
                    <div className='galery-optionPrice-container'>
                      <h2>Otras opciones de compra</h2>
                      <ul className='galery-optionPrice-items'>
                        <li>
                          <div>
                            <p>$ 182.999
                            <span>Cuotas sin interés</span>
                            <button type='button' onClick={hidden} className="galery-optionPrice-button">bajar</button>
                            </p>
                          </div>
                          <ul className='galery-optionPay'>
                            <li>
                              <p className='item-optionPay'>Pagá en 6 cuotas sin interés
                                <br/>
                                <p>
                                  Llega gratis el miércoles
                                </p>
                              </p>
                            </li>
                            <li className='item-seller'>
                              <p>
                                Vendido por 
                                <a href="#">Nombre del vendedor</a>
                              </p>
                              <p>
                                281 ventas
                              </p>
                              <span>Hace Factura A</span>
                            </li>
                            <li>
                              <button type='button'>
                                <span>Comprar ahora</span>
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                <div className='galery-info-container'>
                <br/>
                <br/>
                <div className='galery-info'>
                <p>
                      Lo que tenés que saber de este producto
                </p>
                  <ol>
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
                  </ol>
                </div>
                <span className='galery-features'>
                  Ver características
                </span>
                <div className='galery-others'>
                  <span>
                    Opciones de compra:<br /><br/>
                    <p>
                      11 productos nuevos desde 165.999
                    </p>
                  </span>
                </div>
                </div>
          </section>
          <div class="galery-info-buy">
            <div className='galery-info-buy-container'>
              <div className="galery-info-shipping-container">
                <p className="galery-info-shipping">
                <img src={img.camion} alt='imagen de camion'></img>
                Llega gratis
                <span> mañana</span>
                </p>
                <div className="galery-info-direction">
                <a href="#">
                  <img src={img.pin}></img>
                  Dirección del comprador
                </a>
                </div>
              </div>
              <div className="galery-info-sellerInfo">
              <div className="sellerInfo-sellerName">
                Vendido por
                <a> Nombre Vendedor</a>
              </div>
              <p>MercadoLíder | 43.159 ventas</p>
              <span>Hace Factura A</span>
              </div>
              <p className="galery-info-stock">Stock disponible</p>
              <div className="galery-info-stockInfo">
               <span>Cantidad: </span>
               <span class="stockInfo-unit">1 unidad </span>
               <span class="stockInfo-quantities">(4 disponibles)
              </span>
              </div>
              <div className="galery-info-buttonBuy">
              <button className="buttonBuy-buy">Comprar ahora</button><br/>
              <button className="buttonBuy-addCar">
                <span>Agregar al carrito</span></button>
              </div>
              <div className="galery-info-buyInfo">
              <ul className="buyInfo-list">
                <li>
                  <img src={img.flecha}></img>
                </li>
                <li>
                  <img src={img.escudo}></img>
                </li>
                <li>
                  <img src={img.trofeo}></img>
                </li>
                <li>
                  <img src={img.insignia}></img>
                </li>
              </ul>
              <ul className="buyInfo-list">
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
                <li>
                  <span>
                    12 meses de garantía de fábrica.
                  </span>
                </li>
              </ul>
              </div>
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