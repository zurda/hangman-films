import React, { useState } from 'react'
import { Button } from './styles/GameBoard'

interface IRevealHint {
    counter: number
    releaseYear: string
    setCounter: (n: number) => void
  }

const ReleaseHint = ({ counter, releaseYear, setCounter }: IRevealHint) => {
    const [isRevealed, setIsRevealed] = useState<boolean>(false)
  
    const onRevealClick = () => {
      setCounter(counter - 3)
      setIsRevealed(true)
    }

    return (
      <>
        {!isRevealed && counter >= 3 &&
          (<>
            <Button onClick={onRevealClick}>Reveal Release Year</ Button>
            <p>This will cost you three guesses!</p>
          </>)}
        {(isRevealed || counter < 1) &&
          (<h3>Release Year: {releaseYear}</h3>)
        }
      </>
    )
  }
  
  export default ReleaseHint