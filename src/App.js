import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import './Button.css';
import './Dropdown.css';

function App() {
  const [blink, setBlink] = useState(false);
  const [list] = useState(['ㅁㄴㅇㄹ', 4, '안녕하세요', '으아아', '띠용']);

  function handleClickButton() {
    setBlink(!blink);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='dropdown'>
          <button
            className='btn btn-sub'
            onClick={handleClickButton}
          >
            짜잔
          </button>
          {blink === true && (
            <ul className='menu-md'>
              {list.map((item) => (
                <li>
                  <button>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
