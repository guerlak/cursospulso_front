

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import * as S from "./style"
import { SectionHeroProps } from "../../types/api"

type Props = {
    sectionHero: SectionHeroProps[];
}

export default function SectionHero({ sectionHero }: Props) {


    return (


        <S.Wrapper>
            <AwesomeSlider >
                <div data-src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[0].Image.url}`} />
                <div data-src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionHero[1].Image.url}`} />
            </AwesomeSlider>
        </S.Wrapper>


    )
}