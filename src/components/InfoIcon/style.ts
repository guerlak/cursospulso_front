import styled, { css, DefaultTheme } from "styled-components"
import { darken } from "polished"

interface IconProps {
    size?: string;
}

export const Wrapper = styled.div` 
   ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       align-items: center;
       margin: 0.3rem;
    `}
`
export const Icon = styled.div<IconProps>` 
   ${({ theme, size }) => css`
        min-height: 6rem;
        color: ${theme.colors.primary};
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
        img{
            width: ${size};
            min-height: 6rem;
        }
        img:hover{
            
        }
    `}

    @media (max-width: 768px) {
        img{
            width: 5rem;
        } 
    }
`

export const Title = styled.h3` 
   ${({ theme }) => css`
       color: ${theme.colors.text};    
    `}
`

export const Description = styled.p` 
   ${({ theme }) => css`
        font-size: ${theme.font.size.smallMedium}
    `}
`