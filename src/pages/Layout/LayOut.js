import React, { useState } from 'react'; 
import S from './style';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './_components/header/Header';

const LayOut = () => {

    const location = useLocation();
    const isAuthPage = location.pathname.startsWith("/auth"); //현제 URL경로가 auth인지 확인하기 위함
  return (
   <S.Wrap>
        {!isAuthPage&&<Header/>}
        <S.Main>
          <Outlet/>
        </S.Main>
   </S.Wrap>
  );
};

export default LayOut;
