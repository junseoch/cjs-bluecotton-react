import styled, { css } from "styled-components";

/* === 전체 컨테이너 === */
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

/* === 배너 (배경까지 1160px로 제한) === */
export const Banner = styled.div`
  width: 1160px;
  height: 250px;
  border-radius: 4px;
  background: url("/postImages/banner.png") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center; /* ✅ 중앙 정렬로 내부 배치 */
  padding: 0; /* 배경은 1160 기준 그대로 */

  /* ✅ 내부 컨텐츠를 좌우로 정렬 */
  .banner-inner {
    width: 100%;
    height: 100%;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-box {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      color: ${({ theme }) => theme.PALLETE.basic};
    }

    p {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
      color: ${({ theme }) => theme.PALLETE.basic};
      margin-top: 8px;
    }
  }

  .write-btn {
    width: 168px;
    height: 40px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: white;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.PALLETE.primary.dark};
    }
  }
`;


/* === 카테고리 + 드롭다운 === */
export const TopBar = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
  background-color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
  color: ${({ theme }) => theme.PALLETE.basic};
  cursor: pointer;
  transition: all 0.15s ease;

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.PALLETE.primary.main};
      border-color: ${theme.PALLETE.primary.main};
      color: #fff;
    `}
`;

/* === 드롭다운 === */
export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

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
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

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

/* === 카드 그리드 === */
export const Grid = styled.div`
  width: 1160px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 370px);
  grid-auto-rows: 390px;
  gap: 25px;
  justify-content: start;
`;

/* === 카드 === */
export const Card = styled.div`
  width: 370px;
  height: 390px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  }

  .thumb {
    height: 210px;
    background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta {
    flex: 1;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .category {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }

    .title {
      font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      margin-top: 4px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .desc {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
      line-height: 1.4;
      height: 2.8em;
      overflow: hidden;
    }

    .info {
      margin-top: 10px;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;
