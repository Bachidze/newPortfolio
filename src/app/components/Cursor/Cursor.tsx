'use client'
import React from 'react'
import useMouseMove from "@/hooks/useMouseMove";
import { useEffect, useState } from "react";
export default function Cursor() {
    const position = useMouseMove();
    const [clicked, setClicked] = useState(1);
  
    useEffect(() => {
      const click = () => {
        setClicked(0.4);
      };
  
      const click2 = () => {
        setClicked(1);
      };
  
      window.addEventListener('mousedown', click);
      window.addEventListener('mousemove', click2);
  
      return () => {
        window.removeEventListener('mousedown', click);
        window.removeEventListener('mousemove', click2);
      };
    }, []);
  return (
    <>
     <div
        onKeyDown={() => {
          setClicked(0.4);
        }}
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          position: 'fixed',
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: 'pointer',
          pointerEvents: 'none',
          transform: `scale(${clicked}) translate(-50%, -50%)`,
          transition:'0.1s',
          zIndex:'999999',
          border:'2px solid black'
        }}
      ></div>
    </>
  )
}
