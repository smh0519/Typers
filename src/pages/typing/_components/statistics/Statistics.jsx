import React, { useEffect, useState } from 'react';
import S from './style';

const Statistics = () => {
  // 타자 연습에 사용될 글자 리스트 (랜덤으로 추출될 대상)
  const typingList = ['ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅓ', 'ㅏ', 'ㅣ', ';'];

  // 보여줄 글자 리스트 (처음에 랜덤으로 생성됨)
  const [viewTypingList, setViewTypingList] = useState([]);

  // 현재 몇 번째 글자를 입력 중인지 추적
  const [currentIndex, setCurrentIndex] = useState(0);

  // 사용자가 입력한 기록 저장용 (디버깅, 통계 등에 활용 가능)
  const [inputHistory, setInputHistory] = useState([]);

  // input 필드의 입력값 상태
  const [inputValue, setInputValue] = useState('');

  //정답||오답 체크
  const [istCheck,setIsCheck] = useState(true);


  // 컴포넌트가 처음 마운트될 때 1번 실행: 랜덤 글자 30개 뽑아서 화면에 보여줄 리스트 생성
  useEffect(() => {
    const newList = [];
    for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * typingList.length); // 0~7 사이 숫자
      newList.push(typingList[randomIndex]); // 랜덤으로 한 글자를 뽑아 리스트에 추가
;    }
    setViewTypingList(newList) // 최종 리스트를 상태로 저장
  }, []);

  // 사용자가 input에 값을 입력할 때 실행되는 함수
  const handleChange = (e) => {
    const value = e.target.value;         // 전체 입력값
    const lastChar = value.slice(-1);     // 마지막에 입력된 글자만 추출
    const targetChar = viewTypingList[currentIndex]; // 현재 입력해야 할 정답 글자

    if (!lastChar) return; // 빈 값이면 아무것도 안 함

    console.log('입력:', lastChar, '정답:', targetChar); // 디버깅 출력

    setInputHistory((prev) => [...prev, lastChar]); // 입력 기록 업데이트
    setInputValue(''); // 입력 필드 초기화 (한 글자 입력마다 비워줌)

    if (lastChar === targetChar) {
      // 정답인 경우
      console.log('정답!');
      // 다음 글자로 인덱스 이동
    } else {
      // 오답인 경우
      console.log('오타!');
    }
    setCurrentIndex(currentIndex +1); 
    console.log("inputHistory",inputHistory)
  };

    return (
        <div style={{display:"flex",width:"100%"}}>
          <S.Bar></S.Bar>
          <S.TypingBox>
          <S.InputContanier>
            {/* 화면에 랜덤으로 뽑은 글자들을 순서대로 출력 */}
            {viewTypingList.map((char, idx) => {
              let id = 'end'; // 기본은 end
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
          </S.InputContanier>
          <S.Hr/> 
                    {/* 사용자가 입력하는 텍스트 필드 */}
          <input
            type="text"
            value={inputValue}           // input 값을 state로 제어
             onChange={viewTypingList.length === currentIndex ? undefined : handleChange}     // 값이 변경될 때마다 handleChange 호출
            autoFocus                    // 페이지 로딩 시 자동으로 포커싱됨
          />
          </S.TypingBox>
        </div>
    );
};

export default Statistics;