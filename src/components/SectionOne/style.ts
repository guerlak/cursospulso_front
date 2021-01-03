import styled, { css } from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 300px;
`

export const Texto = styled.div`
    ${({ theme }) => css`
        width: 20em;
        color: ${theme.colors.primary};
        width: 200px;
        margin-bottom: 50px;
        font-weight: bold;
   `}
  
`
export const Image = styled.img`
   width: 20em;
   
`
export const Button = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        background:${theme.colors.secondary};
        border: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-weight: bold;
    `}
` 
