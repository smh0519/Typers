import React, { useEffect, useState } from 'react';
import S from './style';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signin } from '../../../../api/auth';

const SignIn = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const onSubmitGoogle = () =>{
        console.log("회원가입 폼 데이터");
    }

    const onSubmit = (data) =>{
        console.log("로그인 폼 데이터:", data);
    }

    const   { register, handleSubmit, getValues , 
                    formState: { errors } 
                } = useForm({mode:'onChange'});

    return (
        <S.SignInContainer>
            <S.Title>로그인</S.Title>
            <S.Form onSubmit={handleSubmit(signin)}>
                <S.InputBox>
                    <S.Input type="text" 
                    {...register("email",{
                        required : true
                    })}
                    placeholder='이메일'/>
                    <S.Input type="password"  
                    {...register("pwd",{
                        required : true
                    })}
                    placeholder='비밀번호'/>
                    <S.SubmitButton>완료</S.SubmitButton>
                </S.InputBox>
            </S.Form>
            <S.OrBorder>
                    <S.Border/>
                    <S.OrText>또는</S.OrText>
            </S.OrBorder>
            <S.EasyBox>
                <S.GoogleButton onClick={onSubmitGoogle}>
                    <S.Google src="/images/auth/google.png" alt="구글 로그인"/>
                    <p>구글계정으로 회원가입</p>
                </S.GoogleButton>
            </S.EasyBox>
        </S.SignInContainer>
    );
};

export default SignIn;