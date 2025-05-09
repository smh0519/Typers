import styled  from "styled-components";

const S = {}

S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
`
S.GraphImgBox = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
`

S.GraphImg = styled.img`
width: 90%;
position: absolute;
bottom: 10px;
left: 50px;
`

S.CharBox = styled.div`
    width: 40%;
    height: 100%;
`

export default S;