import styled from 'styled-components'


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
 
    h2{
        font-size: 3rem;
        color: #fff;
        text-align: left;
        text-shadow: 2px 2px #333;
        @media(max-width: 800px) {
            font-size: 1.2rem;
        }
    } 
    
    h3{
        font-size: 1.6rem;
        font-weight: 300;
        color: #fff;
        text-align: left;
        margin-top: 20px;
        @media(max-width: 800px) {
            font-size: 0.7rem;
            margin-top: 0.5rem;
        }
       
    }
`

export const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25rem;
    height: 18rem;
    position: absolute;
    top: 100px;
    right: 10%;
    .descriptionMobile{
        display: none;
    }   
    
    @media(max-width: 800px) {
        top: 1rem;
        right: 01rem;
        width: 10rem;
        height: 18rem;
        .descriptionMobile{
            display: block;
        }
        .description{
            display: none;
        }
       
    }

    
`
