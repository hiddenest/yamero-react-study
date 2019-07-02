import React, { useState, useRef, useEffect } from 'react';

import Button from './Button';

import './Dropdown.css';

function Dropdown({ list, onChange }) {
  const dropdown = useRef();
  const [blink, setBlink] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function handleClickButton(event) {
    setBlink(!blink);
  }

  function handleClickItem(item) {
    setSelectedItem(item); // 선택한 값 업데이트
    setBlink(false); // 목록 닫기
    onChange(item); // 바꾸고자 하는 값을 위에 넘겨주기
  }

  function handleClickDocument(event) {
    // 현재의(current) 드롭다운(dropdown)이 이벤트가 일어난 위치(event.target) 위에 있니?
    if (!dropdown.current.contains(event.target)) {
      setBlink(false);
    }
  }

  // 1. 상태(데이터) 업데이트되었을 때 = effect
  // 2. 컴포넌트가 생겨났을 때 = effect
  // 3. 컴포넌트가 사라지기 직전 = effect
  useEffect(() => {
    // 컴포넌트가 생겨났을 때, 상태(데이터) 업데이트되었을 때
    document.addEventListener('click', handleClickDocument);

    // 컴포넌트가 사라지기 직전
    return () => {
      document.removeEventListener('click', handleClickDocument);
    };
  });

  return (
    <div ref={dropdown} className='dropdown'>
      <Button
        className='btn-sub'
        onClick={handleClickButton}
      >
        {selectedItem || '짜잔'}
      </Button>
      {blink === true && (
        <ul className='menu-md'>
          {list.map((item) => (
            <li key={item}>
              <button
                className={selectedItem === item ? 'on' : ''}
                onClick={() => handleClickItem(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
