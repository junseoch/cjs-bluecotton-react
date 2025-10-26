import React from 'react';
import { Link } from 'react-router-dom';

import S from "./style";

const Shop = () => {

  return (
  <S.Page>
    <S.DetailContainer>
      <S.Left>
        <S.MainImage><img src="메인 이미지 링크" alt="main" /></S.MainImage>
        <S.SubImageArea>
          <S.SubImage><img src="/img/thumb1.jpg" alt="" /></S.SubImage>
          <S.SubImage><img src="/img/thumb2.jpg" alt="" /></S.SubImage>
          <S.SubImage><img src="/img/thumb3.jpg" alt="" /></S.SubImage>
        </S.SubImageArea>
      </S.Left>

      <S.Right>
        <S.TagRow>
          <S.DetailNewTag>NEW</S.DetailNewTag>
          <S.DetailBestTag>BEST</S.DetailBestTag>
        </S.TagRow>

        <S.Title>솜이 인형</S.Title>
        <S.DetailPrice>23,000원</S.DetailPrice>

        <S.Icon src="별 아이콘 경로" alt="" />
        <S.Text>4.8 (22)</S.Text>

        <S.DeliveryRow>
          <S.Delivery>
            배송
          </S.Delivery>
          <S.Divider />
          <S.DeliveryCharge>
            3,000원
          </S.DeliveryCharge>
        </S.DeliveryRow>
          <S.DeliveryInfo>
            30,000원 이상 결제 시 무료
          </S.DeliveryInfo>


        <S.CountWrap>
          <S.DeliveryCount>수량</S.DeliveryCount>

          <S.CountBox>
            <S.CountBtn>-</S.CountBtn>
            <S.CountNum>1</S.CountNum>
            <S.CountBtn>+</S.CountBtn>
          </S.CountBox>
        </S.CountWrap>


          <S.ProductDetailBar>
          </S.ProductDetailBar>

        <S.ProductRow>
          <S.ProductTotalCount>
            총 1개
          </S.ProductTotalCount>
          <S.ProductTotalPrice>
            23,000원
          </S.ProductTotalPrice>
        </S.ProductRow>
          

        <S.ButtonRow>
          <S.ProductLikeButton>
            <img src="하트 아이콘 경로" alt="좋아요" />
            <span>255</span>
          </S.ProductLikeButton>
          <S.CartButton>장바구니</S.CartButton>
          <S.PurchaseButton>구매하기</S.PurchaseButton>
        </S.ButtonRow>

      </S.Right>
    </S.DetailContainer>
  </S.Page>

  )

};

export default Shop;