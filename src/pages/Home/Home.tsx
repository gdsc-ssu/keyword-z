//메인 홈 페이지

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MobileFrame from '../../components/moblieFrame';
import Logo from '../../assets/logo/Logo-Vector.png';
import lottie from 'lottie-web';
import cat from '../../assets/Anim/cat.json';
import { useNavigate } from 'react-router-dom';
import HomeWrap from './HomeWrap';

export default function Home() {
  const catAnimation = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (catAnimation.current) {
      const anim = lottie.loadAnimation({
        container: catAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: cat,
      });

      return () => anim.destroy();
    }
  }, []);

  const goToQuiz = () => {
    navigate('/quiz');
  };

  return (
    <>
      <MobileFrame>
        <HomeWrap>
          <div className="header-container">
            <img className="logo-img" src={Logo} />
          </div>
          <div className="title-container">
            <p className="title">
              2023 <SpecialText>MZ</SpecialText>
              <br />
              트렌드 능력고사
            </p>
          </div>
          <div className="anim-container">
            <div className="anim-cat" ref={catAnimation} />
            <div className="start-button" onClick={goToQuiz}>
              <p className="start-text">시작하기</p>
            </div>
          </div>
          <div className="bottom-container">
            <p className="visits-text">방문자수 | 1234</p>
          </div>
        </HomeWrap>
      </MobileFrame>
    </>
  );
}

const SpecialText = styled.span`
  color: var(---, #9cff00);
  font-family: 'DNF Bit Bit v2';
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000;
`;
