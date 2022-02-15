import React, { useState, useLayoutEffect } from 'react';

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
   const originalStyle = window.getComputedStyle(document.body).overflow;  
   document.body.style.overflow = 'hidden';
   return () => document.body.style.overflow = originalStyle;
   }, []);
}

// *! Usage
function App(){
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
      <div>
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
        {/* <Content /> */}
        {modalOpen && (
          <Modal
            title="Try scrolling"
            content="I bet you you can't! Muahahaha 😈"
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    );
  }

  function Modal({ title, content, onClose }){
    useLockBodyScroll();
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  }