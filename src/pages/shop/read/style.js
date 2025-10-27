import styled from "styled-components";


import * as C from "../../../styles/common";

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
  border: none;
  padding: 0;

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

S.DetailPrice = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  ${C.paragraphStrong}
  ${C.basic}
`;

S.DetailReviewWrap = styled.div`
  display: flex;
  gap: 5px;
`;


/* 아이콘 & 텍스트 */
S.Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

S.Text = styled.span`
  ${C.smallText1Regular}
  ${C.basic}
  margin-top: 2px;
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
  border-color: ${({ theme }) => theme.PALLETE.primary.main};
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
