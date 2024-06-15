import React from "react"
import { useScreenType } from "../hooks/useWindowSize"
import small from "../assets/small.jpg"
import medium from "../assets/medium.jpg"
import large from "../assets/large.jpg"

const AvatarDisplay = () => {
  const isSmallScreen = useScreenType(0, 699)
  const isMediumScreen = useScreenType(700, 999)
  const isLargeScreen = useScreenType(1000, Infinity)

  return (
    <div>
      {isSmallScreen && (
        <div>
          <p>Avatar: Small Screen</p>
          <img src={small} alt='Small Avatar' />
        </div>
      )}
      {isMediumScreen && (
        <div>
          <p>Avatar: Medium Screen</p>
          <img src={medium} alt='Medium Avatar' />
        </div>
      )}
      {isLargeScreen && (
        <div>
          <p>Avatar: Large Screen</p>
          <img src={large} alt='Large Avatar' />
        </div>
      )}
    </div>
  )
}

export default AvatarDisplay