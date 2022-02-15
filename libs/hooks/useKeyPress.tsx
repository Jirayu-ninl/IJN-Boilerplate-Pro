import React, { useState, useEffect } from 'react';

// Hook
export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
}

// *! Usage
function App() {
    // Call our hook for each key that we'd like to monitor
    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');
  
    return (
      <div>
        <div>h, s, r, f</div>
        <div>
          {happyPress && '😊'}
          {sadPress && '😢'}
          {robotPress && '🤖'}
          {foxPress && '🦊'}
        </div>
      </div>
    );
  }