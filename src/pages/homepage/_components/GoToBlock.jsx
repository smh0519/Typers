import React from 'react';
import S from './style';

const GoToBlock = ({props}) => {
    const {content,url} = props
    return (
        <S.GotoBox>
            {content}
        </S.GotoBox>
    );
};

export default GoToBlock;