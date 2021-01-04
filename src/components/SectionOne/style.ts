import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 300px;
    > div{
        margin: 40px;
    }
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

