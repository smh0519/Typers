import React, { useEffect, useState } from 'react'; // React 기본 기능과 훅 import
import S from './style'; // 스타일 컴포넌트 import
import { Outlet } from 'react-router-dom';

const TypingKo = () => {


  // 화면 렌더링
  return (
    <S.wrapper>
        <Outlet/>
    </S.wrapper>
  );
};

export default TypingKo; // 컴포넌트 export
