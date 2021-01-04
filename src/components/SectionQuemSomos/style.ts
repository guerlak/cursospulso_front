import styled from 'styled-components'

export const Container = styled.div`
    
    display: flex;
    justify-content:center;
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
        justify-content: center;
    }
    
`
