import styled from "styled-components";

const S ={}

S.Bar = styled.div`
    width: 150px;
    height: 100%;
`

S.TypingBox = styled.div`
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

S.InputContanier = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    position: relative;
`

S.LettersBox = styled.div`
    width: 17%;
    height: 27%;
    background-color: #fff;
    position: absolute;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    
    &.true {
        color: green;
    }

    &.false {
        color: red;
    }

    &#prev1 {
        left: 10%;
        transform: translateX(-50%);
    }

      &#prev2 {
        left: 30%;
        transform: translateX(-50%);
    }

    &#current {
        left: 50%;
        transform: translateX(-50%) scale(1.3, 1.2);
        top: 40%;
        border: 3px solid #5B37BF;
    }

    &#next1 {
        left: 70%;
        transform: translateX(-50%);
        color: #aaa;
    }

   &#next2 {
        left: 90%;
        transform: translateX(-50%);
        color: #aaa;
    }

    &#end {
        left: 100%;
        opacity: 0;
    }
`

S.Hr = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 2px;
    position: absolute;
    bottom: 5%;
    background-color: #6E58FF;
`


S.ScoreBord = styled.div`
    width: 400px;
    height: 200px;
    background-color: #fff;
`

export default S;