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
