import styled from "styled-components"

export const Container = styled.div` 
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    height: 20rem;
    width: 100%;
    line-height: 1.5rem;

    p{
        color: #fff;
        font-size: ${props => props.theme.font.size.smallMedium};
    }
    
    a{
        color: #fff;
    }
    
    div + div{
        border-left: 1px solid rgba(255,255,255, 0.4);
        padding-left: 3rem;
    }

    @media(max-width: 800px) {
        flex-direction: column;
        padding: 2rem;
        height: 35rem;
        text-align:  center;
        div + div{
            border-left: 0;
            padding-left: 0;
        }
    }
`
export const Logo = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
`
export const Links = styled.div` 
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 49px;
    a{
        text-decoration: none;
    }
    @media(max-width: 800px) {
        &{
            display: none;
        }
    }
`
export const SocialContainer = styled.div` 
    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Social = styled.div` 
    display: flex;
    align-items: center;

    a{
        margin: 0.5em;
    }
`