import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    h1{
        margin: 2rem 0;
    }

`
export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 768px) {
            &{
                flex-direction: column;
                align-items: center;
            } 
        }
`
export const MentoresScrollX = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        justify-content: start;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`

export const Diferenciais = styled.div`
    ${({ theme }) => css`

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 2fr;

        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1em;
            padding: 1rem;
            width: 15rem;
            height: 8rem;
            background-color: ${theme.colors.primary};
            color: #fff;
            border-radius: 5px;
            font-size: ${theme.font.size.smallMedium}
        }
    `}

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1rem;
        height:  100%;
        margin: 0px;
    }
`

export const CursosOferecidos = styled.div`
    ${({ theme }) => css`

        &{
            max-width: 800px;
        }
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img{
            width: 100%;
        }
        
        > div{
            text-align: left;
            width: 100%;
            max-width: 600px;
            font-size: ${theme.font.size.medium};
            box-shadow: 0px 4px 8px rgb(171 171 171 / 50%);
            padding: 3rem;
            
            h2{
                color: ${props => props.theme.colors.text};
            }

            p{
                font-size: ${theme.font.size.smallMedium};
            }

            button{
                margin-top: 2rem;
            } 
        }

    `}

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
