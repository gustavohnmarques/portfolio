import * as S from "./Hero.styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const json = `const aboutMe: DeveloperProfile = {
  codename: "GustavoMarques",  
  role: "Desenvolvedor Fullstack",
  stack: {
    linguagens: ["JavaScript", "TypeScript", "PHP"],
    frontend: ["ReactJS", "React Native", "Flutter", "Vite"],
    backend: ["Node.js", "Docker", "MySQL", "Redis"],
    ferramentas: ["GitHub", "Firebase", "OneSignal","Linux", "Nginx"],
  },
  características: [
    "guerreiro freelancer",    
    "viciado em animações",
    "defensor do modo escuro",
    "integrador supremo de APIs",
    "ninja do terminal Linux",
    "quebrador de galhos profissional",
  ],
    disponibilidade: "Aberto para novos desafios",
};`

const Hero: React.FC = () => {
    return (
        <S.MotionContainer
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <S.HeroContainer>
                <S.HeroContent
                    variants={variants}
                    initial="initial"
                    animate="animate"
                >
                    <S.Subtitle variants={fadeInUp}>
                        {" "}
                        Criador de Soluções Fullstack
                    </S.Subtitle>
                    <S.Description variants={fadeInUp}>
                        Com mais de 7 anos de experiência entregando 🚀 soluções escaláveis e performáticas para 📱 web e mobile, com forte atuação como freelancer em projetos diversos.
                    </S.Description>

                    <S.CallToAction variants={variants}>
                        <S.MyWorkButton
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {" "}
                            Ver projetos
                        </S.MyWorkButton>
                        <S.ContactButton
                            href="#contacts"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Fale comigo
                        </S.ContactButton>
                    </S.CallToAction>
                    <S.SocialLinks variants={variants}>
                        <S.SocialLink href="https://github.com/gustavohnmarques/" target="_blank">
                            <i className="fab fa-github"> </i>
                        </S.SocialLink>
                        <S.SocialLink href="https://www.linkedin.com/in/gustavo-marques-b79a3725a/" target="_blank">
                            <i className="fab fa-linkedin"> </i>
                        </S.SocialLink>
                    </S.SocialLinks>
                </S.HeroContent>

                <S.HeroImageContainer
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <S.CodeDisplay>
                        <SyntaxHighlighter
                            language="typescript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100%",
                                borderRadius: "20px",
                                background: "rgba(30, 41, 59, 0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: 50,
                            }}
                            style={vscDarkPlus}
                        >
                            {json}
                        </SyntaxHighlighter>
                    </S.CodeDisplay>
                </S.HeroImageContainer>
            </S.HeroContainer>
        </S.MotionContainer>
    )
}

export default Hero;