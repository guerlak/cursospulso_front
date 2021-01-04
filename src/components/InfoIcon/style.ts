import styled, { css, DefaultTheme } from "styled-components"


export const Wrapper = styled.div` 
   ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       max-width: 14rem;
       

    `}
`
export const Icon = styled.div` 
   ${({ theme }) => css`
        width: 8rem;
        color: ${theme.colors.primary};
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
    `}
`
export const Title = styled.div` 
   ${({ theme }) => css`
       

    `}
`

export const Description = styled.div` 
   ${({ theme }) => css`
        

    `}
`