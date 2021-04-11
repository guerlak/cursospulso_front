import styled, { css } from "styled-components"


export const Wrapper = styled.div` 
   ${({ theme }) => css`
       display: flex;
       flex-direction: column;
       align-items: center;
       min-width: 14rem;
       max-width: 17rem;
       
    `}

    img{
        height: 10rem;
    }

    h2{
        font-size: 12px;
        color: #656668;
        margin: 5px;
    }
`

export const Name = styled.div` 
   ${({ theme }) => css`
       background-color: ${theme.colors.primary};
       border-radius: 1rem;
       font-size: ${theme.font.size.small};
       width: 12rem;
       color: #fff;
       padding: 0.5em 2em;
    `}
`

export const Text = styled.p` 
   ${({ theme }) => css`
        color: ${theme.colors.text};
        font-size: ${theme.font.size.small};
        padding: 0.3rem;
    `}
`