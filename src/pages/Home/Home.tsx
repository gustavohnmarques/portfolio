import type React from "react";
import * as S from "./Home.styles";
import Navbar from "../../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <S.Container>
        <Navbar />
    </S.Container>
  )
}

export default Home;