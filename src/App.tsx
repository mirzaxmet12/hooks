import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date())
  // useEffect(() => {
  //   const interval= setInterval(() => {
  //   }, 1000)
  //   return()=>clearInterval(interval)
  // },[]);

  setInterval(() => {
    setDate(new Date());
  }, 1000)

  return (
    <div className="App">
        <h2>The time is</h2>
        <p>{date.toLocaleTimeString()} AM</p>
    </div>
  );
}

export default App;
