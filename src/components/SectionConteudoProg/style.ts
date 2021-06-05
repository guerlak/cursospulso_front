import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    min-height: 300px;
    color: ${props => props.theme.colors.primary};
    margin-top: 2rem;

    h1{
        text-align: center;
    }
  
    >div{
        margin: 1.5rem 0;
    }
    
    .subTitle{
        font-size: ${props => props.theme.font.size.medium};


    }
`

export const Rectangle = styled.div`
    background: #fff;
    box-shadow: 0px 4px 8px rgba(171, 171, 171, 0.5);
    color: ${props => props.theme.colors.primary};
    padding: 10px;
    width: 25rem;
    margin: 5px;
    text-align: center;
    @media(max-width: 800px) {
        width: 20rem;
    }
`

export const RectangleBox = styled.div`
    .title{
        font-weight: bold;
        font-size: 1.3rem;
    }
    width: 100%;
    height: 100px;
    color: ${props => props.theme.colors.text};
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 1rem 2.5rem;
    background: #F7F7F7;
    margin-bottom: 10px;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1rem;
        height:  100%;
        margin: 0px;
        &{
            margin-bottom: 1rem;
        }
    }
`

export const Investimento = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items:  center;
        justify-content: center;
        p{
            color: ${theme.colors.primary};
        }
    `}
`