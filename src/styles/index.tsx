// 스타일 모아놓는 파일 (스타일을 따로 파일 빼는건 같이 논의해봐요!)
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'SUIT Variable', sans-serif;
    src: url(https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css);
  }
  
  @font-face{
    font-family:'DNFBitBitv2';
    font-style:normal;
    font-weight:400;
    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
 }
`;

export default GlobalStyle;
