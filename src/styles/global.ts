import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }

    body {
        background: ${props => props.theme.colors.background};
        color: #000;
        font-family: ${props => props.theme.font.family};
    }
    main{
        padding-left: 10%;
        padding-right: 10%;
    }
 `
