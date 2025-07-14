import * as S from "./Navbar.styles";
import { useTranslation } from 'react-i18next'
import imagePt from '../../assets/images/pt.png'
import imageEn from '../../assets/images/en.png'
import useWindowInfo from "../../hooks/useWindowInfo";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

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
    const { isMobile } = useWindowInfo();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                closeMobileMenu();
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const renderMenuItems = () => (
        <>
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
        </>
    )

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

                {!isMobile && renderMenuItems()}


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


                {isMobile && (
                    <S.NavLinkItem
                        variants={fadeInUp}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMobileMenu}
                        style={{ cursor: 'pointer' }}
                    >
                        <i className={"fa-solid fa-bars"}></i>
                    </S.NavLinkItem>
                )}
            </S.NavLinks>


            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <>
                        <S.MobileMenuOverlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeMobileMenu}
                        />
                        <S.MobileMenu
                            initial={{ x: 500 }}
                            animate={{ x: 0 }}
                            exit={{ x: 500 }}
                            transition={{ duration: 0.6, ease: "easeIn" }}
                            onClick={closeMobileMenu}
                        >
                            <S.CloseIcon className={"fa-solid fa-times"} />
                            <S.NavLinksMobile
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                            >
                                {renderMenuItems()}
                            </S.NavLinksMobile>
                        </S.MobileMenu>
                    </>
                )}
            </AnimatePresence>

        </S.MotionContainer>
    )
}

export default Navbar;