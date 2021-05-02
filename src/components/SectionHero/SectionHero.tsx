import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as S from "./style"
import { SectionHeroProps } from "../../types/api"

type Props = {
    sectionHero: SectionHeroProps[];
}

const carousel = [
    {
        url: "/images/carousel-img-1.png",
        title: "Matrículas Abertas",
        description: "Forme o grupo e nos consulte para descontos especiais"
    },
    {
        url: "/images/carousel-img-2.png",
        title: "Matrículas Abertas",
        description: "Forme o grupo e nos consulte para descontos especiais"
    },
    {
        url: "/images/carousel-img-3.png",
        title: "Matrículas Abertas",
        description: "Forme o grupo e nos consulte para descontos especiais"
    },
    {
        url: "/images/carousel-img-4.png",
        title: "Matrículas Abertas",
        description: "Forme o grupo e nos consulte para descontos especiais"
    },

]

export default function SectionHero({ sectionHero }: Props) {

    return (
        <S.Wrapper>
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                {/* <div>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[0].Image.url}`} width="100%" />
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[0].Image.url}`} width="100%" />
                    <h2>{sectionHero[0].text}</h2>
                    <h3>{sectionHero[0].descricao}</h3>
                </div> */}

                {carousel.map(img => (
                    <div>
                        <img src={img.url} width="100%" />
                        <h2>{img.title}</h2>
                        <h3>{img.description}</h3>
                    </div>
                ))}

            </Carousel>
        </S.Wrapper>


    )
}