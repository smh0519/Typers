import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';
const SubMenu = ({children}) => {
  
   
    return (
        <ul>
            {children.map(data =>(
              <S.SubText key={data.id}>
                <Link to={data.url}>{data.title}</Link>
                <S.UnderLine />
             </S.SubText>
            ))}
        </ul>
    );
};

export default SubMenu;