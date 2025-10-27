import styled from "styled-components";
import * as C from "../../../styles/common";

const S = {};

/* ──────────────────────────────────────────────
   1) 페이지 레이아웃
────────────────────────────────────────────── */
S.Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

/* ──────────────────────────────────────────────
   2) 상품 상세 그리드
────────────────────────────────────────────── */
S.DetailContainer = styled.div`
  width: 1160px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 680px 1fr;
  column-gap: 40px;
`;

S.Left = styled.div``;

S.Right = styled.div`
  position: sticky;
  top: 100px;
  align-self: flex-start;
  height: fit-content;
`;

/* ──────────────────────────────────────────────
   3) 메인 / 서브 이미지
────────────────────────────────────────────── */
S.MainImage = styled.div`
  width: 680px;
  height: 680px;
  overflow: hidden;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

S.SubImageArea = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: flex-start;
`;

S.SubImage = styled.button`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: none;
  background: #fff;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* ──────────────────────────────────────────────
   4) 상품 정보 (우측)
────────────────────────────────────────────── */
S.TagRow = styled.div`
  display: flex;
  gap: 4px;
`;

S.DetailNewTag = styled.span`
  ${C.smallText0Bold};
  color: ${({ theme }) => theme.PALLETE.secondary.main};
  background-color: rgba(248, 59, 170, 0.1);
  padding: 1px 4px;
`;

S.DetailBestTag = styled.span`
  ${C.smallText0Bold};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  background-color: rgba(0, 81, 255, 0.1);
  padding: 1px 4px;
`;

S.Title = styled.h1`
  ${C.paragraphStrong};
  ${C.basic};
  margin: 16px 0;
`;

S.DetailPrice = styled.div`
  ${C.paragraphStrong};
  margin: 10px 0;
`;

S.DetailReviewWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

S.Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

S.Text = styled.span`
  ${C.smallText1Regular};
`;

/* ──────────────────────────────────────────────
   5) 배송 정보
────────────────────────────────────────────── */
S.DeliveryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
`;

S.Divider = styled.div`
  width: 1px;
  height: 12px;
  background: ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;

S.Delivery = styled.div`
  ${C.fontGreyScale4};
`;

S.DeliveryCharge = styled.div``;

S.DeliveryInfo = styled.div`
  ${C.smallText1Light};
  ${C.fontGreyScale3};
  margin-bottom: 14px;
`;

/* ──────────────────────────────────────────────
   6) 수량 선택
────────────────────────────────────────────── */
S.CountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 20px;
`;

S.DeliveryCount = styled.div`
  ${C.fontGreyScale4};
`;

S.CountBox = styled.div`
  width: 99px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
`;

S.CountBtn = styled.button`
  ${C.smallText3Regular};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 10px;
`;

S.CountNum = styled.span`
  ${C.smallText3Regular};
`;

/* ──────────────────────────────────────────────
   7) 총 상품 금액
────────────────────────────────────────────── */
S.ProductDetailBar = styled.div`
  width: 440px;
  height: 1px;
  background: ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;

S.ProductRow = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  margin: 12px 0 20px;
`;

S.ProductTotalCount = styled.div`
  ${C.fontGreyScale4};
`;

S.ProductTotalPrice = styled.div`
  ${C.basic};
`;

/* ──────────────────────────────────────────────
   8) 버튼 영역
────────────────────────────────────────────── */
S.ButtonRow = styled.div`
  display: flex;
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
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
    margin-top: 3px;
    object-fit: contain;
  }

  span {
    ${C.smallText3Regular};
    margin-top: 4px;
    color: #000;
  }
`;

S.CartButton = styled.button`
  ${C.smallText2Regular};
  flex: 1;
  height: 54px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary.main};
  background: #fff;
  cursor: pointer;
`;

S.PurchaseButton = styled.button`
  ${C.smallText2Regular};
  ${C.white};
  flex: 1;
  height: 54px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.PALLETE.primary.main};
  cursor: pointer;
`;

/* ──────────────────────────────────────────────
   9) 하단 정보/리뷰 탭 (Shop.jsx용)
────────────────────────────────────────────── */
S.InfoSection = styled.section`
  width: 680px;
  margin: 60px 0 120px;
  display: flex;
  flex-direction: column;
`;

S.InfoTabs = styled.div`
  display: flex;
  gap: 140px;
  justify-content: center;
`;

S.InfoTab = styled.button`
  ${C.paragraphRegular};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding-bottom: 4px;
  color: ${({ $active, theme }) =>
    $active ? theme.PALLETE.basic : theme.PALLETE.grey.greyScale3};

  ${({ $active, theme }) =>
    $active &&
    `
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.PALLETE.basic};
  }
  `}
`;

S.InfoDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  margin: 4px 0 24px;
`;

/* ──────────────────────────────────────────────
   10) 하단 상세 정보 (ShopInfo.jsx용)
────────────────────────────────────────────── */
S.InfoTextWrap = styled.div`
  margin-top: 20px;
  text-align: left;
`;

S.InfoKicker = styled.p`
  ${C.paragraphRegular};
  color: ${({ theme }) => theme.PALLETE.secondary.main};
  margin-bottom: 8px;
`;

S.InfoTitle = styled.h2`
  ${C.accent};
  margin-bottom: 12px;
`;

S.InfoDesc = styled.p`
  ${C.smallText3Regular};
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 40px;
`;

S.InfoImage = styled.div`
  width: 100%;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

/* ──────────────────────────────────────────────
   11) 상품 정보 섹션 (사진 하단)
────────────────────────────────────────────── */
S.SpecSection = styled.section`
  width: 680px;
  margin: 60px 0 48px;
`;

S.SpecTitle = styled.h3`
  ${C.subtitleRegular}; /* 피그마: Subtitle/Subtitle-Regular */
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 28px;
`;

S.SpecList = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;          
  row-gap: 10px;                   
`;

S.SpecRow = styled.div`
  display: contents; /* grid 셀 배치만 사용 */
`;

S.SpecLabel = styled.div`
  ${C.smallText2Regular}; 
  color: ${({ theme }) => theme.PALLETE.basic};
  &::after {
    content: "：";
    margin-left: 4px;
  }
`;

S.SpecValue = styled.div`
  ${C.smallText2Regular};
  color: ${({ theme }) => theme.PALLETE.basic};
`;

/* 유의사항 카드 */
S.CautionBox = styled.div`
  width: 100%;
          
  margin-top: 32px;
  padding: 24px;
  box-sizing: border-box;             
  background: ${({ theme }) => theme.PALLETE.grey.greyScale0};
`;

S.CautionTitle = styled.p`
  ${C.smallText1Bold};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  margin-bottom: 12px;
`;

S.CautionText = styled.p`
  ${C.smallText1Regular};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  line-height: 1.8;
  white-space: pre-line; /* 개행 유지 */
  margin: 0;
`;

export default S;
