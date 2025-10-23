// 전역에 사용되는 스타일을 적용시키기위한 파일
// 폰트, 리셋
import { createGlobalStyle } from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  /* css 스타일 리셋 */
  ${reset}

  /* 
    100 Thin
    300 Light
    400 Regular
    500 Medium
    700 Bold
    800 ExtraBold
  */

  @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil1Thin.ttf) format('ttf');
    font-weight: 100;
    font-display: swap;
}
    @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil2Light.ttf) format('ttf');
    font-weight: 300;
    font-display: swap;
}
  @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil3Regular.ttf) format('ttf');
    font-weight: 400;
    font-display: swap;
}
  @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil4Medium.ttf) format('ttf');
    font-weight: 500;
    font-display: swap;
}
  @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil5Bold.ttf) format('ttf');
    font-weight: 700;
    font-display: swap;
}
  @font-face {
    font-family: 'Daeojamjil';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/jamsil/TheJamsil6ExtraBold.ttf) format('ttf');
    font-weight: 800;
    font-display: swap;
}

  body {
    font-family: 'Daeojamjil';
    /* font-weight: 900; */
    /* box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: #131313;*/
    line-height: 1.3; 
    letter-spacing: -0.2px;
  }

  /* 
    700 Bold
  */

@font-face {
    font-family: 'SchoolSafetyRoundedSmile';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/hakgyoansim/HakgyoansimDunggeunmisoTTFB.ttf) format('woff2');
    font-weight: 700;
    font-display: swap;
}
`
export default GlobalStyle;