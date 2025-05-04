import styled from 'styled-components';
import { felxColumn } from '../../global/common';

const S = {}

S.AuthContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `    

S.AuthBox = styled.div`
    width: 80vw;
    height: 80%;
    border-radius: 10px;
    background-color: #F4F2F2;
    box-shadow: 1px 5px 30px rgba(0, 0, 0, 0.3);
    position: relative;
`
S.IntroductionBox = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(135deg, #8e44ff, #6c3df7, #4a29e8);
    position: absolute;
    transition: transform 0.6s ease, border-radius 1s ease; 
    border-radius:  ${({$radius})=> `${$radius}`};
    transform: ${({$type})=> `translateX(${$type})`};
`
S.TextBox = styled.div`
    width: 100%;
    height: 60%;
    ${felxColumn}
    justify-content: center;
    align-items: center;
`

S.ButtonBox = styled.div`
    width: 100%;
    height: 40%;
    ${felxColumn}
    align-items: center;
`

S.Title = styled.h1`
    font-size: 48px;
    color: #fff;
`

S.SubTitle = styled.h1`
    font-size: 21px;
    color: #fff;
`

S.ModeChangeButton = styled.button`
  width: 310px;
  height: 80px;
  color: white;
  font-size: 35px;
  border-radius: 50px;
  background: linear-gradient(90deg,rgba(135, 88, 255, 1) 0%, rgba(110, 88, 255, 1) 100%);
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  overflow: hidden;
  position: relative;
  z-index: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    opacity: 0;
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;




export default S;