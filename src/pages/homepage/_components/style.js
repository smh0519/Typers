import styled from "styled-components";

const S = {}

S.GotoBox = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 20px;
    box-shadow: inset 0 0 10px #000;
    &:hover {
        cursor: pointer;
        color: #6E58FF;
        font-size: 23px;
        box-shadow: inset 0 0 10px #6E58FF;
        transition: font-size 0.1s ease, box-shadow 0.1s ease;
    }
` 

export default S;