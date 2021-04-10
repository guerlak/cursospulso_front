import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
`

export const Text = styled.div`
    font-size: ${props => props.theme.font.size.large};
    width: 250px;
    color: #FF6C08;
`

export const Form = styled.div`
    input{
        padding: 10px;
        width: 400px;
        margin: 5px;
        border: solid 1px #ccc;
        border-radius: 4px;
    }

    #submit-btn{
        background:${props => props.theme.colors.secondary};
        color:${props => props.theme.colors.primary};
        cursor: pointer;
    }

    textarea{
        padding: 10px;
        width: 400px;
        margin: 5px;
        border: solid 1px #ccc;
        border-radius: 4px;
        margin: 5px;
        height: 150px
    }

`
