import { useCallback } from "react"
import { SectionOneProps } from "../../types/api"
import * as S from "./style"
import Button from "../Button/index"

type Props = {
    sectionOne: SectionOneProps;
}

export default function SectionOne({ sectionOne }: Props) {

    const test = useCallback(() => {
        console.log('teste');
    }, [])

    return (
        <S.Container>
            <div>

                <S.Texto>{sectionOne.Texto}</S.Texto>
                <Button size="medium">Matricule-se já</Button>
            </div>
            <S.Image src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}${sectionOne.Imagem.url}`} />
        </S.Container>
    )
}