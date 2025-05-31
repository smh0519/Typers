import React, { useState } from 'react';
import S from './style';
import { useSelector } from 'react-redux';
import GoToBlock from './_components/GoToBlock';
import Example from './_components/ExampleImg/Example';
import UserChart from '../../components/UserChart';

const Home = () => {
    const auth = useSelector((state)=> state.auth)
    const isLognin = auth.isLoggedIn

    //GotoBlock의 text,url을 담고 있음
    const GoToLink = [
        {
            content : '기본',
            url : '/',
        },
        {
            content : '왼손위',
            url : '/',
        },
        {
            content : '왼손아래',
            url : '/',
        },
        {
            content : '가운데',
            url : '/',
        },
        {
            content : '오른쪽',
            url : '/',
        },
        {
            content : '커스텀',
            url : '/',
        },
        {
            content : '긴글연습',
            url : '/',
        }
    ]

    const [items, setItems] = useState(GoToLink);
    const [direction, setDirection] = useState(null); // 'left' or 'right'


    
    const handleRight = () => {
        setDirection('left')
        const newList = [...items];
        const last = newList.pop();
        newList.unshift(last);
        setItems(newList);
    }

    const handleLeft = () => {
        setDirection('right')
        const newList = [...items];
        const first = newList.shift();
        newList.push(first);
        setItems(newList);
    }

        return (
        <S.Main>
            <S.GoToContainer>
                <S.LeftArrow src="images/home/arrow.png" alt="left" onClick={handleLeft}/>
                    <S.ShowContainer>
                        <S.SliderWrapper>
                            {items.map((data,idx) =>(
                                <GoToBlock key={idx} props={data}/>
                            ))}
                        </S.SliderWrapper>
                    </S.ShowContainer>
                <S.RightArrow  src="images/home/arrow.png" alt="right" onClick={handleRight}/>
            </S.GoToContainer>
            <S.UserGraph>
                {isLognin ? (
                    <S.ChartBox>
                        <S.ChartContainer>
                            <S.ChartTitle>
                            나의 활동 - <span>2024</span>년 5월 <span>2</span>주차
                            </S.ChartTitle>
                            <S.Chart>
                            <UserChart/>
                            </S.Chart>
                        </S.ChartContainer>
                        <S.Characterbox>
                            <S.CharacterImg src={"images/character/character_emotion_basic.png"} />
                            <S.Speech>
                                <S.SpeechBalloonImg src={"images/home/speechballoon.png"} alt='말풍선'/>
                                <S.HelloBox>
                                    <h2>와 정말 멋진걸!</h2>
                                    <p>User1</p>
                                </S.HelloBox>
                            </S.Speech>
                        </S.Characterbox>
                    </S.ChartBox>
                ):(
                    <>
                    <Example/>
                    <S.NoticeTitle>로그인 후 확인가능 합니다.</S.NoticeTitle>
                </>
                )
                }
            </S.UserGraph>
        </S.Main>
    );
};

export default Home;