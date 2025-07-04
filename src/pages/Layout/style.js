import {styled} from 'styled-components';
import { felxRow } from '../../global/common';

const S = {};

S.Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

S.Header = styled.header`
    width: 100%;
    height: 110px;
    ${felxRow}
    position: relative;
    border-bottom:1px solid #6E58FF ;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`

S.Main = styled.div`
    width: 100%;
    height: calc(100vh - 110px);
`

S.Logo = styled.div`
    flex: 2;
    height: 100%;
    text-align: center;
    line-height: 130px;
`

S.Nav = styled.div`
    flex: 5;
    height: 100%;
`

S.Menu = styled.ul`
    width: 100;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
S.SubMenuBox = styled.div`
    position: absolute;
    top: 101%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    max-height: ${({ ishover }) => (ishover ? '300px' : '0')};
    opacity: ${({ ishover }) => (ishover ? '1' : '0')};
    transform: translateY(0);
    transition: max-height 0.4s ease, opacity 0.4s ease;
    border-top: 2px solid transparent;
`


S.SubMenu = styled.div`
    width: 50%;
    ${felxRow}
    justify-content: space-around;
    margin-left: 20%;
    
`

S.ButtonContainer = styled.div`
    flex: 3;
    height: 110px;
    right: 0;
`

S.Auth = styled.div`
    width: 50%;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    ${felxRow}
    justify-content: center;
    align-items: center;
    color: #6E58FF;
    & > a{
        color: #6E58FF;
    }
`

export default S;