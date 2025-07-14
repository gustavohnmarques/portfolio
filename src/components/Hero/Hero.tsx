import { useTranslation } from "react-i18next";
import * as S from "./Hero.styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import pretty from 'json-stringify-pretty-compact'

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

const Hero: React.FC = () => {

    const { t } = useTranslation()

    const aboutMe = t('aboutMe', { returnObjects: true });
    const codeString = pretty(aboutMe, {
        indent: 2,
        maxLength: 80 
    })


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
                        {t('hero.title')}
                    </S.Subtitle>
                    <S.Description variants={fadeInUp}>
                        {t('hero.subtitle')}
                    </S.Description>

                    <S.CallToAction variants={variants}>
                        <S.MyWorkButton
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('hero.buttons.viewProjects')}
                        </S.MyWorkButton>
                        <S.ContactButton
                            href="#contacts"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('hero.buttons.contactMe')}
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
                            {`const aboutMe: DeveloperProfile = ${codeString};`}
                        </SyntaxHighlighter>
                    </S.CodeDisplay>
                </S.HeroImageContainer>
            </S.HeroContainer>
        </S.MotionContainer>
    )
}

export default Hero;