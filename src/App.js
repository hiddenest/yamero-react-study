import React, { useState } from 'react';

import QuizView from './QuizView';
import ResultView from './ResultView';

import quiz from './quiz';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [sheet, setSheet] = useState([]);

  const currentQuiz = quiz[currentPage];
  const currentAnswer = sheet[currentPage];

  function handleClickPrev() {
    setCurrentPage(currentPage - 1);
  }

  function handleClickNext() {
    setCurrentPage(currentPage + 1);
  }

  function handleClickChoice(item) {
    const updatedSheet = [...sheet];

    updatedSheet[currentPage] = item;
    setSheet(updatedSheet);
  }

  function handleClickHome() {
    setCurrentPage(0);
    setSheet([]);
  }

  const percent = (currentPage / quiz.length) * 100;

  return (
    <div className='App'>
      <div
        className='App-progressBar'
        style={{
          width: `${percent}%`,
        }}
      />
      {currentPage !== quiz.length ? (
        <QuizView
          currentQuiz={currentQuiz}
          currentAnswer={currentAnswer}
          handleClickChoice={handleClickChoice}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
          currentPage={currentPage}
        />
      ) : (
        <ResultView
          quiz={quiz}
          sheet={sheet}
          handleClickHome={handleClickHome}
        />
      )}
    </div>
  );
}

export default App;
