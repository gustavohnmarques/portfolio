import * as S from "./Navbar.styles";
import { useTranslation } from 'react-i18next'
import imagePt from '../../assets/images/pt.png'
import imageEn from '../../assets/images/en.png'

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


const Navbar: React.FC = () => {

    const { t, i18n } = useTranslation()

    return (
        <S.MotionContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <S.Logo>
                <span className="first-word">Gustavo</span>
                <span className="second-word">Marques</span>
            </S.Logo>

            <S.NavLinks
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <S.NavLinkItem
                    variants={fadeInUp}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#home"> {t('header.home')} </a>
                </S.NavLinkItem>
                <S.NavLinkItem
                    variants={fadeInUp}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#projects"> {t('header.projects')}</a>
                </S.NavLinkItem>
                <S.NavLinkItem
                    variants={fadeInUp}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#contacts"> {t('header.contactMe')}</a>
                </S.NavLinkItem>

                <S.NavLinkItem
                    variants={fadeInUp}
                    whileTap={{ scale: 0.95 }}
                >
                    {i18n.language === 'pt' ? (
                        <S.LanguageButton onClick={() => i18n.changeLanguage('en')}>
                            <img src={imageEn} alt="English" />
                            EN
                        </S.LanguageButton>
                    ) : (
                        <S.LanguageButton onClick={() => i18n.changeLanguage('pt')}>
                            <img src={imagePt} alt="Português" />
                            PT
                        </S.LanguageButton>
                    )}

                </S.NavLinkItem>
            </S.NavLinks>
        </S.MotionContainer>
    )
}

export default Navbar;