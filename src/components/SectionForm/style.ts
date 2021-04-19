import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    position: relative;
    img{
        position: absolute;
        top: 130px;
        left: 110px;
    }
`

export const Text = styled.div`
    font-size: 1.8rem;
    width: 290px;
    color: #FF6C08;
    font-weight: 900;
    margin-right: 1.8rem;
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
        background:${props => props.theme.colors.primary};
        color:#fff;
        cursor: pointer;
        font-size: ${props => props.theme.font.size.medium};
        font-weight: bold;
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
