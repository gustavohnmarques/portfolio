import * as S from "./Projects.styles";
import handIconUrl from "../../assets/hand.svg";
import { Suspense, useCallback, useState } from "react";
import ModalProjectDetails from "../ModalProjectDetails/ModalProjectDetails";
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
        image: '/projects/integramente-studioa/integramente-studioa-capa.webp',
        techStack: ["Vite", "TypeScript", "MUI", "ApexCharts"],
        gallery: [
            { src: 'https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/8182e86841e5768410cf8cd703019da1/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F8182e86841e5768410cf8cd703019da1%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23ae83f6', type: 'video' },
            { src: '/projects/integramente-studioa/imagem1.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem2.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem3.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem4.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem5.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem6.webp', type: 'image' },
            { src: '/projects/integramente-studioa/imagem7.webp', type: 'image' },
        ],
        developedFor: "IntegraMente - StudioA",
    },
    {
        title: "Waymenu",
        description: "Waymenu  uma plataforma de cardápio digital responsivo desenvolvida para restaurantes, lanchonetes e estabelecimentos...",
        detailDescription: dedent`
            **WayMenu** é uma plataforma de cardápio digital responsivo desenvolvida para restaurantes, lanchonetes e estabelecimentos que desejam oferecer uma experiência moderna e personalizada aos seus clientes. O sistema permite montagem de pedidos interativos, autenticação segura e customização visual conforme a identidade do cliente.

            ## Características principais:

            - Montagem interativa de pizzas com divisão dinâmica de fatias em SVG (até 4 partes) e animação via Framer Motion
            - Gerenciamento de cardápio, carrinho e sessão do usuário com Context API e hooks customizados
            - Formulários com validação via React Hook Form e Yup, incluindo orientação UX para campos obrigatórios e limites de seleção
            - Feedback de ações com React Toastify e tratamento de erros em chamadas HTTP com Axios

            ## Tecnologias utilizadas:

            - **Frontend**: Vite, TypeScript, React, MUI
            - **Gerenciamento de estado**: Context API, hooks customizados            
            - **Formulários**: React Hook Form, Yup
            - **Estilização**: Emotion, ThemeProvider
        `,
        image: '/projects/waymenu/waymenu-capa.webp',
        techStack: ["Vite", "TypeScript", "MUI", "Framer Motion"],
        gallery: [
            { src: 'https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/a3e6ef8520fae81831bbaa81c8058dc8/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2Fa3e6ef8520fae81831bbaa81c8058dc8%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23f09400', type: 'video' },
            { src: '/projects/waymenu/imagem1.webp', type: 'image' },
            { src: '/projects/waymenu/imagem2.webp', type: 'image' },
            { src: '/projects/waymenu/imagem3.webp', type: 'image' },
            { src: '/projects/waymenu/imagem4.webp', type: 'image' },
            { src: '/projects/waymenu/imagem5.webp', type: 'image' },
            { src: '/projects/waymenu/imagem6.webp', type: 'image' },
            { src: '/projects/waymenu/imagem7.webp', type: 'image' },
        ],
        developedFor: "Grupo Sifat",
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
                    style={{ backgroundImage: `url('${import.meta.env.VITE_BUCKET_URL}${project.image}')` }}
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