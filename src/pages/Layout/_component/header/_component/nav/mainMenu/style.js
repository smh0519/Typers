import styled from "styled-components";

const S = {}

S.MenuText = styled.li`
    font-size: 25px;
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 110px;
    position: relative;
    &>a{
        display: block;
        width: 100%;
        height: 100%;
        color: #6E58FF;
    }

    &:hover  div{
        transform: scaleX(1);
    }

`
S.UnderLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #6E58FF;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
`
export default S;