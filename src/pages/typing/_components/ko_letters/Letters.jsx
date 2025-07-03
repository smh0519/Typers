import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import Scorebord from '../../../../components/scoreBord/Scorebord';

const Letters = () => {
  const typingList = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅓ', 'ㅏ', 'ㅣ', ';'];
  const [viewTypingList, setViewTypingList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputHistory, setInputHistory] = useState([]);
  const [accuracy, setAccuracy] = useState(100);
  const [wrong, setWrong] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const newList = [];
    for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * typingList.length);
      newList.push(typingList[randomIndex]);
    }
    setViewTypingList(newList);
  }, []);

  useEffect(() => {
    const total = viewTypingList.length;
    if (total === 0) return;
    const newAccuracy = ((total - wrong) / total) * 100;
    setAccuracy(newAccuracy.toFixed(1));
  }, [wrong, inputHistory.length]);




  // 자판의 물리적 키 위치(code)에 따라 한글 자모를 매핑한 객체
  const koreanKeyMap = {
    KeyA: 'ㅁ',
    KeyS: 'ㄴ',
    KeyD: 'ㅇ',
    KeyF: 'ㄹ',
    KeyJ: 'ㅓ',
    KeyK: 'ㅏ',
    KeyL: 'ㅣ',
    Semicolon: ';',
  };


  // 사용자가 입력한 자모(char)를 기반으로 상태 업데이트
  const handleTyping = (char) => {
    const targetChar = viewTypingList[currentIndex]; // 현재 입력해야 할 문자

    if (!isRunning) setIsRunning(true); // 게임 시작 플래그 설정

    setInputHistory((prev) => [...prev, char]); // 입력한 자모 기록

    if (char !== targetChar) {
      setWrong((prev) => prev + 1); // 틀렸을 경우 오답 수 증가
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex); // 다음 타자 인덱스로 이동

    if (nextIndex === viewTypingList.length) {
      setIsFinished(true); // 마지막 글자 입력 후 종료 플래그 설정
    }
  };



  console.log("History",inputHistory)
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <S.Bar />
      <S.TypingBox>
        <S.InputContanier>
          {viewTypingList.map((char, idx) => {
            let id = 'end';
            let check = '';
            if (idx === currentIndex - 2) id = 'prev1';
            else if (idx === currentIndex - 1) id = 'prev2';
            else if (idx === currentIndex) id = 'current';
            else if (idx === currentIndex + 1) id = 'next1';
            else if (idx === currentIndex + 2) id = 'next2';

            if (idx < inputHistory.length) {
              check = inputHistory[idx] === char ? 'true' : 'false';
            }

            return (
              <S.LettersBox key={idx} className={check} id={id}>
                {char}
              </S.LettersBox>
            );
          })}
          <S.Hr />
        </S.InputContanier>

        <Scorebord
          accuracy={accuracy}
          charCount={inputHistory.length}
          isRunning={isRunning}
          isFinished={isFinished}
        />
      <input
        type="text"
        value=""
        onKeyDown={(e) => {
          console.log(e)
          const char = koreanKeyMap[e.code];
          if (!char) return;

          e.preventDefault(); // 글자가 input에 들어가는 것 방지
          handleTyping(char);
        }}
        readOnly
        autoFocus
      />

      </S.TypingBox>
    </div>
  );
};

export default Letters;
