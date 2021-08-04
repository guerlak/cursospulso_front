
import { useRef } from "react";
import InfoIcon from "../InfoIcon"
import MentoresIcon from "../MentoresIcon"
import Button from "../Button/index"
import * as S from "./style"

import { descriptions } from '../../services/data'

export default function SectionQuemSomos({ tagRef }) {

    return (
        <S.Container ref={tagRef}>

            <h1>Quem Somos</h1>
            <p>
                Uma empresa com foco na qualidade de ensino.
                Utilizamos da tecnologia para capacitar e formar nossos alunos para o mercado de trabalho,
                dos mais experientes que buscam atualizar seus conhecimentos, aos iniciantes que têm o
                desafio de conseguir o primeiro emprego.
                Nossa linguagem é simples, nossas aulas são didáticas e nossos cursos
                são acessíveis.
            </p>

            <S.IconsWrapper>
                <InfoIcon size="10px" title="Missão" description={descriptions.missao} icon="/icons/mission-pulso-icon.svg" />
                <InfoIcon title="Visão" description={descriptions.visao} icon="/icons/vision-icon.svg" />
                <InfoIcon title="Valor" description={descriptions.valor} icon="/icons/valor-pulso-icon.svg" />
            </S.IconsWrapper>

            <h1>Nossos Mentores</h1>

            <S.MentoresScrollX>
                <MentoresIcon role="Administradora" name="Mariana Gabriel Pereira" description={descriptions.mentores.mariana} image="/images/Mariana-Gabriel-pb.png" />
                <MentoresIcon role="Advogado" name="Pedro Aquino" description={descriptions.mentores.pedro} image="/images/Pedro-Aquino.png" />
                <MentoresIcon role="Psicóloga" name="Juliana Gabriel Pereira" description={descriptions.mentores.ju} image="/images/juliana.png" />
                <MentoresIcon role="Enfermeira" name="Erika Melo" description={descriptions.mentores.erica} image="/images/Erica-pb.png" />
            </S.MentoresScrollX>

            <h1>Cursos Oferecidos</h1>

            <S.CursosOferecidos>
                <img src="images/curso1.png" />
                <div>
                    <h2>Cuidador de Idosos</h2>
                    <br></br>
                    <p>
                        Curso especializado na formação e aperfeiçoamento de Cuidadores de Idosos,
                        um dos segmentos profissionais que mais crescem no Brasil.
                        Aulas teóricas e práticas com enfermeiros especializados e os melhores profissionais do mercado de trabalho.
                    </p>
                    <a href="https://wa.me/5521967870083" target="_blank">
                        <Button>
                            Matricule-se já e saia na frente
                        </Button>
                    </a>

                </div>
            </S.CursosOferecidos>

            <h1>Nossos Diferenciais</h1>

            <S.Diferenciais>
                <div>Apoio na confecção do currículo após o término do curso.</div>
                <div>Cadastro do currículo no nosso banco de dados para possível colocação no mercado.</div>
                <div>Suporte durante o curso para dúvidas e mais 3 meses de bônus.</div>
                <div>Curso humanizado, com foco no diálogo.</div>
                <div>Planilha de evolução do paciente.</div>
                <div>Professores qualificados, com experiência e influentes no mercado.</div>
            </S.Diferenciais>

            <h1>Para quem se destina</h1>

            <S.IconsWrapper>
                <InfoIcon description={descriptions.ideia} icon="/icons/ideia-pulso-icon.svg" />
                <InfoIcon description={descriptions.job} icon="/icons/job-pulso-icon.svg" />
                <InfoIcon description={descriptions.firstJob} icon="/icons/first-job-pulso-icon.svg" />
                <InfoIcon description={descriptions.salary} icon="/icons/salary-pulso-icon.svg" />
                <InfoIcon description={descriptions.eldery} icon="/icons/eldery-pulso-icon.svg" />
            </S.IconsWrapper>

        </S.Container>
    )
}