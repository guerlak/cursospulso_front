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
        margin:0;
        padding:0;
    }

    body {
        font-family: ${props => props.theme.font.family};
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
        font-size: ${props => props.theme.font.size.medium};

        main{
            padding-left: 10%;
            padding-right: 10%;

            @media(max-width: 800px) {
                padding: 1.2rem;
            }
        }

        h1 {
            color: ${props => props.theme.colors.primary};

            @media(max-width: 800px) {
                margin-bottom: 1.5rem;
            }
        }

        p{
            color: ${props => props.theme.colors.text};
            font-size: ${props => props.theme.font.size.medium};
        }
    }


 `
