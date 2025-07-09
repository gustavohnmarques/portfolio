import * as S from "./Navbar.styles";

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
                    <a href="#home"> Início </a>
                </S.NavLinkItem>
                <S.NavLinkItem
                    variants={fadeInUp}                    
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#projects"> Projetos</a>
                </S.NavLinkItem>
                <S.NavLinkItem
                    variants={fadeInUp}                    
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#contacts"> Contato</a>
                </S.NavLinkItem>
            </S.NavLinks>
        </S.MotionContainer>
    )
}

export default Navbar;