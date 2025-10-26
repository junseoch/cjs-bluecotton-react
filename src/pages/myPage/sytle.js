import styled from "styled-components";
import {
  backgroundGreyScale0,
  backgroundGreyScale1,
  backgroundGreyScale2,
  backgroundGreyScale3,
  basic,
  fontGreyScale1,
  greyScale0,
  greyScale1,
  greyScale2,
  h1Bold,
  headerLogo,
  headerSubLogo,
  heading1,
  primary,
  secondary,
  warning,
  white,
} from "../../styles/common";

const S = {};

S.HeaderLogo = styled.p`
  ${headerLogo};
`;

S.HeaderSubLogo = styled.p`
  ${headerSubLogo};
`;

S.Heading1 = styled.h1`
  ${heading1};
`;

S.GreyTest = styled.div`
  ${basic};
  ${backgroundGreyScale0};
  padding: 16px;
  border-radius: 8px;
  text-align: center;
`;

export default S;
