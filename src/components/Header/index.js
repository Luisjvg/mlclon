import React from 'react'
import { Container, Wrapper } from './style'
import { img } from '../../img/img'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={img.logo} alt='Logo_Ml' />
      </Wrapper>
    </Container>
  )
}
