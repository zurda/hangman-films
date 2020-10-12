import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  color: #fff;
  background-color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding: 16px 32px;
  text-align: center;
`

export const Description = styled.p`
  margin: 0;
  & a {
    color: inherit;
  }
`