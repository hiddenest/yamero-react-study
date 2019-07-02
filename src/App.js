import React, { useState } from 'react';

import Button from './Button';
import Dropdown from './Dropdown';

import quiz from './quiz';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const currentQuiz = quiz[currentPage];

  function handleClickPrev() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {currentQuiz.question}
        </h1>
      </header>
      <section className='App-content'>
        <Dropdown
          list={currentQuiz.choices}
        />
      </section>
      <nav className='App-navigator'>
        <div className='column'>
          <Button
            className='btn-sub'
            onClick={handleClickPrev}
          >
            이전으로
          </Button>
        </div>
        <div className='column'>
          <Button
            className='btn-key'
            onClick={handleClickNext}
          >
            다음으로
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default App;
