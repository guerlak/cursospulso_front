import { useState } from "react";
import * as S from "./style"

export default function SectionForm() {
    const [isSubmitted, setIsSUbmitted] = useState(false);
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [fone, setFone] = useState<string>("");
    const [recado, setRecado] = useState<string>("");

    const submitForm = e => {
        e.preventDefault();
        console.log("Submiting form");
        setIsSUbmitted(true)
    }

    return (
        <S.Wrapper>
            {isSubmitted ? <h1>Obrigado :)</h1> :
                <>
                    <S.Text>Ficou interessado? Entre em contato</S.Text>
                    <S.Form>
                        <form onSubmit={submitForm}>
                            <input type="text" placeholder='Nome' onChange={e => setNome(e.target.value)} /><br></br>
                            <input placeholder='Telefone ()' onChange={e => setEmail(e.target.value)} /><br></br>
                            <input type="text" placeholder='Email' onChange={e => setFone(e.target.value)} /><br></br>
                            <textarea placeholder='Deixe seu recado' onChange={e => setRecado(e.target.value)} /><br></br>
                            <input id="submit-btn" type="submit" value="Enviar" /><br></br>
                        </form>
                    </S.Form>
                </>
            }
        </S.Wrapper>
    )
}