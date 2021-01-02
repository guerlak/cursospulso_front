import * as S from "./style"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Social({ size }) {
    return (
        <S.Container>
            <a href="https://www.facebook.com/cursospulso" target="_blank">
                <FaFacebook size={size} />
            </a>
            <a href="https://www.instagram.com/cursospulso/" target="_blank">
                <FaInstagram size={size} />
            </a>
        </S.Container>
    )
}