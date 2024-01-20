import ResultImage from '../assets/result/result_image.png';
import MemePhD from '../assets/result/meme_phD.png';
import Lv5 from '../assets/result/meme_howLove.png';
import Lv4 from '../assets/result/meme_justDoit.jpg';
import Lv3 from '../assets/result/meme_oneBody.jpg';
import Lv2 from '../assets/result/meme_point.jpg';

const getResultContentText = (level: number) => {
  if (level === -1000) {
    return {
      contentText: '밈 그거 뭔데 어떻게 하는건데',
      levelText:
        '밈이 뭔지도 모르는 당신!\n 오늘부터 하루 24시간\n 유튜브 쇼츠 인스타 릴스\n 정독하세요.',
      image: Lv5,
    };
  }

  if (level === 0) {
    return {
      contentText: '밈 . 꺾 . 그 . 마',
      levelText:
        '밈을 몰라도 너무 몰라!\n 하지만 밈꺾그마 아시죠?\n 밈이 꺾여도 그냥 사랑하는 마음',
      image: Lv4,
    };
  }

  if (level === 10) {
    return {
      contentText: '나름...밈에 대해서 알지만..',
      levelText: '밈애 대해서 알긴 알지만\n 학습형 밈박사!!\n 밈아물체 되도록 노력해보세요!',
      image: Lv3,
    };
  }

  if (level === 50) {
    return {
      contentText: '어떻게 밈좌표계를 고정하셨죠?',
      levelText: '어떻게 밈좌표계로 고정하셨죠?\n 하지만 좀 더 세밀한\n 좌표계 고정이 필요해!',
      image: Lv2,
    };
  }

  if (level === 10000) {
    return {
      contentText: '그쪽도 밈박사님을 아세용?',
      levelText: '지금도 인스타를 보거나\n 보고 있거나 볼 예정\n 밈.최.강.자 진정한 밈박사!',
      image: MemePhD,
    };
  }

  return {
    contentText: '밈 그거 뭔데 어떻게 하는건데',
    levelText:
      '밈이 뭔지도 모르는 당신!\n 오늘부터 하루 24시간\n 유튜브 쇼츠 인스타 릴스\n 정독하세요.',
    image: Lv5,
  };
};

export default getResultContentText;
