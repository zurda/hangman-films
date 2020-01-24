import styled from '@emotion/styled'



interface IPosterProps {
  imgSrc: string
}

const HintContainer = styled.div<IPosterProps>`
  background-image: url(${props => props.imgSrc});
  height: 50px;
  width: 50px;
  background-position: center right;
`

export default HintContainer
