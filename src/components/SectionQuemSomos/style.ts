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

export const CursosOferecidos = styled.div`
    ${({ theme }) => css`

        display: flex;
        justify-content: center;

        img{
            width: 300px;
        }
        
        > div{
            width: 100%;
            max-width: 400px;
            font-size: ${theme.font.size.medium};
            box-shadow: 0px 4px 8px rgb(171 171 171 / 50%);

            button{
                background-color: ${theme.colors.primary};
                font-size: ${theme.font.size.small};
                margin-top: 1rem;
                color:  #fff;
                padding: 1rem;
                border-radius: 3px;
                border: 0;
            }
        }

    `}
`
