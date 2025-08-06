import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.div)`
    padding: 6rem 5%;
    background-color: rgb(15, 23, 42);
    position: relative;
`

export const Title = styled(motion.h2)`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
`

export const Description = styled.p`
    text-align: center;
    color: rgb(148, 163, 184);
    font-size: 1.125rem;
    margin-bottom: 4rem;
`

export const ProjectGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`

export const ProjectCard = styled(motion.div)`
    background: rgb(30, 41, 59);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3 ease;
    border: 1px solid rgba(148, 163, 184, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    
    h3 {
        padding: 1.5rem 1.5rem 0.5rem;
        font-size: 1.5rem;
        color: rgb(226, 232, 240);
    }

    h4 {
        padding: 0 1.5rem;
        font-size: .85rem;
        margin: 0;
        color: rgba(113, 124, 139, 1);
        font-style: italic;        

    }

    p {
        padding: 0 1.5rem 1rem;
        color: rgb(148, 163, 184);
        flex-grow: 1;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgb(124, 58, 237) 0%,
            rgb(88, 145, 229) 100%
        );

        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    &:hover::before{
        opacity: 0.1;
    }

    &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        border-color: rgb(88, 145, 229);     
    }

`

export const ProjectImage = styled(motion.div)`
    height: 240px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
        );
        transform: translateX(-100%);
        transition: transform 0.6s ease;
    }
`

export const ProjectTech = styled.div`
    padding: 0 1.5rem 1.5rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    span {
        padding: 0.3rem 0.8rem;        
        border-radius: 50px;
        font-size: 0.8rem;
        color: rgb(88, 145, 229);
        border: 1px solid rgba(88, 145, 229, 0.2);
    }
`

export const ClickIndicator = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 170px;
    height: 170px;
    background-color: rgba(86, 125, 184, 0.7);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(88, 145, 229, 0.3);    
    transition: all 0.3s ease;

    img {
        width: 40%;
        height: 40%;
         filter: brightness(0) saturate(100%) invert(60%) sepia(47%) saturate(1247%) hue-rotate(193deg) brightness(95%) contrast(92%);
    }


    .project-card:hover & {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }
`