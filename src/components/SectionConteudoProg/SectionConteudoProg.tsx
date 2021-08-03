import Button from "../Button"
import * as S from "./style"

export default function SectionConteudoProg() {
    return (
        <S.Container>
            <h1>Conteúdo Programático</h1>
            <span className="subTitle">Curso Cuidador de Idosos</span>

            <div>
                <S.Rectangle>Atividades Complementares</S.Rectangle>
                <S.Rectangle>Aulas Práticas</S.Rectangle>
                <S.Rectangle>Base Legal e Ética</S.Rectangle>
                <S.Rectangle>Comunicação Não Violenta</S.Rectangle>
                <S.Rectangle>Cuidados Gerais com a Pessoa Idosa</S.Rectangle>
                <S.Rectangle>Fisiologia</S.Rectangle>
                <S.Rectangle>Primeiros Socorros</S.Rectangle>
                <S.Rectangle>Relacionamento Interpessoal</S.Rectangle>
                <S.Rectangle>Saúde Mental</S.Rectangle>
            </div>

            <a href="https://wa.me/5521967870083" target="_blank">
                <Button>Increva-se Já!</Button>
            </a>

            <S.Investimento>
                <p>Investimento:</p>
                <h1>R$ 350,00 </h1>
            </S.Investimento>

            <div>
                <S.RectangleBox>
                    <div className="title">Forma de Pagamento</div>
                    <div>Diversas formas de pagamento, para saber mais entre em contato.</div>
                </S.RectangleBox>
                <S.RectangleBox>
                    <div className="title">Duração</div>
                    <div>160 horas entre aulas práticas, atividades complementares e aulas online.</div>
                </S.RectangleBox>
                <S.RectangleBox>
                    <div className="title">Material Didático</div>
                    <div>Apostilas digitais, que podem ser consultadas quando necessário mesmo após o término do curso.</div>
                </S.RectangleBox>
                <S.RectangleBox>
                    <div className="title">Pré-Requisito</div>
                    <div>A partir dos 18 anos - Ensino Fundamental Completo.</div>
                </S.RectangleBox>
            </div>
        </S.Container >
    )
}