import React from "react";
import S from "./style";

const ShopReview = () => {
  const reviewData = [
    { rating: 5, count: 15 },
    { rating: 4, count: 4 },
    { rating: 3, count: 2 },
    { rating: 2, count: 1 },
    { rating: 1, count: 0 },
  ];

  const total = reviewData.reduce((sum, item) => sum + item.count, 0);
  const avg = 4.6;

  return (
    <S.ReviewSection>
      <S.ReviewTitle>평점 및 리뷰</S.ReviewTitle>

      <S.ReviewContainer>
        {/* 왼쪽: 평균 평점 */}
        <S.ReviewLeft>
          <S.ReviewAverage>{avg}</S.ReviewAverage>
          <S.ReviewCount>
            <img src="/assets/icons/review.svg" alt="리뷰 아이콘" />
            리뷰 {total}개
          </S.ReviewCount>
        </S.ReviewLeft>

        {/* 오른쪽: 리뷰 바 */}
        <S.ReviewRight>
          {reviewData.map((r) => (
            <S.ReviewRow key={r.rating}>
              <S.ReviewLabel>{r.rating}</S.ReviewLabel>
              <S.ReviewBar>
                <S.ReviewFill
                  $ratio={(r.count / total) * 100}
                />
              </S.ReviewBar>
              <S.ReviewCountText>{r.count}</S.ReviewCountText>
            </S.ReviewRow>
          ))}
        </S.ReviewRight>
      </S.ReviewContainer>
    </S.ReviewSection>
  );
};

export default ShopReview;
