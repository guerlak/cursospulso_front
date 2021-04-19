import styled, { css, DefaultTheme } from "styled-components"


export const Wrapper = styled.div` 
   ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       align-items: center;
       max-width: 20rem;
    `}
`
export const Icon = styled.div` 
   ${({ theme }) => css`
        width: 8rem;
        min-height: 8rem;
        color: ${theme.colors.primary};
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
    `}

    img{
        width: 8rem;
        min-height: 8rem;
    }

    @media (max-width: 768px) {
        img{
            width: 5rem;
        } 
    }

`

export const Title = styled.h3` 
   ${({ theme }) => css`
       color: ${theme.colors.text};
       margin-bottom: 1.4rem;
    
    `}
`

export const Description = styled.p` 
   ${({ theme }) => css`
        font-size: ${theme.font.size.smallMedium}

    `}
`