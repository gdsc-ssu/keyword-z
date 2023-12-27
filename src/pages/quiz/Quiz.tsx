import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import MobileFrame from '../../components/moblieFrame';
import question from '../../data/questions';

const Wrapper = styled.div`
  background: var(---, #ff58b8);
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// 맨위 뒤로가기랑 제목 있는 곳

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;
  margin-top: 1.5rem;
`;
const BackButton = styled(IoIosArrowBack)`
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 2.5rem;
  cursor: pointer;
`;
const Title = styled.h2`
  color: #fff;
  text-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: DNF Bit Bit v2;
  font-size: 1.2rem;
  margin-left: 2rem;
`;
const SpecialText = styled.span`
  color: var(---, #9cff00);
  font-family: 'DNF Bit Bit v2';
  font-size: 1.2rem;
  font-style: normal;
  line-height: normal;
`;

interface ITest {
  width: number;
}

const ProgressBar = styled.div`
  width: 350px;
  height: 12px;
  background-color: #d9d9d9;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props: ITest) => props.width}%;
  height: 10px;
  padding: 0;
  text-align: center;
  background-color: #9cff00;
  color: #111;
`;
const Timer = styled.div`
  width: 38px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  /* text 관련 css */
  color: #fdfdfd;
  text-align: center;
  font-family: DNF Bit Bit v2;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-shadow:
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
const Difficulty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  color: #fff;
  font-weight: bold;
  font-family: DNF Bit Bit v2;
  font-size: 1.2rem;
  padding-left: 100px;
`;

const Qimg = styled.img`
  width: 350px;
  height: 250px;
`;
const Qtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-style: normal;
  line-height: normal;
  padding-bottom: 30px;
  color: #fff;
  font-weight: bold;
  font-family: DNF Bit Bit v2;
  font-size: 1.2rem;
`;
const Answers = styled.div`
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Aoption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 30px;

  border-radius: 10px;

  padding: 10px;
  cursor: pointer;
  margin: 10px;
`;
const RadioInput = styled.input``;
const CustomButton = styled.button`
  width: 300px;
  background-color: #ffffff;
  color: black;

  text-align: center;
  font-family: DNF Bit Bit v2;
  font-size: 20px;

  font-weight: 900;
  line-height: normal;

  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #9cff00;
  }
`;

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [correctAnswersCount, setCorrectAnswersCount] = useState(1);
  const [time, setTime] = useState(20);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const maxItem = 10;

  const availableItem = currentQuestionIndex + 1;
  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds <= 0 && currentQuestionIndex === 9) {
      // alert('결과로 넘어갑니다.');
    } else if (seconds < 10) {
      return '0' + String(seconds);
    } else {
      return String(seconds);
    }
  };
  const checkQuizCompletion = () => {
    if (currentQuestionIndex === question.length - 1) {
      alert(`퀴즈가 끝났습니다. 정답 갯수: ${correctAnswersCount}`);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);

      if (time <= 0 && currentQuestionIndex <= question.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTime(20);
        checkQuizCompletion();
      } else if (time <= 0 && currentQuestionIndex === question.length - 1) {
        checkQuizCompletion();
      }
    };
  }, [currentQuestionIndex, time]);

  const handleAnswerClick = () => {
    if (!isButtonDisabled) {
      setButtonDisabled(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTime(20);
        setButtonDisabled(false);
      }, 300);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAnswer = event.target.value;
    const correctAnswer = question[currentQuestionIndex].ans;
    // 정답 갯수를 반환 받아서 나중에 지표로 사용할 듯

    if (selectedAnswer === correctAnswer) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
      console.log(correctAnswer);
    }
  };
  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);

      setTime(20);
      setButtonDisabled(false);
    } else {
      navigate('/');
    }
  };

  const currentQuestion = question[currentQuestionIndex];
  if (!currentQuestion) {
    alert(`퀴즈가 끝났습니다. 정답 갯수: ${correctAnswersCount}`);
    return navigate('/');
  }
  const { title, img, options, difficulty } = currentQuestion;

  return (
    <MobileFrame>
      <Wrapper>
        <Top>
          <BackButton onClick={handleBackClick} />
          <Title>
            2023 <SpecialText>MZ</SpecialText> 트렌드 능력고사
          </Title>
        </Top>
        <ProgressBar>
          <Progress width={(availableItem * 100) / maxItem} />
        </ProgressBar>
        <TopWrapper>
          <Difficulty>
            Stage {currentQuestionIndex + 1} 난이도 {difficulty}
          </Difficulty>
          <Timer>{getSeconds(time)}</Timer>
        </TopWrapper>
        <Qtitle>{title}</Qtitle>
        <Qimg src={img} alt="Question Image" />
        <Answers>
          {options.map((option, index) => (
            <Aoption key={index}>
              <RadioInput
                type="radio"
                name="answer"
                value={option}
                onChange={(event) => handleRadioChange(event, index)}
              />
              <CustomButton disabled={isButtonDisabled} value={option} onClick={handleAnswerClick}>
                {option}
              </CustomButton>
            </Aoption>
          ))}
        </Answers>
      </Wrapper>
    </MobileFrame>
  );
}
