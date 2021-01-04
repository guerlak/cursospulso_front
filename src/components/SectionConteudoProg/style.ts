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
    color: ${props => props.theme.colors.primary}
`

export const Rectangle = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(171, 171, 171, 0.5);
    color: ${props => props.theme.colors.primary};
    padding: 10px;
    width: 300px;
    margin: 5px;
    text-align: center;
`

export const RectangleBox = styled.div`
    > div{
        max-width: 45%;
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
    background: #F7F7F7;
    margin: 10px
`