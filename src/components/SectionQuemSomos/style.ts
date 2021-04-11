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

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img{
            width: 100%;
        }
        
        > div{
            text-align: left;
            width: 100%;
            max-width: 500px;
            font-size: ${theme.font.size.medium};
            box-shadow: 0px 4px 8px rgb(171 171 171 / 50%);
            padding: 3rem;
            
            h2{
                color: ${props => props.theme.colors.text};
            }

            p{
                font-size: ${theme.font.size.medium};
            }

            button{
                margin-top: 2rem;
            } 
        }

    `}
`
