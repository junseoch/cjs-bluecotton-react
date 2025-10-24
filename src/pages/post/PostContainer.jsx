import React, { useState } from "react";
import * as S from "./style";

const categories = ["전체", "학습", "건강", "소셜", "취미", "생활", "루키"];
const filters = [
  { value: "latest", label: "최신순" },
  { value: "comment", label: "조회순" },
  { value: "comment", label: "댓글순" },
  { value: "popular", label: "좋아요순" }
];

const PostContainer = () => {
  const [activeCat, setActiveCat] = useState("전체");
  const [filter, setFilter] = useState("latest");

  return (
    <S.Container>
      {/* 배너 */}
    <S.Banner>
      <div className="banner-inner">
        <div className="text-box">
          <h1>오늘의 솜</h1>
          <p>소미의 도전을 오늘의 솜에서 적어봐요 ✏️</p>
        </div>
        <button className="write-btn">오늘의 솜 작성하기</button>
      </div>
    </S.Banner>

      {/* 카테고리 + 드롭다운 */}
      <S.TopBar>
        <S.CategoryList>
          {categories.map((c) => (
            <S.CategoryButton
              key={c}
              active={activeCat === c}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </S.CategoryButton>
          ))}
        </S.CategoryList>
        <S.FilterBox>
          <S.FilterSelect
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {filters.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </S.FilterSelect>
        </S.FilterBox>
      </S.TopBar>

      {/* 카드형 게시판 */}
      <S.Grid>
        {Array.from({ length: 9 }).map((_, i) => (
          <S.Card key={i}>
            <div className="thumb">
              <img src="https://via.placeholder.com/370x210" alt="썸네일" />
            </div>
            <div className="meta">
              <div>
                <div className="category">건강</div>
                <div className="title">게시물 제목 {i + 1}</div>
                <div className="desc">
                  챌린지 후기 내용이 요약되어 들어갈 자리입니다.
                </div>
              </div>
              <div className="info">
                <span>조회 145</span>
                <span>댓글 12</span>
              </div>
            </div>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default PostContainer;
