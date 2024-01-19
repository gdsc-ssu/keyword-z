import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getResultLevel from '../../utils/getResultLevel';
import Rotate from '../../assets/result/rotate.png';
import getResultContentText from '../../utils/getResultContentText';

const ResultContainer = styled.div`
  max-width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
`;

const LevelContainer = styled.div`
  padding: 20px 0;
  background: #ff58b8;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  text-shadow:
    -2px 0 black,
    0 2px black,
    2px 0 black,
    0 -2px black,
    4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: DNFBitBitv2;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000000;
`;

const SpecialText = styled.span`
  color: #9cff00;
  font-family: 'DNFBitBitv2';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000000;
`;

const TrendScoreText = styled.div`
  display: flex;
  justify-content: center;
  color: #eeff25;
  text-shadow:
    -2px 0 black,
    0 2px black,
    2px 0 black,
    0 -2px black,
    4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: 'DNFBitBitv2';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  stroke-width: 2px;
  stroke: #000000;
  margin-top: 20px;
`;

const LevelText = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
  text-shadow:
    -2px 0 white,
    0 2px white,
    2px 0 white,
    0 -2px white,
    4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: 'DNFBitBitv2';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
`;

const ContentContainer = styled.div<{ level: number }>`
  flex-grow: 1;
  padding: 20px 0;
  background: ${(props) => {
    switch (props.level) {
      case -1000:
        return '#dc52ff';
      case 0:
        return '#85D3FF';
      case 10:
        return '#9CFF00';
      case 50:
        return '#FF8E8E';
      case 10000:
        return '#B0E7FD';
      default:
        return '#dc52ff';
    }
  }};
`;

const ContentText = styled.div`
  display: flex;
  justify-content: center;
  color: #9cff00;
  text-shadow:
    -2px 0 black,
    0 2px black,
    2px 0 black,
    0 -2px black,
    4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: 'DNFBitBitv2';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageContainer = styled.div`
  background: #fdfdfd;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 40px;
`;

const ImageFlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LevelImage = styled.img`
  width: 210px;
  height: 100%;
`;

const ImageLevelText = styled.div`
  margin-top: 20px;
  color: #000;
  text-align: center;
  text-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
  font-family: 'ABeeZee';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LevelContentText = styled.div`
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  text-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
  color: #ff58b8;
  font-family: 'ABeeZee';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 345px;
  height: 67px;
  background: #1f1f1f;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  color: white;
  text-align: center;
  font-family: DNFBitBitv2;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RotateImage = styled.img`
  width: 45px;
  height: 45px;
`;

function Result() {
  const navigate = useNavigate();
  const { count } = useParams();
  const level = getResultLevel(Number(count));
  const { contentText, levelText, image } = getResultContentText(level);

  const handleClickRestart = () => {
    navigate('/quiz', { replace: true });
  };

  return (
    <ResultContainer>
      <LevelContainer>
        <Title>
          2023 <SpecialText>MZ</SpecialText> 트렌드 능력고사
        </Title>
        <TrendScoreText>내 트렌드 점수는?</TrendScoreText>
        <LevelText>LV. {level}</LevelText>
      </LevelContainer>
      <ContentContainer level={level}>
        <ContentText>{contentText}</ContentText>
        <ImageContainer>
          <ImageFlexContainer>
            <LevelImage src={image} />
          </ImageFlexContainer>
          <ImageLevelText>LV.{level}의 당신!</ImageLevelText>
          <LevelContentText>{levelText}</LevelContentText>
        </ImageContainer>
        <ButtonContainer>
          <Button onClick={handleClickRestart}>테스트 다시하기</Button>
          <RotateImage src={Rotate} />
        </ButtonContainer>
      </ContentContainer>
    </ResultContainer>
  );
}

export default Result;
