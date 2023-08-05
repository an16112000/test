import React, {useEffect, useState} from 'react';

function QuerryFunction({ onClick, children }) {
    const [count, setCount] = useState(0);
  const [text, setText]= useState('');
  const [array, setArray] = useState([]);

  useEffect(
    () => {
         const temp = array.map(
          () => setCount(prev => prev + 1)
          );
          return temp;

    }, [array]
  )

    return (
        <div>
            <input value={text} onChange={(e)=> setText(e.target.value)} />
            <button
                onClick={() => setArray(prev => [...prev, temp])}
            >
                Click Here!
            </button>
        </div>
    )
}

export default QuerryFunction