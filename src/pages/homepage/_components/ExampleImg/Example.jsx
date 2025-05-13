import React from 'react';
import S from './style';

const Example = () => {
    return (
        <S.Wrapper>
            <S.GraphImgBox className='graph-img'>
                <S.GraphImg src="images/home/graph-example.png" alt="graph" />
            </S.GraphImgBox>
            <S.CharBox className='char'>
                <S.CharacterImg src={"images/character/character_emotion_basic.png"}/>
            </S.CharBox>      
        </S.Wrapper>
    );
};

export default Example;