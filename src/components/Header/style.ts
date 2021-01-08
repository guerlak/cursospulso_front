import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: ${p => p.theme.colors.primary};
    color: #fff;
    padding: 2em 2em;


    img{
        width: 150px;
    }

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        width: 25em;
        li{
            margin: 20px;
        }
    }
`