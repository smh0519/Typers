import styled from "styled-components";
import { felxColumn } from "../../global/common";

const S = {}

S.ScoreBordContainer = styled.div`
    width: 500px;
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
`

S.TimerTitle = styled.div`
    height: 50px;
    text-align: center;
    &>h2{
        line-height: 50px;
    }
`

S.ScoreBord = styled.div`
    height: calc(100% - 50px);
    display: flex;
    &>div>h4{
        text-align: center;
        color: #8758FF ;
    }
`

S.WpmBox = styled.div`
    flex: 1;
    height: 100%;
    &>p{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        color: #8758FF ;
    }
`

S.TimerBox = styled.div`
    flex: 1;
    height: 100%;
    ${felxColumn}
    &>p{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        color: #8758FF ;
    }
`
S.accuracyBox = styled.div`
    flex: 1;
    height: 100%;
        &>p{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        color: #8758FF ;
    }
`


export default S;