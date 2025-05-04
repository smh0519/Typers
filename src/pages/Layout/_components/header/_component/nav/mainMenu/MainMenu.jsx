import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const MainMenu = ({MenuItem}) => {
    const {id, title , url} = MenuItem
    return (
        <S.MenuText key={id}>
            <Link to={url}>{title}
            <S.UnderLine/>
        </Link></S.MenuText>
    );
};

export default MainMenu;