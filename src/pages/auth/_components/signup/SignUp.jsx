import React from 'react';
import { useForm } from 'react-hook-form';
import S from './style';

const SignUp = () => {
    const onSubmit = (data) =>{
        console.log("회원가입 폼 데이터:", data);
    }
   

    const onSubmitGoogle = () =>{
        console.log('구글 회원가입')
    }

    //아이디 입력 양식
    const userIdRegex = /^[a-zA-Z0-9]{5,12}$/
    //이메일 입력 양식
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    // 비밀번호 생성 양식
    const pwdRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{8,}$/

    const   { register, handleSubmit, getValues , 
                formState: { errors } 
            } = useForm({mode:'onChange'});

    return (
        <S.SignUpContainer>
            <S.Title>계정 만들기</S.Title>
             <S.Form  onSubmit={handleSubmit(onSubmit)} >
                <S.InputBox>
                    <S.Label>
                        <S.Input type="text" 
                        {...register("id",{
                            required: true,
                            pattern: {
                                value: userIdRegex
                            }
                            })} 
                        placeholder='아이디'/>
                        {errors?.id?.type === 'required'&&(<S.ConfirmMessage>아이디를 입력해주세요</S.ConfirmMessage>)}
                        {errors?.id?.type === 'pattern'&&(<S.ConfirmMessage>아이디 양식에 맞게 입력해주세요.</S.ConfirmMessage>)}
                        </S.Label>
                    <S.Label>
                        <S.Input type="text" 
                        {...register("email",{
                            required: true,
                            pattern: {
                                value: emailRegex
                            }
                            })} placeholder='이메일'/>
                            {errors?.email?.type === 'required'&&(<S.ConfirmMessage>이메일을 입력해주세요</S.ConfirmMessage>)}
                            {errors?.email?.type === 'pattern'&&(<S.ConfirmMessage>이메일 양식에 맞게 입력해주세요.</S.ConfirmMessage>)}
                    </S.Label>
                    <S.Label>
                        <S.Input type="password" 
                        {...register("pwd",{
                            required: true,
                            pattern: {
                                value: pwdRegex
                            }
                            })} placeholder='비밀번호'/>
                            {errors?.pwd?.type === 'required'&&(<S.ConfirmMessage>비밀번호를 입력해주세요</S.ConfirmMessage>)}
                            {errors?.pwd?.type === 'pattern'&&(<S.ConfirmMessage>소문자,숫자,특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ConfirmMessage>)}
                    </S.Label>
                </S.InputBox>
                <S.SubmitButton >완료</S.SubmitButton>
            </S.Form >
            <S.OrBorder>
                    <S.Border/>
                    <S.OrText>또는</S.OrText>
            </S.OrBorder>
            <S.EasyBox>
                <S.GoogleButton onClick={onSubmitGoogle}>
                    <S.Google src={"../public/images/auth/google.png"} alt="구글 로그인"/>
                    <p>구글계정으로 회원가입</p>
                </S.GoogleButton>
            </S.EasyBox>
        </S.SignUpContainer>
    );
};



export default SignUp;