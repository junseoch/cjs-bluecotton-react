import styled from "styled-components";

import { smallText2Light, primary ,white, secondary} from '../../../styles/common';

const S = {};

S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

S.CategoryList = styled.div`
  display: flex;
  gap: 10px;
`;

S.CategoryButton = styled.button`
  ${smallText2Light}
  width: 100px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background-color: ${({ theme }) => theme.PALLETE.white};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &.active {
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    ${white}
  }

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.light1};
    ${white}
  }
`;

S.SortBox = styled.select`
  ${smallText2Light}
  width: 72px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;

export default S;