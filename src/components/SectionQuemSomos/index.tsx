
import InfoIcon from "../InfoIcon"
import * as S from "./style"

const descriptions = {
    ideia: "Profissionais com experiência na área e que buscam atualizar seus conhecimentos.",
    job: "Pessoas que buscam uma reinserção no mercado de trabalho através de uma nova profissão.",
    salary: "Pessoas em busca de melhores salários, exercendo uma das profissões que mais cresce no Brasil.",
    firstJob: "Pessoas em busca de profissionalização e formação para conseguirem o seu primeiro emprego.",
    eldery: "Pessoas com idosos na família que desejam adquirir conhecimentos específicos para cuidar do seu familiar de forma mais adequada."
}

export default function SectionQuemSomos() {

    return (
        <S.Container>
            <h1>Quem Somos</h1>
            <p>
                Somos uma empresa com foco na qualidade de ensino.
                Utilizamos da tecnologia para capacitar e formar nossos alunos para o mercado de trabalho, dos mais experientes que buscam atualizar seus conhecimentos, aos iniciantes que têm o desafio de conseguir o primeiro emprego.
                Nossa linguagem é simples, nossas aulas são didáticas e nossos cursos são acessíveis a todos.
            </p>

            <h1>Para quem se destina</h1>

            <S.IconsWrapper>
                <div>
                    <InfoIcon description={descriptions.ideia} icon="/icons/ideia-pulso-icon.svg" />
                    <InfoIcon description={descriptions.job} icon="/icons/job-pulso-icon.svg" />
                    <InfoIcon description={descriptions.salary} icon="/icons/salary-pulso-icon.svg" />
                </div>
                <div>
                    <InfoIcon description={descriptions.firstJob} icon="/icons/first-job-pulso-icon.svg" />
                    <InfoIcon description={descriptions.eldery} icon="/icons/eldery-pulso-icon.svg" />
                </div>
            </S.IconsWrapper>
        </S.Container>
    )
}