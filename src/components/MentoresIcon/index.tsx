
import * as S from "./style"

type Props = {
    image: string;
    name: string;
    description: string;
}

export default function InfoIcon({ image, description, name }: Props) {


    return (
        <S.Wrapper>
            <S.Image><img src={image} /></S.Image>
            <S.Name>{name}</S.Name>
            <S.Text>{description}</S.Text>
        </S.Wrapper>
    )
}