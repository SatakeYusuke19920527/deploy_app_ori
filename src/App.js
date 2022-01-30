import './App.css';
import React,{useEffect} from 'react';
import { useState }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentsA from './ComponentsA';
import ComponentsB from './ComponentsB';
import  {Table}  from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)
  const hello = 'hello world'
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [error, setError] = useState('')
  const [myhand,setMyhand] = useState('')
  const [cpuhand,setCpuhand] = useState('')
  const [shoyu,setShoyu] = useState('')
  const [quiitaAPIData,setQuiitaAPIData] = useState([])
  const guu = 'kobusi👊'
  const tyoo = 'hasami✂️'
  const paa = 'tenohira🙋‍'
  const win = '勝ち'
  const lose = '負け'
  const draw = '引き分け'
  const [gameNo,setGameNo] = useState(0)

  console.log(gameNo, "gameNo")

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    if(myhand === "") return
    suzuki()
  },[gameNo])

  const getData = async () => {
    const res = await axios.get('https://qiita.com/api/v2/items')
    setQuiitaAPIData(res.data)

  console.log(quiitaAPIData, 'check ++++++++++')
  console.log(res.data, 'check======')
    }

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

    const eClick = () => {
      console.log(guu)
      setMyhand(guu)
      decidcpuhand(guu)
      setGameNo(gameNo + 1)
    }

    const oClick = () => {
      console.log(tyoo)
      setMyhand(tyoo)
      decidcpuhand(tyoo)
      setGameNo(gameNo + 1)
    }

    const kaClick = () => {
      console.log(paa)
      setMyhand(paa)
      decidcpuhand(paa)
      setGameNo(gameNo + 1)
    }

    const decidcpuhand = () => {
      const random = Math.floor( Math.random() * 3 );
      if(random===0){
        setCpuhand(guu)
      }else if (random===1){
        setCpuhand(tyoo)
      }else if (random===2){
        setCpuhand(paa)
    }}

    const suzuki = () => {
    if(myhand === cpuhand) {
      setShoyu(draw)
      }else if(myhand === guu && cpuhand === tyoo){
        setShoyu(win)
      }else if(myhand === guu && cpuhand === paa){
        setShoyu(lose)
      }else if(myhand === tyoo && cpuhand === paa){
        setShoyu(win)
      }else if(myhand === tyoo && cpuhand === tyoo){
        setShoyu(lose)
      }else if(myhand === paa && cpuhand === guu){
        setShoyu(win)
      }else if(myhand === paa && cpuhand === tyoo){
        setShoyu(lose)
    }
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
  <h1>テキスト6・テキスト7</h1>
  <button onClick={eClick}>kobusi👊</button>
  <button onClick={oClick}>hasami✂️</button>
  <button onClick={kaClick}>tenohira🙋‍</button>
  <p>あなたの手:{myhand}</p>
  <p>npcの手:{cpuhand}</p>
  <p>ジャッジ:{shoyu}</p>
  <h1>テキスト8・9</h1>
    {quiitaAPIData && quiitaAPIData.map((q,index) => {
      return (
        <div key={index}>
        <table>
        <thead>
          <tr>
            <th>title</th><th>url</th>
          </tr>
          <tr>
            <td>       <a href={q.url}><h4>{q.title}</h4></a></td>
            <th>        <a href={q.url}><h4>{q.url}</h4></a></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
          </div>
      )})}
  <h1>テキスト10</h1>
  <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ComponentsA />} />　
          <Route exact path="/ComponentsB" element={<ComponentsB />}  />
        </Routes>
      </BrowserRouter>
</div>
)
    
  }
export default App;
