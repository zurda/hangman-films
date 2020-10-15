import React, { useState } from 'react'
import { Button } from './styles/GameBoard'

interface IRevealHint {
    counter: number
    releaseDate: string
    setCounter: (n: number) => void
  }

const ReleaseHint = ({ counter, releaseDate, setCounter }: IRevealHint) => {
    const [isRevealed, setIsRevealed] = useState<boolean>(false)
  
    const onRevealClick = () => {
      setCounter(counter - 3)
      setIsRevealed(true)
    }
  console.log(releaseDate)
    return (
      <>
        {!isRevealed && counter >= 3 &&
          (<>
            <Button onClick={onRevealClick}>Reveal release date</ Button>
            <p>This will cost you three guesses!</p>
          </>)}
        {(isRevealed || counter < 1) &&
          (<h3>Release Date: {releaseDate}</h3>)
        }
      </>
    )
  }
  
  export default ReleaseHint