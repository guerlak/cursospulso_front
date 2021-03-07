import styled, { css } from "styled-components"


export const Wrapper = styled.div` 
   ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       align-items: center;
       max-width: 14rem;
    `}
`
export const Image = styled.div` 
   ${({ theme }) => css`
        width: 8rem;
        min-height: 8rem;
        color: ${theme.colors.primary};
        border: 0;
        border-radius: 5px;
        padding: 0.8rem;
    `}
`
export const Name = styled.div` 
   ${({ theme }) => css`
       background-color: ${theme.colors.primary};
       border-radius: 5px;
       font-size: ${theme.font.size.small};
       color: #fff;
       padding: 0.5em 2em;
    `}
`

export const Text = styled.div` 
   ${({ theme }) => css`
    
    `}
`