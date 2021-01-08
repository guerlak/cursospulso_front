import Social from '../Social/Social'
import * as S from "./style"


export default function Header() {
    return (
        <S.Container>
            <img src="/images/CursosPulso_Logo_Colorida.png" />

            <ul>
                <li>Quem somos</li>
                <li>Cursos</li>
                <li>Contato</li>
                <li>Cadastre seu CV</li>
            </ul>
            <Social size={25} color={'#fff'} />
        </S.Container>
    )
}