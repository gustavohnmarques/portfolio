import * as S from "./Projects.styles";
import handIconUrl from "../../assets/hand.svg";

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

const projects = [
    {
        title: "Meu projeto de portfólio",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        image: "https://images.ctfassets.net/3k7cygmwfm7x/1LV0eRnmP3WDXM5aJpA1by/91d71222cd68dd5d15948600c3b6c56c/react_native.jpg",
        techStack: ["React Native", "React Native", "React Native"],
    },
    {
        title: "Meu projeto de portfólio",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        image: "https://images.ctfassets.net/3k7cygmwfm7x/1LV0eRnmP3WDXM5aJpA1by/91d71222cd68dd5d15948600c3b6c56c/react_native.jpg",
        techStack: ["React Native", "React Native", "React Native"],
    },
    {
        title: "Meu projeto de portfólio",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
        image: "https://images.ctfassets.net/3k7cygmwfm7x/1LV0eRnmP3WDXM5aJpA1by/91d71222cd68dd5d15948600c3b6c56c/react_native.jpg",
        techStack: ["React Native", "React Native", "React Native"],
    },

]


const Projects: React.FC = () => {

    const renderCards = () => {
        return projects.map((project, index) => (
            <S.ProjectCard
                className="project-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
    )
}

export default Projects;