import styled from "styled-components";
import * as C from "../../styles/common";

const S = {};

/* 1) 페이지 레이아웃 / 그리드 */
S.Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

S.Container = styled.div`
  width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 40px;
  grid-auto-rows: auto;
`;

/* 2) 배너 */
S.Banner = styled.section`
  grid-column: 1 / -1;
  position: relative;
  height: 260px;
  margin: 40px 0 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: url("/assets/images/shop_banner.png") center/cover no-repeat;
`;

S.BannerTextBox = styled.div`
  position: absolute;
  left: 80px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

S.BannerTitle = styled.h2`
  ${C.heading4}
  ${C.basic}
  font-weight: 700;
  margin-bottom: 10px;
`;

S.BannerDesc = styled.p`
  ${C.smallText1Regular}
  ${C.basic}
  line-height: 1.5;
`;

/* 3) 상단 정렬 */
S.SortTopLine = styled.div`
  grid-column: 2;
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  margin: 0 0 10px 0;
`;

S.SortBar = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.DropdownWrap = styled.div`
  position: relative;
`;

S.DropdownButton = styled.button`
  width: 120px;
  height: 30px;
  ${C.smallText1Regular}
  ${C.basic}
  background: #fff;
  border: none;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

S.ArrowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 5px;

  img { width: 10px; height: 5px; display: block; }
`;

S.DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  width: 120px;
  background: #fff;
  box-shadow: -3px 3px 12px rgba(0,0,0,0.25);
  z-index: 10;
`;

S.DropdownItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  ${C.smallText1Light}
  ${C.basic}
  cursor: pointer;
  transition: background-color .15s ease, color .15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: #fff;
    font-weight: 700;
  }

  ${({ $active, theme }) => $active && `
    background-color: ${theme.PALLETE.primary.main};
    color: #fff;
    font-weight: 700;
  `}
`;

S.SortRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${C.smallText1Regular}
  ${C.fontGreyScale3}
`;

S.Total = styled.span`
  ${C.smallText1Bold}
  ${C.basic}
`;

S.SortBottomLine = styled.div`
  grid-column: 2;
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  margin: 10px 0 32px 0;
`;

/* 4) 왼쪽 필터 */
S.LeftFilter = styled.div`
  grid-column: 1;
  grid-row: 2 / span 100;
`;

S.FilterGroup = styled.div`
  margin-bottom: 40px;
`;

S.FilterTitle = styled.h3`
  ${C.smallText3Bold}
  ${C.basic}
  margin-bottom: 20px;
`;

S.CatagoryTopBar = styled.div`
  width: 200px;
  height: 1px;
  ${C.backgroundGreyScale1}
  margin: 0 0 24px 0;
`;

S.Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 10px 0;
  cursor: pointer;
  ${C.smallText1Regular}
  ${C.basic}
`;

S.Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 19px;
  height: 19px;
  border-radius: 1px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background-color: #fff;
  cursor: pointer;
  transition: all .15s ease;

  &:hover { border-color: ${({ theme }) => theme.PALLETE.primary.main}; }

  &:checked {
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    background-image: url("/assets/icons/checkicon.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 11px 9px;
  }
`;

/* 5) 상품 리스트 */
S.CardGrid = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(4, 218px);
  column-gap: 16px;
  row-gap: 60px;
  justify-content: start;
`;

S.Card = styled.article`
  width: 218px;
  position: relative;
`;

S.ProductImageBox = styled.div`
  width: 218px;
  height: 290px;
  position: relative;
  background: ${({ $bg }) => `url("/assets/${$bg}") center/cover no-repeat`};
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
`;

/* 좋아요 버튼 (상단 원형) */
S.LikeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border: 0;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 2;
  background: url("/assets/icons/circle.svg") center / contain no-repeat;

  &::after {
    content: "";
    width: 14px;
    height: 14px;
    -webkit-mask: url("/assets/icons/favorite.svg") no-repeat center / contain;
    mask: url("/assets/icons/favorite.svg") no-repeat center / contain;
    background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
    transition: background-color .2s ease, -webkit-mask-image .2s ease, mask-image .2s ease;
  }

  ${({ $active, theme }) => $active && `
    &::after {
      -webkit-mask-image: url("/assets/icons/like.svg");
      mask-image: url("/assets/icons/like.svg");
      background-color: ${theme.PALLETE.secondary.main};
    }
  `}
`;

/* 텍스트/태그/가격 */
S.ProductTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`;

S.ProductName = styled.p`
  ${C.smallText1Bold}
  ${C.basic}
`;

S.ProductPrice = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  ${C.smallText1Bold}
  ${C.basic}
`;

S.NewTag = styled.span`
  ${C.smallText0Bold}
  padding: 1px 4px;
  display: inline-block;
  border-radius: 0;
  color: ${({ theme }) => theme.PALLETE.secondary.main};
  background-color: rgba(248, 59, 170, 0.1);
`;

S.BestTag = styled.span`
  ${C.smallText0Bold}
  padding: 1px 4px;
  display: inline-block;
  border-radius: 0;
  color: ${({ theme }) => theme.PALLETE.primary.main};
  background-color: rgba(0, 81, 255, 0.1);
`;

S.ProductSubInfo = styled.div`
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

S.Text = styled.span`
  ${C.smallText1Regular}
  ${C.basic}
`;

/* 8) 페이지네이션 */
S.Pagination = styled.div`
  grid-column: 2;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 80px;
`;

export default S;
