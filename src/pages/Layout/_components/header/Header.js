import React, { useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import SubMenu from './_component/nav/subMenu/SubMenu';
import MainMenu from './_component/nav/mainMenu/MainMenu';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../reducers/auth';
const Header = () => {
    const  auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const isLogin = auth.isLoggedIn
    console.log(isLogin)
    const mainMeuItems = [// 메인메뉴 
        {id : 0, title : '타이핑', url : '/'},
        {id : 1, title : '커스텀', url : '/custom'},
        {id : 2, title : '랭킹', url : '/ranklist'},
        {id : 3, title : '창작마당',url : '/workshop'}
    ]


      const subMenuItems = [// 서브메뉴
        [
            {id : 0, title : '긴글연습', url : '/ko/typing-1'},
            {id : 1, title : '짧은글연습', url : '/ko/typing-2'},
            {id : 2, title : '낱말연습', url : '/ko/typing-3'},
            {id : 3, title : '자리연습', url : '/ko/typing-4'},
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

    // 메뉴 hover 여부 검사
    const [ishover,setIsHover] = useState(false)

    const EnterMenu = () =>{
      setIsHover(true)
    }
  
    const LeaveMenu = () =>{
      setIsHover(false)
    }


    const isLogout = () => {
      alert("로그아웃 되었습니다")
      dispatch(logout())
    }

    return (
        <S.Header>
          <S.Logo>
              <Link to={"/"}><S.LogoImg src="images/logo.jpg" alt='logo' width={70} height={70}/></Link>
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
              <S.SubMenuBox $ishover={ishover}>
                  <S.SubMenu>
                    {subMenuItems.map((data,idx)=> (
                      <SubMenu key={idx} children={data}/>
                    ))}
                  </S.SubMenu>
              </S.SubMenuBox>
            </S.Nav>
            <S.ButtonContainer>
              {isLogin ? (
                <S.Auth>
                    <S.Line/>
                    <S.ImgButtonContainer>
                      <img src='images/home/user.png' alt='user'/>
                      <img src='images/home/notice.png' alt='notice'/>
                    </S.ImgButtonContainer>
                  <S.LogoutButton onClick={isLogout}>로그아웃</S.LogoutButton>
                </S.Auth>
              ):(
                <S.Auth>
                <Link to="/auth?type=signin">로그인</Link>/
                <Link to="/auth?type=signup">회원가입</Link>
              </S.Auth>
              )}
            
            </S.ButtonContainer>
        </S.Header>
    );
};

export default Header;