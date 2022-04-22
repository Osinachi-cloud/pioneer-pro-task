import styled from 'styled-components';
import * as themeConf from '../../../theme';

export const Wrapper = styled.div`
background-color: ${themeConf.rightBackgroundColor};
color: ${themeConf.rightTextColor};
text-align: center;
min-height: 100vh;
width:50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
// font-size: calc(10px + 2vmin);
@media screen and (max-width: 769px) {
    width:100%;
}

`;