import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8rem;
    background-color: ${p => p.theme.colors.primary};
    color: #fff;
    padding: 2em;

    img{
        width: 10rem;
    }

    ul{
        width: 20rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        li{
            margin: 20px;
        };

        @media (max-width: 768px) {
            &{
                display: none;
            } 
        }
    }
`