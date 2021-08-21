import './App.css';

function App() {
  
  const name = 'hello world'

  const handleClick = () => {
  console.log(name)
  }
  return (
    <div className="App">
        <button onClick={handleClick}>あ</button>
    </div>
  );
}

export default App;
