import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.nav)`
    min-height: 100vh;
    background: linear-gradient(
    135deg,
    rgb(15, 23, 42) 0%,
    rgb(52, 87, 138) 100%
    );
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
    overflow: hidden;
`

export const HeroContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 767px) {
        flex-direction: column;
        text-align: center;
        gap: 3rem;
        padding-top: 120px;
    }
`

export const HeroContent = styled(motion.div)`
    flex: 1;
    text-align: left;
    max-width: 600px;
    position: relative;
    z-index: 2;

    @media (max-width: 767px) {
        text-align: center;
        max-width: 100%;
    }
`

export const HeroImageContainer = styled(motion.div)`
    flex: 1;
    position: relative;
    max-width: 600px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Title = styled(motion.h1)`
    font-size: 4.5rem;
    font-weight: 800;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    position: relative;
    margin-bottom: 1rem;
    line-height: 1.1;
`

export const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: rgb(88, 145, 229);
  margin-bottom: 1.5rem;
  font-weight: 600;
`

export const Description = styled(motion.p)`
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.7;
`

export const CallToAction = styled(motion.div)`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    a {
        padding: 0.8rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 160px;
    }

    @media (max-width: 767px) {
        justify-content: center;
        a {
            min-width: auto;
        }
    }

`

export const MyWorkButton = styled(motion.a)`
    background: white;
    color: rgb(88, 145, 229);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    border: 2px solid white;
`

export const ContactButton = styled(motion.a)`

    background: transparent;
    color: white;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    backdrop-filter: blur(5px);

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
        );
        transition: 0.5s;
    }

    &:hover::before {
        left: 100%;
    }
`

export const SocialLinks = styled(motion.div)`
    display: flex;
    gap: 1.5rem;    

    @media (max-width: 767px) {
        justify-content: center;        
    }
`

export const SocialLink = styled(motion.a)`
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: rgb(88, 145, 229);
    }


`

export const CodeDisplay = styled(motion.div)`
    width: 100%;
`