import React, { useState } from 'react'


function ResetCount() {
    const [count, setCount] = useState(0)
  function decrement(){
    if (count>0) {
        setCount(count-1)
    }
  }
  function increment(){
    setCount(count+1)
  }
    return (
        <div className='resetCount'>
            <p>{count}</p>
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default ResetCount