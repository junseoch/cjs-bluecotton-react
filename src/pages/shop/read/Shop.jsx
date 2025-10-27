import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import S from "./style";

const Shop = () => {


  const [selectedImage, setSelectedImage ] = useState("/assets/images/shop_som_doll.png")

   const subImages = [
    "/assets/images/shop_detailSub_doll.png",
    "/assets/images/shop_detailSub_doll2.png",
    "/assets/images/shop_detailSub_doll3.png",
  ];

  return (
  <S.Page>
    <S.DetailContainer>
      <S.Left>
        <S.MainImage><img src="/assets/images/shop_som_doll.png" alt="main" /></S.MainImage>
        <S.SubImageArea>
          <S.SubImage><img src="/assets/images/shop_detailSub_doll.png" alt="sub" /></S.SubImage>
          <S.SubImage><img src="/assets/images/shop_detailSub_doll2.png" alt="sub2" /></S.SubImage>
          <S.SubImage><img src="/assets/images/shop_detailSub_doll3.png" alt="sub3" /></S.SubImage>
        </S.SubImageArea>
      </S.Left>

      <S.Right>
        <S.TagRow>
          <S.DetailNewTag>NEW</S.DetailNewTag>
          <S.DetailBestTag>BEST</S.DetailBestTag>
        </S.TagRow>

        <S.Title>솜이 인형</S.Title>
        <S.DetailPrice>23,000원</S.DetailPrice>

        <S.DetailReviewWrap>
          <S.Icon src="/assets/icons/review.svg" alt="상품 리뷰 아이콘" />
          <S.Text>4.8 (22)</S.Text>
        </S.DetailReviewWrap>

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
            <img src="/assets/icons/like.svg" alt="좋아요" />
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