import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./style";
import PostCategory from "./postcategory/PostCategory";

const PostContainer = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      {/* === 배너 === */}
      <S.Banner>
        <div className="banner-inner">
          <div className="text-box">
            <h1>오늘의 솜</h1>
            <p>소미의 도전을 오늘의 솜에서 적어봐요 ✏️</p>
          </div>
        </div>
      </S.Banner>

      {/* === 카테고리/드롭다운 === */}
      <PostCategory />

      {/* === 카드형 게시판 === */}
      <S.Grid>
        {Array.from({ length: 9 }).map((_, i) => (
          <Link
            key={i}
            to={`/main/post/read/${i + 1}`} // ✅ 상세 페이지 이동
            style={{ textDecoration: "none" }}
          >
            <S.Card>
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
          </Link>
        ))}
      </S.Grid>

      {/* === 글쓰기 버튼 + 페이지네이션 === */}
      <S.Pagination>
        <div className="top-bar">
          {/* ✅ 버튼 클릭 시 /main/post/write 이동 */}
          <button
            className="write-btn"
            onClick={() => navigate("/main/post/write")}
          >
            오늘의 솜 작성하기
          </button>
        </div>

        <div className="page-buttons">
          <button>{"<"}</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className={n === 1 ? "active" : ""}>
              {n}
            </button>
          ))}
          <button>{">"}</button>
        </div>
      </S.Pagination>

      <Outlet />
    </S.Container>
  );
};

export default PostContainer;
