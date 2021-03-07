
import { useRef } from "react";
import InfoIcon from "../InfoIcon"
import MentoresIcon from "../MentoresIcon"
import * as S from "./style"

const descriptions = {
    mentores: {
        mariana: "Administradora Pós-Graduada: Gestão Empresarial 21 anos de experiência em administração e relacionamento. Professora",
        pedro: "Advogado 18 anos de experiência em Home Care Pós-Graduado: Responsabilidade CivilPós-Graduado: Mediação de Conflitos Professor",
        ju: "Psicóloga Facilitadora de diálogo 18 anos de experiência em Home Care Pós-Graduada: Gestão de Pessoas Mestrado: Mediação de Conflitos Professora"
    },
    missao: "Formar profissionais qualificados e capazes de conquistar um lugar no mercado de trabalho.",
    valor: "Ética, compromisso, qualidade, transparência, respeito, acolhimento e colaboração.",
    visao: "Introduzir uma nova forma de ensino, qualificando o profissional com ferramentas multidisciplinares, foco no diálogo e na redução dos conflitos.",
    ideia: "Profissionais com experiência na área e que buscam atualizar seus conhecimentos.",
    job: "Pessoas que buscam uma reinserção no mercado de trabalho através de uma nova profissão.",
    salary: "Pessoas em busca de melhores salários, exercendo uma das profissões que mais cresce no Brasil.",
    firstJob: "Pessoas em busca de profissionalização e formação para conseguirem o seu primeiro emprego.",
    eldery: "Pessoas com idosos na família que desejam adquirir conhecimentos específicos para cuidar do seu familiar de forma mais adequada."
}

export default function SectionQuemSomos({ tagRef }) {

    return (
        <S.Container ref={tagRef}>

            <h1>Quem Somos</h1>
            <p>
                Somos uma empresa com foco na qualidade de ensino.
                Utilizamos da tecnologia para capacitar e formar nossos alunos para o mercado de trabalho, dos mais experientes que buscam atualizar seus conhecimentos, aos iniciantes que têm o desafio de conseguir o primeiro emprego.
                Nossa linguagem é simples, nossas aulas são didáticas e nossos cursos são acessíveis a todos.
            </p>

            <S.IconsWrapper>
                <div>
                    <InfoIcon description={descriptions.missao} icon="/icons/mission-pulso-icon.svg" />
                    <InfoIcon description={descriptions.valor} icon="/icons/valor-pulso-icon.svg" />
                    <InfoIcon description={descriptions.visao} icon="/icons/vision-pulso-icon.svg" />
                </div>
            </S.IconsWrapper>

            <h1>Nossos Mentores</h1>

            <S.IconsWrapper>
                <div>
                    <MentoresIcon name="Mariana Gabriel Pereira" description={descriptions.mentores.mariana} image="/icons/mission-pulso-icon.svg" />
                    <MentoresIcon name="Pedro Aquino" description={descriptions.mentores.pedro} image="/icons/valor-pulso-icon.svg" />
                    <MentoresIcon name="Juliana Gabriel Pereira" description={descriptions.mentores.ju} image="/icons/vision-pulso-icon.svg" />
                </div>
            </S.IconsWrapper>

            <h1>Nossos Diferenciais</h1>

            <S.Diferenciais>
                <div>Apoio na confecção do currículo após o término do curso.</div>
                <div>Oportunidade de estágio ao longo do curso, dependendo do desempenho do aluno.</div>
                <div>Cadastro do currículo no nosso banco de dados para possível colocação no mercado.</div>
            </S.Diferenciais>

            <S.Diferenciais>
                <div>Suporte durante o curso para dúvidas e mais 3 meses de bônus.</div>
                <div>Curso humanizado, com foco no diálogo e ministrado pelos profissionais mais influentes do mercado.</div>
                <div>Planilha de evolução  do paciente.</div>
            </S.Diferenciais>
            
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