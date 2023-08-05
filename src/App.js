import QuerryFunction from './QuerryFunction';
import './App.css';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState([{data: 1}])
  let count = 1;
  console.log(count);
  console.log(history);
  return (
    <div>
      <button 
      onClick={()=>setHistory(prev => {
        const newHistory = [...prev];
        newHistory.splice(prev.length-1,1)
        return newHistory;
        })}>Remove here</button>
      <button onClick={()=>setHistory(prev => {
        count++
        const newHistory = [...prev, {data: count}];
        return newHistory;
      })}>Add here</button>
    </div>
  );
}


export default App;
