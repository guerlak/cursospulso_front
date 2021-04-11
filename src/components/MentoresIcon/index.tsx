
import * as S from "./style"

type IconProps = {
    image: string;
    name: string;
    description: string[];
    role: string;
}

export default function InfoIcon({ image, description, name, role }: IconProps) {
    return (
        <S.Wrapper>
            <img src={image} />
            <S.Name>{name}</S.Name>
            <h2>{role}</h2>
            {description.map(x =>
                <S.Text>{x}</S.Text>
            )}
        </S.Wrapper>
    )
}