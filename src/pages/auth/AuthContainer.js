import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from './_components/signin/SignIn';
import SignUp from './_components/signup/SignUp';
import S from './style';

const AuthContainer = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const [isType,setIsType] = useState(type)
    const [mode, setMode] = useState("");
    const [radius,setRadius] = useState("")

  // ✅ type이 변경될 때만 상태 업데이트
  useEffect(() => {

    if (isType === "signin") {
      setMode("0");
      setRadius("10px 60px 60px 10px")
    } else {
      setMode("100%");
      setRadius("60px 10px 10px 60px")
    }
  }, [isType]); // 의존성 배열에 type을 넣음

  const modeChange = (type) =>{
    if(type === 'signin'){
        setIsType("signup")
    }else{
        setIsType("signin")
    }
    
    }

  return (
    <S.AuthContainer>
      <S.AuthBox>
        { isType == 'signin' ?<SignIn /> : <SignUp />}
            <S.IntroductionBox $type={mode} $radius={radius}>
                <S.TextBox>
                    <S.Title>{isType === "signin" ?"Welcome Back":"Welcome to Typers"}</S.Title>
                    <S.SubTitle>{isType === "signin"?"돌아오신 걸 환영합니다":"타이퍼즈에 방문해주셔서 감사합니다"}</S.SubTitle>
                </S.TextBox>
                <S.ButtonBox>
                    <S.ModeChangeButton
                         onClick={() => modeChange(isType === 'signin' ? 'signin' : 'signup')}
                    >{isType === "signin"?"계정 만들기":"로그인"}</S.ModeChangeButton>
                </S.ButtonBox>
            </S.IntroductionBox>
      </S.AuthBox>
    </S.AuthContainer>
  );
};

export default AuthContainer;
