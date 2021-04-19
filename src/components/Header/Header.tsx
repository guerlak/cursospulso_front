import { useRouter } from "next/router"
import { useRef } from "react"
import { slide as Menu } from "react-burger-menu"


import Social from '../Social/Social'
import * as S from "./style"

export default function Header({ goTo }) {
    const router = useRouter()

    return (
        <S.Container>
            <span style={{ cursor: "pointer" }}
                onClick={() => router.push('/')}><img src="/images/CursosPulso_Logo_Colorida.png" />
            </span>

            <ul>
                <li>
                    <span style={{ cursor: "pointer" }} onClick={goTo}>Quem somos</span>
                </li>
                <li>Cursos</li>
                <li>Contato</li>
                <li><span style={{ cursor: "pointer" }}
                    onClick={() => router.push('/formulario')}>Cadastrar CV</span>
                </li>
            </ul>
            <Social size={25} color={'#fff'} />
        </S.Container >
    )
}