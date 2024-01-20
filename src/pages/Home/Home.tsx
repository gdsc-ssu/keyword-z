// 메인 홈 페이지

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import catAnimation from '../../assets/Anim/cat_2.json';
import Logo from '../../assets/logo/Logo-Vector.png';
import mainPng from '../../assets/thumbnail.png';

const HomeContainer = styled.div`
  max-width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ff58b8;
  padding: 0 20px;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  align-self: flex-end;
  width: 55px;
  height: 28px;
  margin-top: 25px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Title = styled.p`
  color: #fff;
  text-shadow:
    -2px 0 black,
    0 2px black,
    2px 0 black,
    0 -2px black,
    4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: DNFBitBitv2;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000;
`;

const SpecialText = styled.span`
  color: var(---, #9cff00);
  font-family: 'DNFBitBitv2';
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000;
`;

const StyledLottie = styled(Lottie)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const StartButton = styled.button`
  width: 350px;
  height: 72px;
  border-radius: 12px;
  border: 3px solid #fff;
  z-index: 2;
  color: var(---, #9cff00);
  text-align: center;
  font-family: DNFBitBitv2;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const VisitorText = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-family: DNFBitBitv2;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
`;

export default function Home() {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate('/quiz');
  };

  return (
    <HomeContainer>
      <LogoImage src={Logo} alt="logo" />
      <TitleContainer>
        <Title>
          2023 <SpecialText>MZ</SpecialText>
          <br />
          트렌드 능력고사
        </Title>
      </TitleContainer>
      <img src={mainPng} alt="Thumbnail" />
      <StyledLottie animationData={catAnimation} loop />
      <BottomContainer>
        <StartButton onClick={goToQuiz}>시작하기</StartButton>
        <VisitorText>방문자수 | 103</VisitorText>
      </BottomContainer>
    </HomeContainer>
  );
}
