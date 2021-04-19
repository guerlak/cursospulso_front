import { useRouter } from "next/router"
import { useRef } from "react"
import { slide as Menu } from "react-burger-menu"
import { FaBars } from "react-icons/fa"


import Social from '../Social/Social'
import * as S from "./style"

interface HeaderProps {
    goTo?: () => void;
}

export default function Header({ goTo }: HeaderProps) {
    const router = useRouter()

    return (
        <S.Container>
            <span style={{ cursor: "pointer" }}
                onClick={() => router.push('/')}><img src="/images/CursosPulso_Logo_Colorida.png" />
            </span>

            <S.NavMenu>
                <a href="#home" className="active" onClick={goTo}>Quem somos</a>
                <a href="#news">Cursos</a>
                <a href="#contact">Contato</a>
                <a href="#about">About</a>
            </S.NavMenu>

            {/* <span className="icon" onClick={() => console.log("teste")}>
                <FaBars />
            </span> */}

            <Social size={25} color={'#fff'} />
        </S.Container >
    )
}