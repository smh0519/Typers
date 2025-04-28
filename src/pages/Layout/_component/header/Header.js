import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import SubMenu from './_component/nav/subMenu/SubMenu';
import MainMenu from './_component/nav/mainMenu/MainMenu';
const Header = () => {

    const mainMeuItems = [// 메인메뉴 
        {id : 0, title : '타이핑', url : '/'},
        {id : 1, title : '커스텀', url : '/'},
        {id : 2, title : '랭킹', url : '/'},
        {id : 3, title : '창작마당',url : '/'}
    ]

      const subMenuItems = [// 서브메뉴
        [
            {id : 0, title : '긴글연습', url : '/'},
            {id : 1, title : '짧은글연습', url : '/'},
            {id : 2, title : '낱말연습', url : '/'},
            {id : 3, title : '자리연습', url : '/'},
            {id : 4 , title : '미니게임', url : '/'},
        ],
        [
            {id : 0, title : '문장 커스텀', url : '/'},
            {id : 1, title : '단어 커스텀', url : '/'},
        ],
        [
            {id : 0, title : '타이핑 랭크전', url : '/'},
            {id : 1, title : '랭킹 보기 ', url : '/'},
        ],
        [
            {id : 0, title : '타이핑 랭크전', url : '/'},
            {id : 1, title : '랭킹 보기 ', url : '/'},
        ],
    ]


    const [ishover,setIsHover] = useState(false)

    const EnterMenu = () =>{
      setIsHover(true)
    }
  
    const LeaveMenu = () =>{
      setIsHover(false)
    }

    return (
        <S.Header>
          <S.Logo>
              logo
          </S.Logo>
          <S.Nav 
            onMouseEnter={EnterMenu}
            onMouseLeave={LeaveMenu}
            >
            <S.Menu>
              {mainMeuItems.map((MenuItem,idx)=>(
                <MainMenu key={idx} MenuItem={MenuItem} />
              ))}
              </S.Menu>
              <S.SubMenuBox ishover={ishover}>
                  <S.SubMenu>
                    {subMenuItems.map((data,idx)=> (
                      <SubMenu key={idx} children={data}/>
                    ))}
                  </S.SubMenu>
              </S.SubMenuBox>
            </S.Nav>
            <S.ButtonContainer>
              <S.Auth>
                <Link to="/auth?type=signin">로그인</Link>/
                <Link to="/auth?type=signup">회원가입</Link>
              </S.Auth>
            </S.ButtonContainer>
        </S.Header>
    );
};

export default Header;