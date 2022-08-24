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
              <span>
                  MÁS VENDIDO 1° en Notebooks
              </span>
              <span>
              <br/>
                Precio <br/>
                cuotas
              <br/>
              </span>
              <span>
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