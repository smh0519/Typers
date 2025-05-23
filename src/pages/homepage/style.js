import {styled} from 'styled-components';
import { felxColumn, parentSize } from '../../global/common';

const S = {};

S.Main = styled.div`
    ${parentSize} //부모크기 따라감
    ${felxColumn}
`

S.GoToContainer = styled.div`
    width: 100%;
    height: 45%;
    background-color: #6E58FF;
    display: flex;
    justify-content: center;
    align-items: center;
`
S.UserGraph = styled.div`
    width: 100%;
    flex-grow: 1;
    position: relative;
`

S.ChartBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

S.ChartContainer = styled.div`
  width: 70%;
  max-width: 800px;
  padding: 20px;
  background-color: #f9f9ff;
  border-radius: 20px;
  border: 1px solid #6E58FF;
`

S.ChartTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;

  span {
    color: #6E58FF;
    font-weight: 700;
  }
`;

S.Chart = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

///////
// style.js
S.ShowContainer = styled.div`
  width: calc(240px * 5);  // GoToBlock 5개 너비만큼만
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

S.SliderWrapper = styled.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
    &.fade-out{
        opacity: 0;
    transform: translateX(-30px);
    transition: all 0.3s ease;
    }
    &.fade-in {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.3s ease;
}
`;


S.LeftArrow = styled.img`
    transform: rotate(180deg);
    cursor: pointer;
    padding: 10px;
`

S.RightArrow = styled.img`
    cursor: pointer;
    padding: 10px;
`

S.NoticeTitle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 30px;
    color: #6E58FF;
    backdrop-filter: blur(10px);
`

S.Characterbox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom:5% ;
`
S.CharacterImg = styled.img`
  width: 60%;
  height: 60%;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3));
`

S.Speech = styled.div`
  width: 300px;
  height: 100%;
  position: relative;
`

S.SpeechBalloonImg = styled.img`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

S.HelloBox = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &>h3{
  }

  & > p{
    color : #6DE701;
  }
`



export default S;