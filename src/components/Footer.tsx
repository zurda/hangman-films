import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'

const Container = styled.footer`
  width: 100%;
  color: ${colours.diamond};
  background-color: ${colours.pictonBlue};
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 16px 32px;
  text-align: center;
`

const Description = styled.p`
  margin: 0;
  & a {
    color: inherit;
  }
`

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const Footer: FunctionComponent<IProps> = ({ children }) => (
  <Container>
    <Description>
      {children}
    </Description>
  </Container>
)

export default Footer
