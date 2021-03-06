
import * as S from "./style"

type Props = {
    icon: string;
    title?: string;
    description: string;
}


export default function InfoIcon({ image, description, title }: Props) {
    return (
        <S.Wrapper>
            <S.Image><img src={icon} /></S.Image>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}