// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

// ------------------------------
// ✅ flex 관련
// ------------------------------
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const flexBetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// ------------------------------
// ✅ logo
// ------------------------------
export const headerLogo = css`
  color: ${({ theme }) => theme.PALLETE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.headerLogo};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-family: 'SchoolSafetyRoundedSmile';
`;

export const headerSubLogo = css`
  color: ${({ theme }) => theme.PALLETE.secondary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.headerSubLogo};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-family: 'SchoolSafetyRoundedSmile';
`;

// ------------------------------
// ✅ heading
// ------------------------------
export const heading1 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const heading2 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const heading3 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const heading4 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const heading5 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
export const heading6 = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

// ------------------------------
// ✅ accent / title / paragraph
// ------------------------------
export const accent = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.accent};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const titleBold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.title};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const title = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.title};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

export const paragraphStrong = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.paragraph};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const paragraphRegular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.paragraph};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const paragraphLight = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.paragraph};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

// ------------------------------
// ✅ subtitle
// ------------------------------
export const subtitle = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.subtitle};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
export const subtitleRegular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.subtitle};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;

// ------------------------------
// ✅ small text 3~0, mini text
// ------------------------------
export const smallText3Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const smallText3Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const smallText3Light = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;
export const smallText3Thin = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.thin};
`;

export const smallText2Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const smallText2Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const smallText2Light = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

export const smallText1Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const smallText1Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const smallText1Light = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

export const smallText0Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText0};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const smallText0Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText0};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const smallText0Light = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.smallText0};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

export const miniTextBold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.miniText};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
export const miniTextMedium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.miniText};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
export const miniTextRegular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.miniText};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
export const miniTextLight = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.miniText};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`;

// ------------------------------
// ✅ colors
// ------------------------------
export const basic = css`
  color: ${({ theme }) => theme.PALLETE.basic};
`;

export const primary = css`
  color: ${({ theme }) => theme.PALLETE.primary.main};
`;
export const primaryLight1 = css`
  color: ${({ theme }) => theme.PALLETE.primary.light1};
`;
export const primaryLight0 = css`
  color: ${({ theme }) => theme.PALLETE.primary.light0};
`;
export const primaryDark = css`
  color: ${({ theme }) => theme.PALLETE.primary.dark};
`;

export const secondary = css`
  color: ${({ theme }) => theme.PALLETE.secondary.main};
`;
export const secondaryLight = css`
  color: ${({ theme }) => theme.PALLETE.secondary.light};
`;
export const secondaryDark = css`
  color: ${({ theme }) => theme.PALLETE.secondary.dark};
`;

export const warning = css`
  color: ${({ theme }) => theme.PALLETE.warning};
`;
export const success = css`
  color: ${({ theme }) => theme.PALLETE.success};
`;
export const review = css`
  color: ${({ theme }) => theme.PALLETE.review};
`;
export const white = css`
  color: ${({ theme }) => theme.PALLETE.white};
`;

// rank
export const rankRookie = css`
  color: ${({ theme }) => theme.PALLETE.rank.rookie};
`;
export const rankSilver = css`
  color: ${({ theme }) => theme.PALLETE.rank.silver};
`;
export const rankGold = css`
  color: ${({ theme }) => theme.PALLETE.rank.gold};
`;
export const rankDiamond = css`
  color: ${({ theme }) => theme.PALLETE.rank.diamond};
`;
export const rankMaster = css`
  color: ${({ theme }) => theme.PALLETE.rank.master};
`;

// ------------------------------
// ✅ grey color / background
// ------------------------------
export const fontGreyScale0 = css`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
`;
export const fontGreyScale1 = css`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;
export const fontGreyScale2 = css`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale2};
`;
export const fontGreyScale3 = css`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
`;
export const fontGreyScale4 = css`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
`;

export const backgroundGreyScale0 = css`
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
`;
export const backgroundGreyScale1 = css`
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;
export const backgroundGreyScale2 = css`
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale2};
`;
export const backgroundGreyScale3 = css`
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
`;
export const backgroundGreyScale4 = css`
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
`;
