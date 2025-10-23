import styled from 'styled-components'
import { backgroundGreyScale0, backgroundGreyScale1, backgroundGreyScale2, backgroundGreyScale3, basic, fontGreyScale1, greyScale0, greyScale1, greyScale2, h1Bold, headerLogo, headerSubLogo, heading1, primary, secondary, warning, white } from '../../styles/common';

const S = {};

// S.PrimaryTest = styled.div`
//   background-color: ${({ theme }) => theme.PALLETE.primary.main};
//   color: white;
//   padding: 16px;
//   border-radius: 8px;
//   text-align: center;
// `;

// S.TextTest = styled.p`
//   color: ${({theme}) => theme.PALLETE.secondary.main};
//   font-size: ${({theme}) => theme.FONT_SIZE.smallText3};
//   font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
//   font-family: 'Daeojamjil';
// `
// S.BlueCotton = styled.p`
//   color: ${({theme}) => theme.PALLETE.secondary.main};
//   font-size: ${({theme}) => theme.FONT_SIZE.h1};
//   font-family: 'SchoolSafetyRoundedSmile';
// `
S.HeaderLogo = styled.p`
  ${headerLogo};
`
S.HeaderSubLogo = styled.p`
  ${headerSubLogo};
`
S.Heading1 = styled.h1`
  ${heading1};
`
S.GreyTest = styled.div`
  ${basic};
  ${backgroundGreyScale0}
//   color: white;
//   padding: 16px;
//   border-radius: 8px;
//   text-align: center;
`

export default S;