
import * as S from "./style"

type Props = {
    icon: string;
    title?: string;
    description: string;
    size?: string;
}


export default function InfoIcon({ icon, description, title, size }: Props) {
    return (
        <S.Wrapper>
            <S.Icon size="6rem"><img src={icon} /></S.Icon>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}