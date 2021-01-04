import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};;
        font-family: ${props => props.theme.font.family};
       
    }

    h1 {
        color: ${props => props.theme.colors.primary};
        margin: 2rem;
    }

    main{
        padding-left: 10%;
        padding-right: 10%;
    }
 `
