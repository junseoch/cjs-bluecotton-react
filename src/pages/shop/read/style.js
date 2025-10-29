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
   2) 상품 상세 페이지 비율
────────────────────────────────────────────── */
S.DetailContainer = styled.div`
  width: 1160px;
  margin: 60px auto;
  display: flex;                 
  align-items: flex-start;      
  justify-content: space-between;
  gap: 40px;                  
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
  gap: 6px; 
  line-height: 1; 
`;

S.Icon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  object-fit: contain;
  margin-bottom: 2px;
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
  align-items: baseline;
  margin: 12px 0 20px;
`;

S.DeliveryCount = styled.div`
  ${C.fontGreyScale4};
`;

S.CountBox = styled.div`
  width: 100px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
  box-sizing: border-box;
`;

S.CountBtn = styled.button`
  ${C.smallText3Regular};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.minus { left: 16px; }  
  &.plus  { right: 16px; } 
`;

S.CountNum = styled.span`
  ${C.smallText3Regular};
  padding: 8px;
  flex: 1;
  text-align: center;
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
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
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
  ${C.subtitleRegular}; 
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 28px;
`;

S.SpecList = styled.div`
  display: flex;
  flex-direction: column;      
  gap: 10px;                   
`;

S.SpecRow = styled.div`
  display: flex;
  align-items: baseline;
`;

S.SpecLabel = styled.div`
  ${C.smallText2Regular}; 
  color: ${({ theme }) => theme.PALLETE.basic};
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
  white-space: pre-line; 
  margin: 0;
`;

/* ──────────────────────────────────────────────
   12) 판매자 정보 섹션
────────────────────────────────────────────── */
S.SellerSection = styled.section`
  width: 680px;
  margin: 48px 0 40px;
`;

S.SellerTitle = styled.h3`
  ${C.subtitleRegular};
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 24px;
`;

S.SellerList = styled.div`
  display: flex;
  flex-direction: column;   /* 세로로 행 나열 */
  gap: 12px;                /* 행 간격 통일 */
  width: 100%;
`;

S.SellerRow = styled.div`
  display: flex;
  align-items: flex-start;  /* 멀티라인 값도 첫 줄 기준 정렬 */
  min-width: 0;             /* 자식 요소 폭 깨짐 방지 */
`;

S.SellerLabel = styled.div`
  ${C.smallText2Regular};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  flex: 0 0 168px;          /* 긴 라벨도 1줄 유지 */
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
  position: relative;
  padding-right: 12px;      /* 라벨-값 간격 */
  line-height: 1.7;
`;

S.SellerValue = styled.div`
  ${C.smallText2Regular};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale6};
  flex: 1;                  /* 남은 영역 차지 */
  line-height: 1.7;         /* 좌우 줄높이 동일 */
  word-break: keep-all;     /* 한글 낱자 줄바꿈 방지 */
  overflow-wrap: break-word;/* 긴 이메일 등은 자연 줄바꿈 */
`;

/* ──────────────────────────────────────────────
   13) 상품 리뷰 
────────────────────────────────────────────── */
/* 섹션 래퍼 */
S.ReviewSection = styled.section`
  width: 680px;
  margin: 60px 0 120px;
`;

/* 제목 + 드롭다운 정렬 */
S.ReviewRatingTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`;

S.ReviewRatingTitle = styled.h3`
  ${C.subtitleRegular};
  color: ${({ theme }) => theme.PALLETE.basic};
  margin: 0;
`;

/* 드롭다운 */
S.DropdownArea = styled.div`
  display: flex;
  gap: 10px;
`;

S.Dropdown = styled.div`
  position: relative;
  ${C.smallText2Regular};
  padding: 8px 12px;
  width: 120px;
  background: #fff;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.PALLETE.primary.main : theme.PALLETE.grey.greyScale1};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.ArrowIcon = styled.img`
  width: 12px;
  height: 8px;
`;

S.DropdownList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
  z-index: 10;
  overflow: hidden;
`;

S.DropdownItem = styled.li`
  padding: 8px 12px;
  ${C.smallText2Regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.PALLETE.primary.light0};
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

/* 상단 통계 */
S.ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

S.ReviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.ReviewAverage = styled.p`
  ${C.heading3};
  color: ${({ theme }) => theme.PALLETE.basic};
`;

S.ReviewCount = styled.div`
  ${C.smallText1Light};
  display: flex;
  align-items: center;
  gap: 8px;
  img { width: 18px; height: 18px; }
`;

S.ReviewRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.ReviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.ReviewLabel = styled.span`
  ${C.smallText2Regular};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  width: 16px;
  text-align: right;
`;

S.ReviewBar = styled.div`
  width: 500px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
  overflow: hidden;
`;

S.ReviewFill = styled.div`
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ theme }) => theme.PALLETE.review.main};
  border-radius: 10px;
  transition: width 0.3s ease;
