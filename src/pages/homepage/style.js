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
    background-color: rgba(255,255,255,0.7);
`

export default S;