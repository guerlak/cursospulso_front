import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @font-face {
        font-family: 'HeroNew';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local()('HeroNew Light'), local('HeroNew-Light') 
        url('/fonts/HeroNew-Light.otf');
    }   

    @font-face {
        font-family: 'HeroNew';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local()('HeroNew Regular'), local('HeroNew-Regular') 
        url('/fonts/HeroNew-Regular.otf');
    }   

    @font-face {
        font-family: 'HeroNew';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local()('HeroNew Bold'), local('HeroNew-Bold') 
        url('/fonts/HeroNew-Bold.otf');
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }
    
    html{
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.font.family};
        font-size: ${props => props.theme.font.size.medium};
    }

    h1 {
        color: ${props => props.theme.colors.primary};
        margin: 2rem;
    }

    main{
        padding-left: 10%;
        padding-right: 10%;
        @media(max-width: 800px) {
            padding: 0;
        }
    }

    p{
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.font.size.medium};
    }
 `
