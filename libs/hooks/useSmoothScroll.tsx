import React, { useState, useRef, useEffect } from "react";
import windowSize from "./useWindowSize";
import { css } from "emotion";

export default function useSmoothScroll({ children }) {
  const appContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  `;

  const size = windowSize();

  const refApp = useRef();
  const refScroll = useRef();

  const scrollConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      refScroll.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    scrollConfig.current = window.scrollY;
    scrollConfig.previous +=
      (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease;
    scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
    const difference = scrollConfig.current - scrollConfig.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    refScroll.current.style.transform = `translate3d(0, -${scrollConfig.rounded}px, 0) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  console.log(size);
  return (
    <div ref={refApp} className={appContainer}>
      <div ref={refScroll}>
        {children}
      </div>
    </div>
  );
}
