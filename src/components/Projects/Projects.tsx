import * as S from "./Projects.styles";
import handIconUrl from "../../assets/hand.svg";
import integralmenteImage from "../../assets/images/projects/integramente-studioa-capa.webp";
import { Suspense, useCallback, useState } from "react";
import ModalProjectDetails from "../ModalProjectDetails/ModalProjectDetails";
import imagem1 from "../../assets/images/projects/imagem1.webp";
import imagem2 from "../../assets/images/projects/imagem2.webp";
import imagem3 from "../../assets/images/projects/imagem3.webp";
import imagem4 from "../../assets/images/projects/imagem4.webp";
import imagem5 from "../../assets/images/projects/imagem5.webp";
import imagem6 from "../../assets/images/projects/imagem6.webp";
import imagem7 from "../../assets/images/projects/imagem7.webp";
import type { Project } from "../../types/Project.stypes";
import dedent from "dedent";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const projects: Project[] = [
    {
        title: "IntegraMente",
        description: "IntegraMente é um método de análise do perfil psicológico dos colaboradores de uma empresa com o objetivo de identificar as potencialidades...",
        detailDescription: dedent`
            **IntegraMente** é um método de análise do perfil psicológico dos colaboradores de uma empresa com o objetivo de identificar as potencialidades e os desafios dos indivíduos e auxiliar em seu desenvolvimento pessoal e profissional.

            ## Características principais:

            - Customização total da interface com paleta de cores e design do cliente
            - Formulários avançados com React Hook Form e validação via Yup  
            - Dashboards interativos construídos com ApexCharts
            - Editor de texto rico com Toast UI React Editor

            ## Tecnologias utilizadas:

            - **Frontend**: Vite, TypeScript, React, MUI
            - **Gráficos**: ApexCharts
            - **Formulários**: React Hook Form, Yup
            - **Estilização**: Emotion, ThemeProvider
        `,
        image: integralmenteImage,
        techStack: ["Vite", "TypeScript", "MUI", "ApexCharts"],
        gallery: [
            { src: 'https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/8182e86841e5768410cf8cd703019da1/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F8182e86841e5768410cf8cd703019da1%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%235872e5', type: 'video' },
            { src: imagem1, type: 'image' },
            { src: imagem2, type: 'image' },
            { src: imagem3, type: 'image' },
            { src: imagem4, type: 'image' },
            { src: imagem5, type: 'image' },
            { src: imagem6, type: 'image' },
            { src: imagem7, type: 'image' },
        ],
        developedFor: "IntegraMente - StudioA",
    },

]


const Projects: React.FC = () => {

    const [indexDetailedProject, setindexDetailedProject] = useState<number>();

    const handleCardClick = useCallback((index: number) => {
        setindexDetailedProject(index);
    }, []);

    const renderCards = () => {
        return projects.map((project, index) => (
            <S.ProjectCard
                className="project-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onClick={() => handleCardClick(index)}
            >
                <S.ProjectImage
                    style={{ backgroundImage: `url('${project.image}')` }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <S.ProjectTech>
                    {project.techStack.map((tech, idx) => (
                        <span key={idx}>{tech}</span>
                    ))}
                </S.ProjectTech>

                <S.ClickIndicator>
                    <img src={handIconUrl} />
                </S.ClickIndicator>
            </S.ProjectCard>
        ));
    }
    return (
        <>
            {indexDetailedProject !== undefined && (
                <Suspense fallback={null}>
                    <ModalProjectDetails
                        onRequestClose={() => setindexDetailedProject(undefined)}
                        {...projects[indexDetailedProject]}
                    />
                </Suspense>
            )}
            <S.MotionContainer
                id="projects"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <S.Title
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Meus Projetos
                </S.Title>
                <S.ProjectGrid
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {renderCards()}
                </S.ProjectGrid>
            </S.MotionContainer>
        </>
    )
}

export default Projects;