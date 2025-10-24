import styled from "styled-components";
import * as C from "../../styles/common";

const S = {};

/* ===== 전체 페이지 (1920 고정폭) ===== */
S.Page = styled.div`
  width: 1920px;
  margin: 0 auto;
  background-color: #fff;
`;

/* ===== 12컬럼 그리드 ===== */
S.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 80px);
  column-gap: 40px;
  padding: 0 260px;
  box-sizing: border-box;
`;

/* ===== 배너 ===== */
S.Banner = styled.section`
  grid-column: 2 / span 10;
  height: 260px;
  margin: 40px 0 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  /* ✅ 배너 배경 이미지는 prop으로 변경 가능 */
  background: ${({ $bg }) =>
    $bg ? `url(${$bg}) center / cover no-repeat` : "#FA9BE4"};
`;

S.BannerTextBox = styled.div`
  margin-left: 40px;
`;

S.BannerTitle = styled.h2`
  ${C.heading5};
  ${C.basic};
  margin-bottom: 10px;
`;

S.BannerDesc = styled.p`
  ${C.smallText1Regular};
  ${C.basic};
`;

/* ===== 왼쪽 필터 ===== */
S.LeftFilter = styled.aside`
  grid-column: 2 / span 2;
`;

S.FilterGroup = styled.div`
  margin-bottom: 40px;
`;

S.FilterTitle = styled.h3`
  ${C.smallText3Bold};
  ${C.basic};
  margin-bottom: 10px;
`;

/* ===== 커스텀 체크박스 ===== */
S.Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  cursor: pointer;
  ${C.smallText1Regular};
  ${C.basic};
`;

S.Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 19px;
  height: 19px;
  border-radius: 1px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background-color: #fff;
  cursor: pointer;
  transition: all 0.15s ease;

  /* Hover */
  &:hover {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  /* Checked (Figma 기준 Selected 상태) */
  &:checked {
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    background-image: url("/assets/icons/check_white.svg"); /* ✅ 11x9 아이콘 */
    background-repeat: no-repeat;
    background-position: center;
    background-size: 11px 9px;
  }
`;

/* ===== 상품 영역 ===== */
S.ProductArea = styled.section`
  grid-column: 4 / span 9;
`;

/* ===== 카드 그리드 ===== */
S.CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 218px);
  column-gap: 16px;
  row-gap: 60px;
  justify-content: start;
`;

/* ===== 개별 카드 ===== */
S.Card = styled.article`
  width: 218px;
`;

/* ===== 썸네일 ===== */
S.ThumbWrap = styled.div`
  width: 218px;
  height: 290px;
  position: relative;
  background: ${({ $bg }) =>
    $bg ? `url(${$bg}) center / cover no-repeat` : "#f5f5f5"};
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
`;

/* 찜(하트) 버튼 */
S.LikeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid ${C.backgroundGreyScale0};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
  }
`;

/* ===== 상품명 & 태그 ===== */
S.TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`;

S.ProductName = styled.p`
  ${C.smallText1Bold};
  ${C.basic};
`;

S.Tag = styled.span`
  ${C.smallText0Bold};
  padding: 1px 4px;
  display: inline-block;
  border-radius: 4px;

  ${({ type, theme }) =>
    type === "new" &&
    `
      color: ${theme.PALLETE.secondary.main};
      background-color: rgba(246, 167, 233, 0.1);
    `}

  ${({ type, theme }) =>
    type === "best" &&
    `
      color: ${theme.PALLETE.primary.main};
      background-color: rgba(90, 126, 255, 0.1);
    `}
`;

/* ===== 가격 ===== */
S.Price = styled.div`
  margin-top: 6px;
  ${C.heading6};
  color: #E2409E;
`;

/* ===== 메타 정보 ===== */
S.Meta = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

S.IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

S.Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

S.Text = styled.span`
  ${C.smallText1Regular};
  ${C.basic};
`;

/* ===== 페이지네이션 ===== */
S.Pagination = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin: 40px 0 60px;

  button {
    border: none;
    background: transparent;
    font-size: 15px;
    color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }

    &.active {
      color: ${({ theme }) => theme.PALLETE.primary.main};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }
  }
`;

export default S;
