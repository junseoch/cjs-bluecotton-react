import styled from "styled-components";

import { smallText3Bold, smallText0Regular, smallText1Regular, primary ,white, secondary} from '../../../styles/common';

const S = {};

S.somReadContainer = styled.div`
  width: 100%;
  display: flex;

`

S.somReadWrap = styled.div`
  display: flex;
  width: 1160px;
  margin: 0 auto;
  gap: 40px;
  flex-direction: row;
`

S.somInfoSticky = styled.div`
  position: sticky;
  top: 100px;
  align-self: flex-start;
  height: fit-content;
`

export default S;