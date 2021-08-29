import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const name = 'hello world'

  const handleClick = () => {
    setCount(count + 1)
    console.log(name)
  }

  return (
    <div className="App">
    <h1>テキスト１</h1>
        <button onClick={handleClick}>あ</button>
    <h1>テキスト2</h1>
        <button onClick={() => { alert('🍣') }}>い</button>
  <h1>テキスト3</h1>
  <p>{count}</p>
  <button onClick={handleClick}>eene</button>
</div>
)
}

export default App;
