import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'
import Social from '../Social/Social'


import * as S from "./style"

export default function Footer({ tagRef }) {
    return (
        <S.Container ref={tagRef}>

            <img src='/images/logo_vertical_branco.png' />

            <S.Links>
                <a href="">
                    Home
                </a>
                <a href="">
                    Quem Somos
                </a>
                <a href="">
                    Cursos
                </a>
                <a href="">
                    Contato
                </a>
            </S.Links>

            <S.SocialContainer>
                <p>+55 (21) 98904-0189</p>
                <p><i>contato@cursospulso.com.br</i></p>
                <S.Social>
                    <a href="https://www.instagram.com/cursospulso/" target="_blank">
                        <FaWhatsapp />
                    </a>

                    <a href="https://www.instagram.com/cursospulso/" target="_blank">
                        <FaInstagram />
                    </a>

                    <a href="https://www.instagram.com/cursospulso/" target="_blank">
                        <FaFacebook />
                    </a>
                </S.Social>
            </S.SocialContainer>

            <div>
                <p>
                    Av. das Américas, 4200. Bloco 09, sala 107A<br />
                    Centro Empresarial Barrashopping
                </p>

                <p>
                    Barra da Tijuca | Rio de Janeiro - RJ.
                </p>
                <p>
                    Cep: 22640-102
                </p>
            </div>

        </S.Container >
    )
}