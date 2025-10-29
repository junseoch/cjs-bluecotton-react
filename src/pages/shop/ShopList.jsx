import React, { useState } from "react";
import { Link } from "react-router-dom";
import S from "./style";

const ShopList = () => {
  const [liked, setLiked] = useState(new Set());

  const toggleLike = (id) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <S.CardGrid>
      {[...Array(8)].map((_, i) => {
        const id = i + 1;
        const isActive = liked.has(id);
        return (
          <S.Card key={id}>
            <S.LikeButton
              type="button"
              aria-label="찜하기"
              aria-pressed={isActive}
              $active={isActive}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleLike(id);
              }}
            />

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
                  <img src="/assets/icons/review.svg" alt="리뷰 아이콘" />
                  <S.Text>4.8 (22)</S.Text>
                </S.IconText>
                <S.IconText>
                  <img src="/assets/icons/filedlike.svg" alt="찜하기 아이콘" />
                  <S.Text>255</S.Text>
                </S.IconText>
              </S.ProductSubInfo>
            </Link>
          </S.Card>
        );
      })}
      <S.Pagination>1 2 3 4 5</S.Pagination>
    </S.CardGrid>
  );
};

export default ShopList;