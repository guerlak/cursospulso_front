import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    min-height: 300px;
    padding: 20px;
    >div{
        margin: 2rem;
    }
    color: ${props => props.theme.colors.primary};

    .subTitle{
        margin: -25px 0 20px 0;
        font-size: ${props => props.theme.font.size.medium};
        
    }
`

export const Rectangle = styled.div`
    background: #fff;
    box-shadow: 0px 4px 8px rgba(171, 171, 171, 0.5);
    color: ${props => props.theme.colors.primary};
    padding: 10px;
    width: 300px;
    margin: 5px;
    text-align: center;
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
    margin: 10px
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