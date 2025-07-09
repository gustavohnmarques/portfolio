import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.nav)`
    padding: 6rem 5%;
    background: rgb(30, 41, 59);
    position: relative;
`

export const Title = styled(motion.h2)`
    font-size: 2rem;
    color: rgb(88, 145, 229);
    margin-bottom: 1.5rem;
    font-weight: 600;
`

export const SubTitle = styled(motion.p)`
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    padding-right: 40px;
`

export const SocialLink = styled(motion.p)`    
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        color: rgb(88, 145, 229);
    }
    a {
        text-decoration: none;
        color: white;
    }

    a:visited{
        color: white;
    }
`