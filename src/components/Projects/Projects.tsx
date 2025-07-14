import * as S from "./Projects.styles";
import handIconUrl from "../../assets/hand.svg";
import { Suspense, useCallback, useState } from "react";
import ModalProjectDetails from "../ModalProjectDetails/ModalProjectDetails";
import type { Project } from "../../types/Project.types";
import { useTranslation } from "react-i18next";

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


const Projects: React.FC = () => {

    const { t } = useTranslation()

    const projects = t('projects.projects', { returnObjects: true }) as Project[]
    
    const [indexDetailedProject, setindexDetailedProject] = useState<number>();

    const handleCardClick = useCallback((index: number) => {
        setindexDetailedProject(index);
    }, []);

    const renderCards = useCallback(() => {
        
        if (!projects || projects.length === 0) {
            return <></>;
        }
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
    }, [projects]);

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
                    {t('projects.title')}
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