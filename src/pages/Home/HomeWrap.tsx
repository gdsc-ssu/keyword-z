import styled, { keyframes } from 'styled-components';

const catMoveAndGrow = keyframes`
 0% {
    transform: translateX(80px) scale(0.5); 
  }
  25% {
    transform: translateX(20px) scale(0.6); 
  }
  50% {
    transform: translateX(-20px) scale(0.8); 
  }
  75% {
    transform: translateX(10px) scale(0.9); 
  }
  100% {
    transform: translateX(0) scale(1); 
  }
`;

const HomeWrap = styled.div`
  background: var(---, #ff58b8);
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .logo-img {
    width: 55px;
    height: 28px;
    flex-shrink: 0;
    margin-top: 25px;
    margin-left: 325px;
  }

  .title-container {
    width: 339px;
    height: 160px;
    flex-shrink: 0;
    margin-top: 110px;
  }
  .title {
    color: #fff;
    text-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
    font-family: DNF Bit Bit v2;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    stroke-width: 2px;
    stroke: #000;
  }
  .anim-container {
    width: 373.439px;
    height: 607.315px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
  }
  .anim-cat {
    animation: ${catMoveAndGrow} 3s ease-in-out;
  }
  .start-button {
    width: 345px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 3px solid #fff;
    background: var(---, #1f1f1f);
    cursor: pointer;
    margin-block-start: 20px;
  }
  .start-text {
    display: flex;
    width: 193px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(---, #9cff00);
    text-align: center;
    font-family: DNF Bit Bit v2;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 16px 76px;
  }
  .bottom-container {
    margin-top: 60px;
  }
  .visits-text {
    color: #fff;
    font-family: DNF Bit Bit v2;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default HomeWrap;
