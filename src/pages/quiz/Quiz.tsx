import { useState, useEffect } from 'react';
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

const Title = styled.h2`
  margin-top: 1.5rem;
  color: #fff;
  text-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
  font-family: DNFBitBitv2;
  font-size: 1.2rem;
`;
const SpecialText = styled.span`
  color: var(---, #9cff00);
  font-family: 'DNFBitBitv2';
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

const Progress = styled.div<ITest>`
  width: ${(props) => props.width}%;
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
  font-family: DNFBitBitv2;
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
  font-family: DNFBitBitv2;
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
  font-family: DNFBitBitv2;
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
// const RadioInput = styled.input`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: 1px solid #fff;
//   margin-right: 10px;

//   cursor: pointer;
//   &:checked {
//     background-color: #fff;
//     color: #9cff00;
//   }
// `;

const CustomButton = styled.button`
  width: 300px;
  background-color: #ffffff;
  color: black;
  text-align: center;
  font-family: DNFBitBitv2;
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

  const maxItem = 10;
  const availableItem = currentQuestionIndex + 1;

  const getSeconds = () => {
    const seconds = Number(time % 60);
    if (seconds <= 0) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTime(20);
    } else if (seconds < 10) {
      return `0${seconds}`;
    } else {
      return String(seconds);
    }
    return String(seconds);
  };

  const handleAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === question[currentQuestionIndex].ans) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
      // console.log(correctAnswersCount);
    }
    // else {
    //   console.log('오답입니다.');
    // }
    if (currentQuestionIndex === question.length - 1) {
      navigate(`/result/${correctAnswersCount}`);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTime(20);
      }, 200);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentQuestionIndex, time, correctAnswersCount]);

  const currentQuestion = question[currentQuestionIndex];

  const { title, img, options, difficulty } = currentQuestion;

  return (
    <MobileFrame>
      <Wrapper>
        <Title>
          2023 <SpecialText>MZ</SpecialText> 트렌드 능력고사
        </Title>
        <ProgressBar>
          <Progress width={(availableItem * 100) / maxItem} />
        </ProgressBar>
        <TopWrapper>
          <Difficulty>
            Stage {currentQuestionIndex + 1} 난이도 {difficulty}
          </Difficulty>
          <Timer>{getSeconds()}</Timer>
        </TopWrapper>
        <Qtitle>{title}</Qtitle>
        <Qimg src={img} alt="Question Image" />
        <Answers>
          {options.map((option) => (
            <Aoption key={option}>
              {/* <RadioInput
                type="radio"
                name="answer"
                // value={option}
                // checked={selectedAnswer === option}
                // onChange={handleRadioChange}
              /> */}
              <CustomButton value={option} onClick={handleAnswerClick}>
                {option}
              </CustomButton>
            </Aoption>
          ))}
        </Answers>
      </Wrapper>
    </MobileFrame>
  );
}
