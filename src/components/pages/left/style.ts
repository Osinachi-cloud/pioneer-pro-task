import styled from 'styled-components';
import * as themeConf from '../../../theme';


export const Button = styled.button`
background: ${themeConf.buttonBackgroundColor};
border: none;
box-shadow: none;
color: ${themeConf.buttonTextColor};
cursor: pointer;
font-size: 1em;
padding: 0.2em 0.5em;
position: absolute;
top:0;
left:0;
`;

export const Wrapper = styled.div`
background-color: ${themeConf.leftBackgroundColor};
color: ${themeConf.leftTextColor};
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

export const AddButton = styled.button`
padding: 5px 10px;

`
export const TextArea = styled.textarea`
font-size: 14px;
padding:10px;
margin-top:20px;
`;
export const InputFormContainer = styled.div`
    background-color:;
    display:flex;
    flex-direction: column;

`

export const ButtonsDisplay = styled.div`
    background-color:;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

`
export const ButtonList = styled.div`
    height: fit-content;

`