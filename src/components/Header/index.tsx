import { useRouter } from "next/router"
import { useRef } from "react"

import Social from '../Social/Social'
import * as S from "./style"

interface HeaderProps {
    goTo: {
        quemSomosHandler?: () => void;
        footerHandler?: () => void;
    }
}

export default function Header({ goTo }: HeaderProps) {
    const router = useRouter()

    return (
        <S.Container>
            <span style={{ cursor: "pointer" }} onClick={() => router.push('/')}>
                <img src="/images/CursosPulso_Logo_Colorida.png" />
            </span>

            <S.NavMenu>
                <a href="#home" onClick={goTo.quemSomosHandler}>Quem somos</a>
                <a href="#cursos">Cursos</a>
                <a href="#contato" onClick={goTo.footerHandler}>Contato</a>
                <a href="#cadastro">Cadastro CV</a>
            </S.NavMenu>

            {/* <span className="icon" onClick={() => console.log("teste")}>
                <FaBars />
            </span> */}

            <Social size={25} color={'#fff'} />
        </S.Container >
    )
}