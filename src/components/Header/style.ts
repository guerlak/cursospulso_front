import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: ${p => p.theme.colors.primary};
    color: #fff;
    padding: 2em;
    border-bottom: 3px solid #fff;

    img{
        width: 10rem;
    }
    .icon{
        display: none;
    }

    @media (max-width: 768px) {
        .icon{
            display: block;
        }
    }
`

export const NavMenu = styled.div`
    a{
        color: #fff;
        text-decoration: none;
        margin: 1rem;
    }
   
    @media (max-width: 768px) {
        display: none;
    }
`