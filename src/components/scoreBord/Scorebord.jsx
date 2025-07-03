import React, { useEffect, useState } from 'react';
import S from './style';

/**
 * 타자 속도, 정확도, 시간 등을 보여주는 컴포넌트
 */
const Scorebord = ({ accuracy, charCount, isRunning, isFinished }) => {
  const [count, setCount] = useState(0); // 초 단위 경과 시간

  useEffect(() => {
    if (!isRunning || isFinished) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isFinished]);

  const formatTime = (num) => {
    const min = String(Math.floor(num / 60)).padStart(2, '0');
    const sec = String(num % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  const charactersPerMinute = () => {
    if (count === 0) return 0;
    const minutes = count / 60;
    return Math.round(charCount / minutes);
  };

  return (
    <S.ScoreBordContainer>
      <S.TimerTitle>
        <h2>통계</h2>
      </S.TimerTitle>
      <S.ScoreBord>
        <S.WpmBox>
          <h4>분당 문자수(CPM)</h4>
          <p>{charactersPerMinute()}</p>
        </S.WpmBox>
        <S.TimerBox>
          <h4>소요시간</h4>
          <p>{formatTime(count)}</p>
        </S.TimerBox>
        <S.accuracyBox>
          <h4>정확도</h4>
          <p>{accuracy}%</p>
        </S.accuracyBox>
      </S.ScoreBord>
    </S.ScoreBordContainer>
  );
};

export default Scorebord;
