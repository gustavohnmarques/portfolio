import type React from "react";
import * as S from "./Home.styles";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import PersonalProjects from "../../components/PersonalProjects/PersonalProjects";

const Home: React.FC = () => {
  return (
    <S.Container>        
        <Navbar />
        <Hero />
        <Projects />
        <PersonalProjects />
        <Contact />
    </S.Container>
  )
}

export default Home;