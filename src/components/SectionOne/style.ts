import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 300px;
    > div{
        display:  flex;
        margin: 40px;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 768px) {
            img{
                display: none;
            }
          
        }
`
export const Texto = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        font-size: ${theme.font.size.mediumLarge};
        line-height: 1.2;
        width: 24rem;
        margin-bottom: 50px;
        text-align: center;
   `}
  
`
export const Image = styled.img`
   width: 20em;
`

