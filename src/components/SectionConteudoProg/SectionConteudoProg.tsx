import Button from "../Button"
import * as S from "./style"

export default function SectionConteudoProg() {
    return (
        <S.Wrapper>
            <h1>Conteúdo Programático</h1>
            <span className="subTitle">Curso Cuidador de Idosos</span>

            <div>
                <S.Rectangle>Alimentação</S.Rectangle>
                <S.Rectangle>Base Legal</S.Rectangle>
                <S.Rectangle>Comunicação Não Violenta</S.Rectangle>
                <S.Rectangle>Cuidado Geral com a Pessoa Idosa</S.Rectangle>
                <S.Rectangle>Doenças Degenerativas</S.Rectangle>
                <S.Rectangle>Ética</S.Rectangle>
                <S.Rectangle>Gestão do Cliente</S.Rectangle>
                <S.Rectangle>Gestão de conflitos</S.Rectangle>
                <S.Rectangle>Noções de Cuidados Palativos</S.Rectangle>
                <S.Rectangle>Primeiros Socorros</S.Rectangle>
            </div>
            <Button size="lineTwo"><p>Conteudo Detalhado</p> <p><strong>Saiba Mais</strong></p></Button>


            <S.Investimento>
                <p>Investimento:</p>
                <h1>R$ --,-- </h1>
            </S.Investimento>

            <div>
                <S.RectangleBox>
                    <div className="title">Forma de Pagamento</div>
                    <div>10% de desconto para pagamentos a vista ou até 5x no cartão de crédito sem juros.</div>
                </S.RectangleBox>
                <S.RectangleBox>
                    <div className="title">Duração</div>
                    <div>160 horas divididas em dois módulos de 80 horas, sendo 80 horas de aula presencial e 80 horas de aula online.</div>
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

        </S.Wrapper>
    )
}