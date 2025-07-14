import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 5%;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
`

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color:rgb(88, 145, 229);
    text-shadow: 0 0 10px rgba(88, 145, 229, 0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .first-word, .second-word {
        font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
        width: 30%;
        flex-direction: column;        
        .first-word {
            font-size: 1.2rem;
        }
        
        .second-word {
            font-size: 0.8rem;
        }
    }
`

export const NavLinks = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  list-style: none;

  &::after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: rgb(88, 145, 229);
        transition: width 0.3s ease;
  }
`

export const NavLinkItem = styled(motion.li)`

    a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        transition: all 0.3 ease;
        position: relative;
        cursor: pointer;
    }

    a::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: rgb(88, 145, 229);
        transition: width 0.3s ease;
    }

    a:hover {
        color: rgb(88, 145, 229);
    }

    a:hover::after {
        width: 100%;
    }

`

export const LanguageButton = styled.button`
    background: transparent;
    color: white;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    backdrop-filter: blur(5px);
    padding: 4px 0;
    border-radius: 50px;
    font-weight: 600;
    font-size: .9em;
    cursor: pointer;
    min-width: 100px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    img {
        object-fit: contain;
        width: 20px;
    }


 
`