import React, { useState } from 'react'
import styled from '@emotion/styled'
import { RoundButton } from './GameControllers'
import { Text } from '../style/shared'

interface IPosterProps {
  imgSrc: string
}

const HintContainer = styled.div<IPosterProps>`
  background-image: url(${props => props.imgSrc});
  height: 50px;
  width: 50px;
  background-position: center right;
`

interface IHint {
  counter: number
  poster: string
  setCounter: (n: number) => void
}

const PosterHint = ({ counter, poster, setCounter }: IHint) => {
  const [isHinted, setIsHinted] = useState<boolean>(false)

  const onHintClick = () => {
    setCounter(counter - 2)
    setIsHinted(true)
  }

  return (
    <>
      {!isHinted && counter > 2 &&
        (<>
          <RoundButton onClick={onHintClick}>Hint</RoundButton>
          <Text>This will cost you two guesses!</Text>
        </>)}
      {isHinted && counter > 0 &&
        (<HintContainer imgSrc={`http://image.tmdb.org/t/p/w154${poster}`} />)
      }
    </>
  )
}

export default PosterHint