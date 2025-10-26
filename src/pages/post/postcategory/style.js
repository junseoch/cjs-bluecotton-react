import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

/* === 상단 컨테이너 === */
export const TopBar = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

/* === 카테고리 리스트 === */
export const CategoryList = styled.div`
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
`;

/* === Link 기반 버튼 === */
export const CategoryLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
  background-color: #fff;
  text-decoration: none;
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
  color: ${({ theme }) => theme.PALLETE.basic};
  cursor: pointer;
  transition: all 0.15s ease;

  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.PALLETE.primary.main};
      border-color: ${theme.PALLETE.primary.main};
      color: #fff;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.light0};
  }
`;

/* === 드롭다운 영역 === */
export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

/* === 드롭다운 셀렉트 === */
export const FilterSelect = styled.select`
  width: 90px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
  background-color: #fff;
  padding: 0 32px 0 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  color: ${({ theme }) => theme.PALLETE.basic};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='22' width='22' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 20px;

  &:focus {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.15);
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
`;
