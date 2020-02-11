import React from 'react'
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
  isHinted: boolean
  onHint: () => void
  counter: number
  poster: string
}

export const PosterHint = ({ isHinted, onHint, counter, poster }: IHint) => (
  <>
    {!isHinted && counter > 2 &&
      (<>
        <RoundButton onClick={onHint}>Hint</RoundButton>
        <Text>This will cost you two guesses!</Text>
      </>)}
    {isHinted && counter > 0 &&
      (<HintContainer imgSrc={`http://image.tmdb.org/t/p/w154${poster}`} />)
    }
  </>
)

