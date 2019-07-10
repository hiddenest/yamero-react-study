import React from 'react';

import Button from './Button';
import Dropdown from './Dropdown';

import './Input.css';

function QuizView({
  currentQuiz,
  currentAnswer,
  handleClickChoice,
  handleClickPrev,
  handleClickNext,
  currentPage,
}) {
  function handleInputChange(event) {
    handleClickChoice(event.target.value);
  }

  return (
    <>
      <header className='App-header'>
        <h1>
          {currentQuiz.question}
        </h1>
      </header>
      <section className='App-content'>
        {currentQuiz.useInput && (
          <input
            className='input'
            placeholder='정답을 입력하세요'
            onChange={handleInputChange}
          />
        )}
        {currentQuiz.choices && (
          <Dropdown
            selected={currentAnswer}
            list={currentQuiz.choices}
            onChange={handleClickChoice}
          />
        )}
      </section>
      <nav className='App-navigator'>
        <div className='column'>
          <Button
            className='btn-sub'
            onClick={handleClickPrev}
            disabled={currentPage === 0}
          >
            이전으로
          </Button>
        </div>
        <div className='column'>
          <Button
            className='btn-key'
            onClick={handleClickNext}
            disabled={!currentAnswer}
          >
            다음으로
          </Button>
        </div>
      </nav>
    </>
  )
}

export default QuizView;
