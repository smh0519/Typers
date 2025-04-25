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
`
S.UserGraph = styled.div`
    width: 100%;
    flex-grow: 1;
`
export default S;