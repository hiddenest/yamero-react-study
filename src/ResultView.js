import React from 'react';

import Button from './Button';

function getMent(percent) {
  if (percent < 20) {
    return '저를 너무 모르시네요... 친해지길 바래... 😇😇😇';
  }

  if (percent < 40) {
    return '가까운듯 하면서도 너무나도 먼 당신 📏';
  }

  if (percent < 60) {
    return '⚖️ 찍은건지 아닌건지는 모르겠지만 중간에 걸쳐있어요 ⚖️';
  }

  if (percent < 80) {
    return '생각보다 저를 많아 아시네요! 👀 🤔';
  }

  return '당신이 말로만 듣던 도플갱어입니까? 🤦‍♂️🤦‍♀️';
}

function ResultView({
  quiz,
  sheet,
  handleClickHome,
}) {
  const totalAnswer = quiz.filter((item, index) => item.answer === sheet[index]);
  const percent = (totalAnswer.length / quiz.length) * 100;

  return (
    <>
      <header className='App-header'>
        <h1>
          {totalAnswer.length}개 맞췄어용!
        </h1>
        <p>
          {getMent(percent)}
        </p>
      </header>
      <section className='App-content'>
        <Button
          className='btn-key'
          onClick={handleClickHome}
        >
          다시하기
        </Button>
      </section>
    </>
  )
}

export default ResultView;
