import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const ShopList = () => {
  return (
    <S.CardGrid>
      {[...Array(8)].map((_, i) => (
        <S.Card key={i}>

          <S.LikeButton type="button" aria-label="찜하기">
            <img src="/assets/img/heart.png" alt="찜하기 아이콘" />
          </S.LikeButton>

          <Link
            to={`/main/shop/read/${i + 1}`}
            aria-label="상품 상세보기"
            style={{ display: "block", textDecoration: "none", color: "inherit" }}
          >
            <S.ProductImageBox $bg={`products/sample_${i + 1}.png`} />
            <S.ProductTitleRow>
              <S.ProductName>상품 {i + 1}</S.ProductName>
              <S.NewTag>NEW</S.NewTag>
              <S.BestTag>BEST</S.BestTag>
            </S.ProductTitleRow>

            <S.ProductPrice>10,000원</S.ProductPrice>

            <S.ProductSubInfo>
              <S.IconText>
                <S.Icon src="별 아이콘 경로" alt="별" />
                <S.Text>4.8 (22)</S.Text>
              </S.IconText>
              <S.IconText>
                <S.Icon src="하트 아이콘 경로" alt="하트" />
                <S.Text>255</S.Text>
              </S.IconText>
            </S.ProductSubInfo>
          </Link>
        </S.Card>
      ))}

      <S.Pagination>1 2 3 4 5</S.Pagination>
    </S.CardGrid>
  );
};

export default ShopList;
