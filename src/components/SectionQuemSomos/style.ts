import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    h1{
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
`
export const IconsWrapper = styled.div`
    > div{
        display: flex;
        justify-content: space-evenly;
    }
    
`

export const Diferenciais = styled.div`
    ${({ theme }) => css`

    display: flex;
    justify-content: space-around;
        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1em;
            padding: 5px;
            width: 250px;
            height: 100px;
            background-color: ${theme.colors.primary};
            color: #fff;
            border-radius: 5px;
            font-size: ${theme.font.size.small}
        }
    `}
`
