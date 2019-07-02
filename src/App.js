import React, { useState } from 'react';

import Dropdown from './Dropdown';

import './App.css';

function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();

  function handleClickItemA(item) {
    setA(item);
  }

  function handleClickItemB(item) {
    setB(item);
  }

  // 값이 짠짜잔 바뀜
  console.error('testing', a, b);

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown
          list={[1, '가나다', '찬희', 'asdf']}
          onChange={handleClickItemA}
        />
        <Dropdown
          list={[3,4,5,6,7]}
          onChange={handleClickItemB}
        />
      </header>
    </div>
  );
}

export default App;
