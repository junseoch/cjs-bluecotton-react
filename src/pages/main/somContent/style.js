import styled from "styled-components";

import { smallText1Regular, primary ,white, secondary} from '../../../styles/common';

const S = {};

S.Card = styled.div`
  flex: 0 0 calc((100% - (85px * 2)) / 3); /* ✅ 정확한 3열 유지 */
  display: flex;
  flex-direction: column;
`;

S.SomImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

S.SomInfo = styled.div`
  padding: 12px;
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

S.SomExplanation = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

S.SomButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

S.SomButton = styled.div`
  border-radius: 4px;
  ${smallText1Regular}
  ${white}
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  cursor: pointer;
  padding: 10px 30px;
`;

S.FullSomButton = styled.div`
  border-radius: 4px;
  ${smallText1Regular}
  ${white}
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  cursor: pointer;
  padding: 10px 30px;
`;

S.LikeButton = styled.div`
  display: flex;
  gap: 5px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1 };
  ${smallText1Regular}
  ${secondary}
  background-color: ${({ theme }) => theme.PALLETE.white};
  cursor: pointer;
  padding: 10px 15px;
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