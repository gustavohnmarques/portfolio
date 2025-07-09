import * as S from "./Contact.styles";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const Contact: React.FC = () => {
    return (
        <S.MotionContainer
            id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >

            <S.Title variants={fadeInUp}>
                Vamos conversar?
            </S.Title>

            <S.SubTitle variants={fadeInUp}>
                Estou sempre aberto a novas oportunidades e colaborações. Se você tem uma ideia, projeto ou apenas quer trocar uma ideia, sinta-se à vontade para entrar em contato!
            </S.SubTitle>

            <S.SocialLink><a href="mailto:gustavohnmarques@gmail.com" target="_blank">📧 E-mail: gustavohnmarques@gmail.com</a></S.SocialLink>
            <S.SocialLink><a href="https://wa.me/5517991640256" target="_blank">📱 WhatsApp: (17) 9 99164-0256</a></S.SocialLink>

        </S.MotionContainer>
    )
}

export default Contact;