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

  /* latin-ext */
  @font-face {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tukkJUEGpCeGQ.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tWkkJUEGpA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export default GlobalStyle;
