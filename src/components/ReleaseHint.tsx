import React, { useState } from 'react'
import { ReleaseHintStyled } from './styles/ReleaseHint'
import { Button } from './styles/GameBoard'

interface IRevealHint {
  counter: number
  releaseYear: string
  gameWon: boolean
  setCounter: (n: number) => void
}

const ReleaseHint = ({ counter, releaseYear, setCounter, gameWon }: IRevealHint) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false)

  const onRevealClick = () => {
    setCounter(counter - 3)
    setIsRevealed(true)
  }

  return (
    <ReleaseHintStyled>
      {!isRevealed && counter > 3 &&
        (<>
          <Button onClick={onRevealClick}>Reveal Release Year</ Button>
          <p>This will cost you three guesses!</p>
        </>)}
      {((isRevealed || counter < 1) || gameWon) &&
        (<h3>Release Year: {releaseYear}</h3>)
      }
    </ReleaseHintStyled>
  )
}

export default ReleaseHint