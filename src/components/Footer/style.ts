import styled from "styled-components"

export const Container = styled.div` 
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    min-height: 350px;
    a{
        color: #fff;
    }
    div{
        max-width: 350px;
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
    
`
export const Social = styled.div` 
    display: flex;
    align-items: center;
    a{
        margin: 1em;
    }

`