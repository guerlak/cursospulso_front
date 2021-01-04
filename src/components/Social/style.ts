import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50px;

    a{
        margin: 10px;
        color: ${(props => props.theme.colors.primary)}
    }
  
`