`;

S.ReviewCountText = styled.span`
  ${C.smallText2Regular};
  color: ${({ theme }) => theme.PALLETE.basic};
  width: 16px;
  text-align: right;
`;

/* 리뷰 아이템 */
S.ReviewItem = styled.div`
  padding: 24px 0 0;
`;

S.ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

S.ProfileImage = styled.img`
  width: 40px;   /* 40 x 40 */
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

S.UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.StarRow = styled.div`
  display: flex;
  gap: 4px; 
`;

/* ⭐ 별 아이콘: 채워지지 않은 경우만 회색 톤 적용 */
S.StarIcon = styled.img`
  width: 19px;
  height: 18px;
  object-fit: contain;
  ${({ $filled }) =>
    !$filled &&
    `
      filter: grayscale(1) brightness(0.7);
    `}
`;

S.UserMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.UserName = styled.span`
  ${C.smallText2Light};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
`;

S.Dot = styled.span`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale2};
`;

S.ReviewDate = styled.span`
  ${C.smallText2Light};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
`;

S.ReportButton = styled.button`
  ${C.smallText2Light};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
  background: none;
  border: 0;
  cursor: pointer;
`;

/* 리뷰 이미지 & 텍스트 */
S.ReviewImage = styled.div`
  margin-top: 12px;
  width: 145px;   /* 145 x 145 */
  height: 145px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background: #f6f6f6;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

S.ReviewText = styled.p`
  ${C.smallText3Light};       /* 본문 폰트 */
  color: ${({ theme }) => theme.PALLETE.basic};
  margin: 12px 0 0;
  white-space: pre-line;
`;

/* 하단(도움돼요) */
S.ReviewFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;

S.HelpfulButton = styled.button`
  ${C.smallText2Light};                 
  width: 108px;                        
  height: 38px;
  border-radius: 4px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.PALLETE.primary.main : theme.PALLETE.grey.greyScale1};
  background: ${({ $active, theme }) =>
    $active ? theme.PALLETE.primary.main : "#fff"};
  color: ${({ $active, theme }) => ($active ? "#fff" : theme.PALLETE.basic)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  img {
    width: 14px;  
    height: 14px;
    object-fit: contain;
    filter: ${({ $active }) => ($active ? "none" : "grayscale(100%)")};
  }
`;

S.ReviewDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.PALLETE.grey.greyScale1}; 
  margin-top: 24px;
`;

/* ──────────────────────────────────────────────
   14) 상세정보 토글 버튼
────────────────────────────────────────────── */
S.ToggleBox = styled.button`
  width: 100%;
  padding: 14px 16px;
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

S.ToggleText = styled.span`
  ${C.smallText2Light};
  ${C.basic};
  display: inline-block;
`;

S.ToggleIcon = styled.img`
  width: 10px;
  height: 5px;
  margin-left: 6px;
  object-fit: contain;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")}); 
  transition: none; 
  align-self: center;
`;

/* ──────────────────────────────────────────────
   15) 관련 상품 섹션 (ShopRelated.jsx)
────────────────────────────────────────────── */
S.RelatedSection = styled.section`
  width: 680px;
  margin: 80px 0 120px;
`;

S.RelatedTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 28px;
`;

S.BrandLink = styled.span`
  ${C.subtitleRegular};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  margin-right: 4px;
`;

S.RelatedTitle = styled.h3`
  ${C.subtitleRegular};
  color: ${({ theme }) => theme.PALLETE.basic};
`;

S.RelatedGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

S.RelatedCard = styled.div`
  width: 158px;
  display: flex;
  flex-direction: column;
`;

S.RelatedThumb = styled.div`
  width: 158px;
  height: 211px;
  background-color: #f6f6f6;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

S.RelatedName = styled.p`
  ${C.smallText1Bold};
  ${C.basic};
  margin-top: 10px;
`;

S.RelatedPrice = styled.p`
  ${C.smallText1Regular};
  ${C.basic};
  margin-top: 6px;
`;

/* 장바구니 모달창 */
S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  /* background: ${({ theme }) => theme.PALLETE.grey.greyScale1}; */
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`;

S.Dialog = styled.div`
  position: fixed;  
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 302px;
  height: 140px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

S.DialogMsg = styled.p`
  ${C.subtitleRegular};
  ${C.basic};
  margin: 31px 12px 31px;
`;

S.DialogBtns = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center
`;

S.DialogBtnCancel = styled.button`
  ${C.smallText2Regular};
  width: 136px;             
  height: 46px;            
  margin-bottom: 12px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  cursor: pointer;
`;

S.DialogBtnCart = styled.button`
  ${C.smallText2Regular};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  flex: 1; 
  width: 136px;
  height: 46px;
  border-radius: 4px;
  border: 0;
  display: inline-flex;
  background: ${({ theme }) => theme.PALLETE.primary.main};
  color: #fff;
  cursor: pointer;
`;

export default S;
