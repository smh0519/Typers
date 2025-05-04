import styled from 'styled-components';
import {felxRow, felxRowCenter } from '../../../../global/common';

const S = {}

S.SignUpContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    animation: show 0.5s ease-in forwards;
    left: 50%;
    @keyframes show {
        0%{
            opacity: 0;
            transform: translateX(-50%);
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
            transform: translateX(-100%);
        }
    }
`

S.Title = styled.h1`
    padding: 30px 0;
    text-align: center;
`

S.Form = styled.form`
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.InputBox = styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

S.Input = styled.input`
    width: 348px;
    height: 66px;
    padding: 0 30px;
    font-size: 18px;
    border: 1.5px solid #6E58FF;
    border-radius: 50px;
    background-color: #F4F2F2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    &::placeholder {
        color: #6E58FF;
    }
`
S.Label = styled.label`
    width: 100%;
    height: 100px;
    position: relative;
`

S.ConfirmMessage = styled.p`
    width: 340px;
    padding: 0 10px;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    color: red;
`

S.OrBorder = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 10%;
    position: relative;
`

S.SubmitButton = styled.button.attrs({ type: "submit" })`
   width: 348px;
   height: 66px;
    margin-top: 20px;
    color: white;
    border: none;
    border-radius: 50px;
    background-color: #6E58FF;
    font-size: 18px;
    cursor: pointer;
`


S.Border = styled.div`
    width: 100%;
    height: 1px;
    border: 1px solid  #6E58FF;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

S.OrText = styled.p`
    position: absolute;
    padding: 0 20px;
    font-size: 20px;
    top: 50%;
    left: 50%;
    color:  #6E58FF;
    transform: translate(-50%,-50%);
    z-index: 1;
    background-color: #F4F2F2;
`

S.EasyBox = styled.div`
    width: 100%;
    height: 100px;
    ${felxRowCenter}
`

S.GoogleButton = styled.div`
    width: 300px;
    height: 60px;
    ${felxRow}
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
`

S.Google = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export default S;