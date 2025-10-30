import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import S from "../style";

const ShopReview = () => {

  const theme = useTheme();

  const ratingBuckets = [
    { rating: 5, count: 15 },
    { rating: 4, count: 4 },
    { rating: 3, count: 2 },
    { rating: 2, count: 1 },
    { rating: 1, count: 0 },
  ];
  const totalCount = useMemo(
    () => ratingBuckets.reduce((s, r) => s + r.count, 0),
    [ratingBuckets]
  );
  const avgScore = 4.6; 

const StarIcon = (props) => (
  <svg width="19" height="18" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <polygon
      fill="currentColor"
      points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
    />
  </svg>
);


  // 드롭다운
  const [reviewTypeOpen, setReviewTypeOpen] = useState(false);
  const [sortTypeOpen, setSortTypeOpen] = useState(false);
  const [selectedReviewType, setSelectedReviewType] = useState("전체 리뷰");
  const [selectedSortType, setSelectedSortType] = useState("최신순");

  const reviewTypeOptions = ["전체 리뷰", "사진 리뷰"];
  const sortTypeOptions = ["최신순", "별점 높은 순", "별점 낮은 순"];

  const reviewList = [
    {
      id: 1,
      userName: "이태*",
      date: "2025.09.20",
      rating: 5,
      content: "배송 빠르고 솜이 인형 너무 귀여워요 ㅎㅎ",
      image: "/assets/images/shop_review_som_doll1.png",
      profile: "/assets/images/shop_review_profile1.png",
      helpfulCount: 0,
    },
    {
      id: 2,
      userName: "jys332*",
      date: "2025.09.20",
      rating: 4,
      content: "기대 그 이상의 이상 졸귀탱",
      image: "/assets/images/shop_review_som_doll2.png",
      profile: "/assets/images/shop_review_profile2.png",
      helpfulCount: 2,
    },
  ];

  const [helpfulState, setHelpfulState] = useState(
    Object.fromEntries(reviewList.map((r) => [r.id, { active: false, count: r.helpfulCount }]))
  );

  const toggleHelpful = (id) => {
    setHelpfulState((prev) => {
      const cur = prev[id] ?? { active: false, count: 0 };
      const nextActive = !cur.active;
      return {
        ...prev,
        [id]: { active: nextActive, count: cur.count + (nextActive ? 1 : -1) },
      };
    });
  };

  return (
    <S.ReviewSection>
      {/* 제목 + 드롭다운 */}
      <S.ReviewRatingTitleWrap>
        <S.ReviewRatingTitle>상품 리뷰</S.ReviewRatingTitle>

        <S.DropdownArea>
          {/* 첫 번째 드롭다운: 전체/사진 */}
          <S.Dropdown
            $active={reviewTypeOpen}
            onClick={() => {
              setReviewTypeOpen((p) => !p);
              setSortTypeOpen(false);
            }}
          >
            {selectedReviewType}
            <S.ArrowIcon
              src="/assets/icons/drop_down.svg"
              alt="리뷰 유형 선택"
            />
            {reviewTypeOpen && (
              <S.DropdownList>
                {reviewTypeOptions.map((opt) => (
                  <S.DropdownItem
                    key={opt}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedReviewType(opt);
                      setReviewTypeOpen(false);
                    }}
                  >
                    {opt}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.Dropdown>

          {/* 두 번째 드롭다운: 정렬 */}
          <S.Dropdown
            $active={sortTypeOpen}
            onClick={() => {
              setSortTypeOpen((p) => !p);
              setReviewTypeOpen(false);
            }}
          >
            {selectedSortType}
            <S.ArrowIcon
              src="/assets/icons/drop_down.svg"
              alt="정렬 옵션 선택"
            />
            {sortTypeOpen && (
              <S.DropdownList>
                {sortTypeOptions.map((opt) => (
                  <S.DropdownItem
                    key={opt}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSortType(opt);
                      setSortTypeOpen(false);
                    }}
                  >
                    {opt}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.Dropdown>
        </S.DropdownArea>
      </S.ReviewRatingTitleWrap>

      {/* 상단 리뷰 통계(평균 + 분포 바) */}
      <S.ReviewContainer>
        <S.ReviewLeft>
          <S.ReviewAverage>{avgScore}</S.ReviewAverage>
          <S.ReviewCount>
            <img src="/assets/icons/review.svg" alt="리뷰 아이콘" />
            리뷰 {totalCount}개
          </S.ReviewCount>
        </S.ReviewLeft>

        <S.ReviewRight>
          {ratingBuckets.map((r) => {
            const percent = totalCount ? (r.count / totalCount) * 100 : 0;
            return (
              <S.ReviewRow key={r.rating}>
                <S.ReviewLabel>{r.rating}</S.ReviewLabel>
                <S.ReviewBar>
                  <S.ReviewFill percent={percent} />
                </S.ReviewBar>
                <S.ReviewCountText>{r.count}</S.ReviewCountText>
              </S.ReviewRow>
            );
          })}
        </S.ReviewRight>
      </S.ReviewContainer>

      {/* 리뷰 리스트 */}
      {reviewList.map((rv) => (
        <S.ReviewItem key={rv.id}>
          <S.ReviewHeader>
            <S.ProfileImage src={rv.profile} alt={`${rv.userName} 프로필`} />
            <S.UserInfoWrap>
              <S.StarRow>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    width={19}
                    height={18}
                    fill={i < rv.rating ? theme.PALLETE.review.main : "#E0E0E0"} 
                  />
                ))}
              </S.StarRow>
              <S.UserMeta>
                <S.UserName>{rv.userName}</S.UserName>
                <S.Dot>·</S.Dot>
                <S.ReviewDate>{rv.date}</S.ReviewDate>
                <S.Dot>·</S.Dot>
                <S.ReportButton>신고하기</S.ReportButton>
              </S.UserMeta>
            </S.UserInfoWrap>
          </S.ReviewHeader>

          {rv.image && (
            <S.ReviewImage>
              <img src={rv.image} alt="리뷰 이미지" />
            </S.ReviewImage>
          )}

          <S.ReviewText>{rv.content}</S.ReviewText>

          <S.ReviewFooter>
            <S.HelpfulButton
              $active={helpfulState[rv.id]?.active}
              onClick={() => toggleHelpful(rv.id)}
            >
              <img
                src={
                  helpfulState[rv.id]?.active
                    ? "/assets/icons/smile_white.svg"
                    : "/assets/icons/smile_gray.svg"
                }
                alt="도움돼요"
              />
              도움돼요 {helpfulState[rv.id]?.count ?? 0}
            </S.HelpfulButton>
          </S.ReviewFooter>

          <S.ReviewDivider />
        </S.ReviewItem>
      ))}
    </S.ReviewSection>
  );
};

export default ShopReview;
