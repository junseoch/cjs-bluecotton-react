import styled from "styled-components";

import { smallText3Bold, smallText0Regular, smallText1Regular, primary ,white, secondary} from '../../../styles/common';

const S = {};

S.Card = styled.div`
  flex: 0 0 calc((100% - (clamp(16px, 5vw, 85px) * 2)) / 3); /* ✅ 정확한 3열 유지 */
  display: flex;
  flex-direction: column;
`;

S.SomImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

S.SomInfo = styled.div`
  padding: 12px 0;
`;

S.SomTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  h3 {
    font-size: 16px;
    margin: 0;
  }
`;

S.SomTitle = styled.div`
  ${smallText3Bold}
`;

S.SomExplanation = styled.div`
  font-size: 14px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  span {
    ${smallText0Regular}
  }
`;

S.SomButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

S.SomButton = styled.div`
  ${smallText1Regular}
  ${white}
  border-radius: 4px;
  width: 122px;
  height: 32px;
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.dark};
    ${white}
  }
`;

S.FullSomButton = styled.div`
  ${smallText1Regular}
  ${white}
  border-radius: 4px;
  width: 122px;
  height: 32px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.LikeButton = styled.div`
${smallText1Regular}
${secondary}
width: 64px;
height: 32px;
gap: 5px;
border-radius: 4px;
border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1 };
background-color: ${({ theme }) => theme.PALLETE.white};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;

S.SomExplantionArea = styled.div`
  display: flex;
  justify-content: space-between;
`

S.SomExplanationInfo = styled.div`
  display: flex;
  gap: 5px;
  

`

export default S;