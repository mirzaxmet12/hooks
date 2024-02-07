import React, { useEffect, useState } from 'react'

function UseEffectPosition() {
    const [position, setPosition] = useState<{ x: number, y: number }>(Object)
    const [count, setCount] = useState(0)
    useEffect(() => {
        window.addEventListener('mousemove', MouseMove);
        return () => {
            window.removeEventListener('mousemove', MouseMove)
        }
    }, [setCount])
    function MouseMove(e: MouseEvent) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    console.log('render');
    function handleCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleCount }>Click me</button>
            <p>X position: {position.x}</p>
            <p> Y position: {position.y}</p>
        </div>
    )
}
export default UseEffectPosition
