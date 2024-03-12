'use client'
import React, { useEffect, useState } from 'react'

export default function useMouseMove() {
    const [position, setPosition] = useState({x:0, y:0})

    const handleMouse = (e: MouseEvent) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouse)
        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    }, [])

    console.log(position)
    return position
}
