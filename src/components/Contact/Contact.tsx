import { useTranslation } from "react-i18next";
import * as S from "./Contact.styles";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const Contact: React.FC = () => {

    const { t } = useTranslation()

    return (
        <S.MotionContainer
            id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >

            <S.Title variants={fadeInUp}>
                {t('footer.title')}
            </S.Title>

            <S.SubTitle variants={fadeInUp}>
                {t('footer.subtitle')}
            </S.SubTitle>

            <S.SocialLink><a href="mailto:gustavohnmarques@gmail.com" target="_blank">{t('footer.email')}</a></S.SocialLink>
            <S.SocialLink><a href="https://wa.me/5517991640256" target="_blank">{t('footer.whatsapp')}</a></S.SocialLink>

        </S.MotionContainer>
    )
}

export default Contact;