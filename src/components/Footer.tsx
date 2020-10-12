import React, { ReactElement } from 'react'
import { Description, Container } from './styles/Footer';

interface IFooter {
  children: ReactElement<any>
}

const Footer = ({ children }: IFooter) => (
  <Container>
    <Description>
      {children}
    </Description>
  </Container>
)

export default Footer
