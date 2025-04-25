import React, { useState } from 'react'; 
import S from './style';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './_component/header/Header';

const LayOut = () => {

    const location = useLocation();
    const isAuthPage = location.pathname.startsWith("/auth");
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
