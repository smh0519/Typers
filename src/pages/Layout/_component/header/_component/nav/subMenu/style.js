import styled from "styled-components";
import { parentSize } from "../../../../../../../global/common";

const S = {}

S.SubText = styled.li`
    width: 150px;
    height: 40px;
    position: relative;

    & > a {
        display: block;
        ${parentSize}
        line-height: 40px;
        text-align: center;
        color: #6E58FF;
    }

    &:hover div {
        transform: scaleX(0.7);
    }
`;

S.UnderLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #6E58FF;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
`;

export default S;