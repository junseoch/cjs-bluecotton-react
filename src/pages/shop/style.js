import styled from "styled-components";
import { 
  basic, fontGreyScale0, fontGreyScale3, heading1, heading2, heading3, heading4, 
  paragraphRegular, primary, primaryLight1, secondaryLight, smallText3Regular, 
  titleBold, white 
} from "../../styles/common";
import * as C from "../../styles/common";

const S = {};

/* ──────────────────────────────────────────────────────────
   1) 페이지 레이아웃 / 그리드
────────────────────────────────────────────────────────── */
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
  grid-auto-rows: auto;
  column-gap: 40px;
`;

/* ──────────────────────────────────────────────────────────
   2) 배너
────────────────────────────────────────────────────────── */
S.Banner = styled.section`
  grid-column: 1 / -1;
  height: 260px;
  margin: 40px 0 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #FA9BE4;
  padding: 0 40px;
`;

S.BannerTextBox = styled.div`
  margin-left: 40px;
`;

S.BannerTitle = styled.h2`
  ${C.heading5}
  ${C.basic}
  margin-bottom: 10px;
`;

S.BannerDesc = styled.p`
  ${C.smallText1Regular}
  ${C.basic}
`;

/* ──────────────────────────────────────────────────────────
   3) 상단 상품 정렬 (드롭다운 , 상하 구분바)
────────────────────────────────────────────────────────── */
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
`;

S.ArrowIcon = styled.div`
  width: 10px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  width: 120px;
  border-radius: 4px;
  background: #fff;
  box-shadow: -3px 3px 12px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

S.DropdownItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  ${C.smallText1Light}
  ${C.basic}

  ${({ $active, theme }) =>
    $active &&
    `
      background-color: ${theme.PALLETE.primary.main};
      color: #fff;
      font-weight: 700;
    `}
`;

S.SortBottomLine = styled.div`
  grid-column: 2;
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  margin: 10px 0 32px 0;
`;

/* ──────────────────────────────────────────────────────────
   4) 왼쪽 필터 영역
────────────────────────────────────────────────────────── */
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
  transition: all 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  &:checked {
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    background-image: url("V vector 아이콘 경로");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 11px 9px;
  }
`;

/* ──────────────────────────────────────────────────────────
   5) 상품 리스트 
────────────────────────────────────────────────────────── */
S.CardGrid = styled.div`
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
  background: url("상품이미지.png");
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
`;

S.LikeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: url("/assets/img/Vector.png") center / contain no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.15));
  }

  img {
    width: 14px;
    height: 14px;
  }
`;

/* ──────────────────────────────────────────────────────────
   6) 상품 텍스트 / 상품태그 / 상품가격
────────────────────────────────────────────────────────── */
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

S.NewTag = styled.span`
  ${C.smallText0Bold}
  padding: 1px 4px;
  display: inline-block;
  border-radius: none;
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

S.DetailPrice = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  ${C.paragraphStrong}
  ${C.basic}
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

S.Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

S.Text = styled.span`
  ${C.smallText1Regular}
  ${C.basic}
`;

/* ──────────────────────────────────────────────────────────
   7) 정렬 영역 (우측 정보)
────────────────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────────────────
   8) 페이지네이션
────────────────────────────────────────────────────────── */
S.Pagination = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin: 80px;
`;

/* ──────────────────────────────────────────────────────────
   9) 상품 상세 페이지
────────────────────────────────────────────────────────── */
S.TagRow = styled.div`
  gap: 4px;
  display: flex;
`;

S.DetailNewTag = styled.span`
  ${C.smallText0Bold}
  padding: 1px 4px;
  display: inline-block;
  border-radius: none;
  color: ${({ theme }) => theme.PALLETE.secondary.main};
  background-color: rgba(248, 59, 170, 0.1);
`;

S.DetailBestTag = styled.span`
  ${C.smallText0Bold}
  padding: 1px 4px;
  display: inline-block;
  border-radius: 0;
  color: ${({ theme }) => theme.PALLETE.primary.main};
  background-color: rgba(0, 81, 255, 0.1);
`;

S.DetailContainer = styled.div`
  width: 1160px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 680px 1fr;
  column-gap: 40px;
`;

S.Left = styled.div``;
S.Right = styled.div``;

S.MainImage = styled.div`
  width: 680px;
  height: 680px;
  overflow: hidden;
  border-radius: none;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

S.SubImageArea = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

S.SubImage = styled.button`
  width: 100px;
  height: 100px;
  overflow: hidden;
  background: #fff;

  img {
    width: 100px;
    height: 100px;
  }
`;

S.Title = styled.h1`
  ${C.paragraphStrong}
  ${C.basic}
  margin: 16px 0;
`;

S.ProductPrice = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  ${C.basic}
  ${C.smallText1Bold}
`;

S.Divider = styled.div`
  width: 1px;
  height: 12px;
  ${C.backgroundGreyScale1}
`

S.DeliveryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
`;

S.Delivery = styled.div`
  ${C.fontGreyScale4};
`;

S.DeliveryCharge = styled.div`
`;

S.DeliveryInfo = styled.div`
  ${C.smallText1Light};
  ${C.fontGreyScale3}
  margin-bottom: 14px;

`;

S.DeliveryCount = styled.div`
  ${C.fontGreyScale4};
`;


/* 상품 수량 선택 박스 */
S.CountBox = styled.div`
  width: 99px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
`;

/* 수량 전체 영역 (라벨 + 박스) */
S.CountWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 20px;
`;

S.CountBtn = styled.button`
  ${C.smallText3Regular};
  background: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.PALLETE.basic};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;       
  line-height: 0;    
`;

/* 수량 숫자 */
S.CountNum = styled.span`
  ${C.smallText3Regular};
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.ProductDetailBar = styled.div`
  width: 440px;
  height: 1px;
  ${C.backgroundGreyScale1};
`;

S.ProductRow = styled.div`
  width: 440px;                   
  display: flex;
  align-items: center;              
  justify-content: space-between;   
  margin: 12px 0 20px;
`;

S.ProductTotalCount = styled.div`
  ${C.fontGreyScale4};
  margin-top: 12px;
`;

S.ProductTotalPrice = styled.div`
  ${C.basic};

`;




S.ButtonRow = styled.div`
  display: flex;
  align-items: center;   
  justify-content: space-between;
  gap: 8px;
  width: 440px;
  margin-top: 20px;
`;

S.ProductLikeButton = styled.button`
  width: 54px;
  height: 54px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;

  /* 하트 아이콘 */
  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
  }

  /* 카운트 숫자 */
  span {
    ${C.smallText3Regular};
    margin-top: 4px;
    color: #000;
    line-height: 1;
    display: block;
    text-align: center;
  }
`;

S.CartButton = styled.button`
  flex: 1;
  height: 54px;
  border-radius: 4px;
`;

S.PurchaseButton = styled.button`
  ${C.white}
  flex: 1;
  height: 54px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.PALLETE.primary.main};
`;



export default S;
