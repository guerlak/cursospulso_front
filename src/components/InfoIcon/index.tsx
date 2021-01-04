
import * as S from "./style"

type Props = {
    icon: string;
    title?: string;
    description: string;
}


export default function InfoIcon({ icon, description, title }: Props) {
    return (
        <S.Wrapper>
            <S.Icon><img src={icon} /></S.Icon>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}