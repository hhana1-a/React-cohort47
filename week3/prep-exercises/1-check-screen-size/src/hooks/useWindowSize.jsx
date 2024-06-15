import { useState, useEffect, useDebugValue } from "react"

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}

const useScreenType = (minWidth, maxWidth) => {
  const { width } = useWindowSize()
  const isMatch = width >= minWidth && width <= maxWidth
  useDebugValue(`Screen: ${minWidth}-${maxWidth}`, () =>
    isMatch ? "Match" : "No Match"
  )
  return isMatch
}

export { useWindowSize, useScreenType }