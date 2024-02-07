import React, { useState } from 'react'


function UseStateItem() {
    const [item, setItem] = useState<number[]>([])

    function addCount() {
        setItem([...item ,item.length+1])
    }
    return (
        <div>
            <button onClick={addCount}>Add item</button>
            <ul>{item.length > 0 && item.map(num=> <li key={num}>Item {num}</li>)}</ul>
        </div>
    )
}

export default UseStateItem
