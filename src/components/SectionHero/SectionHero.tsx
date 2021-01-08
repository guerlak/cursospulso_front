
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import * as S from "./style"
import { SectionHeroProps } from "../../types/api"

type Props = {
    sectionHero: SectionHeroProps[];
}

export default function SectionHero({ sectionHero }: Props) {

    console.log(sectionHero);

    return (
        <S.Wrapper>
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[0].Image.url}`} width="100%" />
                    <h2>{sectionHero[0].text}</h2>
                    <h3>{sectionHero[0].descricao}</h3>
                </div>
                <div>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[1].Image.url}`} />
                    <h2>{sectionHero[1].text}</h2>
                    <h3>{sectionHero[1].Descricao}</h3>
                </div>
            </Carousel>
        </S.Wrapper>


    )
}