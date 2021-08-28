import './App.css';

function App() {
  
  const name = 'hello world'

  const handleClick = () => {
  console.log(name)
  }
  return (
    <div className="App">
    <h1>テキスト１</h1>
        <button onClick={handleClick}>あ</button>
    <h1>テキスト2</h1>
        <button onClick={() => { alert('🍣') }}>い</button>
    <h1>テキスト3</h1>
        <button onClick>iine</button>
    </div>
  );
}

export default App;
