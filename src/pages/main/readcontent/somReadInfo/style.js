import styled from "styled-components";

import { smallText3Bold, smallText0Regular, smallText1Regular, primary ,white, secondary, paragraphRegular, smallText2Regular} from '../../../../styles/common';
import theme from '../../../../styles/common';

const S = {};

S.somInfoWrap = styled.div`
  display:flex;
  flex-direction: column;
  border: 1px solid ${({theme}) => theme.PALLETE.grey.greyScale1};
  padding: 30px;
  gap: 20px;
  border-radius: 16px;
`

S.somCategoryWrap = styled.div`
  ${smallText3Bold}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

S.somCategoryIcon = styled.img`
  width: 12px;
  height: 12px;
`

S.somCategoryTitle = styled.div`

`

S.somCategory = styled.div`

`

S.somTitle = styled.div`
  ${paragraphRegular}
`

S.somCountWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

S.somCountIcon = styled.img`
  width: 24px;
  height: 24px;
`

S.somCount = styled.div`
  ${smallText2Regular}
`

S.somDateWrap = styled.div`

`

S.somStartDateWrap = styled.div`

`

S.somStartDateIcon = styled.img`

`

S.somStartDateTitle = styled.div`

`

S.somStartDate = styled.div`

`

S.somStartTime = styled.div`

`

S.somEndDateWrap = styled.div`

`

S.somEndDateIcon = styled.img`

`

S.somEndDateTitle = styled.div`

`

S.somEndDate = styled.div`

`

S.somEndTime = styled.div`

`

S.somAddressWrap = styled.div`

`

S.somAddressIcon = styled.img`

`

S.somAddress = styled.div`

`

S.somButtonWrap = styled.div`

`

S.somLikeButtonWrap = styled.div`

`

S.somLikeIcon = styled.img`

`

S.somLikeCount = styled.div`

`

S.somJoinButton = styled.div`

`

S.somWhisperButton = styled.div`

`

export default S;