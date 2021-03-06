import Button from "../Button"
import * as S from "./style"

export default function SectionConteudoProg() {
    return (
        <S.Wrapper>
            <h1>Conteudo Programático</h1>

            <div>
                <S.Rectangle>Básico Apostila</S.Rectangle>
                <S.Rectangle>Base Legal</S.Rectangle>
                <S.Rectangle>Curativos</S.Rectangle>
                <S.Rectangle>Primeiros Socorros</S.Rectangle>
                <S.Rectangle>Ética</S.Rectangle>
                <S.Rectangle>Alimentação</S.Rectangle>
                <S.Rectangle>Doenças Degenerativas</S.Rectangle>
                <S.Rectangle>Fisioterapia</S.Rectangle>
                <S.Rectangle>Cuidados Palativos</S.Rectangle>
                <S.Rectangle>Gestão de conflitos</S.Rectangle>
                <S.Rectangle>Comunicação não violenta</S.Rectangle>
                <S.Rectangle>Gestão do Paciente</S.Rectangle>
            </div>
            <Button size="lineTwo">Conteudo Detalhado Saiba Mais</Button>

            <h2>Investimento</h2>
            <h1>R$ --,-- </h1>

            <div>
                <S.RectangleBox>
                    <div>Duração</div>
                    <div>160 horas divididas em dois módulos de 80 horas, sendo 80 horas de aula presencial e 80 horas de aula online.</div>
                </S.RectangleBox> <S.RectangleBox>
                    <div>Material Didático</div>
                    <div>Apostilas digitais, que podem ser consultadas quando necessário mesmo após o término do curso.</div>
                </S.RectangleBox> <S.RectangleBox>
                    <div>Pré-Requisito</div>
                    <div>A partir dos 18 anos - Ensino Fundamental Completo</div>
                </S.RectangleBox>
            </div>

        </S.Wrapper>
    )
}