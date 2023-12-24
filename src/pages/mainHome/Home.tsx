import styled from 'styled-components';
import MobileFrame from '../../components/moblieFrame';
import Logo from '../../assets/logo/Logo-Vector.png';

export default function Home() {
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
        </HomeWrap>
      </MobileFrame>
    </>
  );
}

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
    margin-top: 20px;
    margin-left: 314px;
  }

  .title-container {
    width: 329px;
    height: 150px;
    flex-shrink: 0;
    margin-top: 90px;
  }
  .title {
    color: #fff;
    text-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
    font-family: DNF Bit Bit v2;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SpecialText = styled.span`
  color: var(---, #9cff00);
  font-family: 'DNF Bit Bit v2';
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
