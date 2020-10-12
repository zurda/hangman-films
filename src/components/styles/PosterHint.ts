import styled from 'styled-components';

interface IPosterProps {
  imgSrc: string
}

export const HintContainer = styled.div<IPosterProps>`
  background-image: url(${props => props.imgSrc});
  height: 50px;
  width: 50px;
  background-position: center right;
`