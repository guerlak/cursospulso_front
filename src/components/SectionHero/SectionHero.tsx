import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as S from "./style"
import { SectionHeroProps } from "../../types/api"

type Props = {
    sectionHero: SectionHeroProps[];
}

const carousel = [
    {
        url: "/images/carousel-img-5.png",
        title: "Matrículas Abertas!",
        description: "Forme um grupo e nos consulte para descontos especiais.",
        descriptionMobile: "Forme um grupo e nos consulte para descontos especiais."
    },
    {
        url: "/images/carousel-img-2.png",
        title: "#amigodopulso",
        description: "Traga um amigo e ganhe 10% de desconto para os dois + isenção da taxa de matrícula.",
        descriptionMobile: "Traga um amigo e ganhe 10% de desconto para os dois."
    },
    {
        url: "/images/carousel-img-3.png",
        title: "Você sabia?",
        description: "Após o término do curso, nossos alunos recebem um diploma e auxílio para elaboração de um novo CV mais competitivo.",
        descriptionMobile: "Nossos alunos recebem um diploma e auxílio para elaboração de um novo CV mais competitivo."
    },
    {
        url: "/images/carousel-img-4.png",
        title: "Te ajudamos!",
        description: "Os 10 primeiros inscritos ganham 10% de desconto. O seu primeiro passo rumo a uma carreira de sucesso. Inscreva-se já!",
        descriptionMobile: "Os 10 primeiros inscritos ganham 10% de desconto. Inscreva-se já!"
    }

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

                {carousel.map(c => (
                    <div>
                        <img src={c.url} width="100%" />
                        <S.CarouselTextContainer>
                            <h2>{c.title}</h2>
                            <h3 className="description">{c.description}</h3>
                            <h3 className="descriptionMobile">{c.descriptionMobile}</h3>
                        </S.CarouselTextContainer>
                    </div>
                ))}

            </Carousel>
        </S.Wrapper>


    )
}