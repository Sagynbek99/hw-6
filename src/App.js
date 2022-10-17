import './App.css';
import { useState } from 'react';

function App() {

const [count, setCount] = useState(0)

function plusHandler() {
  setCount(count +1)
}

function minusHandler() {
  if(count > 0)
  setCount(count - 1)
}

  
  return (
    <div className="App">
      <div>
        <h1 className='container'> {count}</h1>
        <div className='bat'>
      <button className='btn' onClick={plusHandler}>Increace</button>
      <button className='btn' onClick={minusHandler}>Degreace</button>
      </div>
      
      </div>
    </div>
  );
}

export default App;
