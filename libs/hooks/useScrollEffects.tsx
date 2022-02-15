import { useRef, useEffect } from 'react'
import useWindowSize from './useWindowSize'

export default function useScrollEffects({ children }) {
  const size = useWindowSize()
  const ContentContainer = useRef()
  const ContentInner = useRef()
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // **? Run scrollrender once page is loaded.
  useEffect(() => {
    setBodyHeight()
    requestAnimationFrame(() => skewScrolling())
  })

  // **? set the height of the body.
  // useEffect(() => {
  //   setBodyHeight()
  // }, [size.height])

  // **? Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      ContentInner.current.getBoundingClientRect().height
    }px`
  }

  // **?  Scrolling
  const skewScrolling = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5
    ContentInner.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`
    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <div ref={ContentContainer}>
      <div ref={ContentInner}>{children}</div>
    </div>
  )
}
