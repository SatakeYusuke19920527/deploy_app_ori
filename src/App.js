import './App.css';
import React from 'react';
import { useState }from 'react';

function App() {
  const [count, setCount] = useState(0)
  const hello = 'hello world'
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [error, setError] = useState('')
  const [myhand,setMyhand] = useState('')
  const [cpuhand,setCpuhand] = useState('')
  const guu = 'kobusi👊'
  const tyoo = 'hasami✂️'
  const paa = 'tenohira🙋‍'
  const random = Math.floor( Math.random() * 3 );
 
    console.log( random );

  const handleClick = () => {
    console.log(hello)
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

  const aaa = () => {
    if (text === ""){
      setMessage(text)
      setError("文字をenterせよ")
    }else{
      setMessage(text)
      setError("")
    }}

    console.log(error) 

    const eClick = () => {
      console.log(guu)
      setMyhand(guu)
    }

    const oClick = () => {
      console.log(tyoo)
      setMyhand(tyoo)
    }

    const kaClick = () => {
      console.log(paa)
      setMyhand(paa)
    }
       
    const kiClick = () => {
      console.log(guu)
      setCpuhand(guu)
    }

    const kuClick = () => {
      console.log(tyoo)
      setCpuhand(tyoo)
    }

    const keClick = () => {
      console.log(paa)
      setCpuhand(paa)
    }

  return (
    <div className="App">
    <h1>テキスト1</h1>
        <button onClick={handleClick}>あ</button>
    <h1>テキスト2</h1>
        <button onClick={() => { alert('🍣') }}>い</button>
  <h1>テキスト3</h1>
  <p>{count}</p>
  <button onClick={aClick}>eene</button>
  <button onClick={iClick}>不良</button>
  <button onClick={uClick}>react</button>
  <h1>テキスト4・テキスト5</h1>
  <label>にゅ</label>
  <input type="text" onChange={(e)=>handleText(e.target.value)} />
  <button onClick={aaa} type="button" value="Submit">btton</button>
  <div style={{color : "red"}}>{error}</div>
  {message}
  <h1>テキスト6</h1>
  <button onClick={eClick}>kobusi👊</button>
  <button onClick={oClick}>hasami✂️</button>
  <button onClick={kaClick}>tenohira🙋‍</button>
  <p>あなたの手:{myhand}</p>
  <p>npcの手:{cpuhand}</p>
          {/* <ActionButton action = {guu} state = {this.state} setParentState={newState=>this.setState(newState)}></ActionButton> */}
          {/* <ActionButton action = {paa} state = {this.state} setParentState={newState=>this.setState(newState)}></ActionButton> */}
          {/* <ActionButton action = {tyoo} state = {this.state} setParentState={newState=>this.setState(newState)}></ActionButton> */}
  {/* class ActionButton extends Component { */}
  {/* _onPressButton(action) { */}
    {/* }} */}
</div>
)
    
  }
export default App;
