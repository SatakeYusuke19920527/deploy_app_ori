import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const name = 'hello world'
  const [text,setText] = useState()

  const handleClick = () => {
    console.log(name)
  }

  const aClick = () => {
    setCount(count + 1)
  }

  const iClick = () => {
    setCount(count - 1)
  }

  const uClick = () => {
    setCount(0)
  }

  const handleText = (str) => {
    setText(str)
  }
    
  return (
    <div className="App">
    <h1>テキスト１</h1>
        <button onClick={handleClick}>あ</button>
    <h1>テキスト2</h1>
        <button onClick={() => { alert('🍣') }}>い</button>
  <h1>テキスト3</h1>
  <p>{count}</p>
  <button onClick={aClick}>eene</button>
  <button onClick={iClick}>不良</button>
  <button onClick={uClick}>react</button>
  <h1>テキスト4</h1>
  <label>
    にゅ
  </label>
  <input type="text" onChange={(e)=>handleText(e.target.value)} />
  <button onClick={handleText} type="button" value="Submit">
  btton
  </button>
  {text}
</div>
)
    }

export default App;
