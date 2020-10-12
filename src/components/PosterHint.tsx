import React, { useState } from 'react'
import { HintContainer } from './styles/PosterHint'

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
          <button onClick={onHintClick}>Hint</button>
          <p>This will cost you two guesses!</p>
        </>)}
      {isHinted && counter > 0 &&
        (<HintContainer imgSrc={`http://image.tmdb.org/t/p/w154${poster}`} />)
      }
    </>
  )
}

export default PosterHint