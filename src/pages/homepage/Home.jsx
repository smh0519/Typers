import React from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import GoToblacks from './_components/GoToblacks';
const Home = () => {
    const auth = useSelector((state)=> state.auth)
    return (
        <S.Main>
            <S.GoToContainer>
                <img src="" alt="" />
                <GoToblacks/>
                <img  src="" alt="" />
            </S.GoToContainer>
            <S.UserGraph>
                <h1>유저 그래프</h1>
            </S.UserGraph>
        </S.Main>
    );
};

export default Home;