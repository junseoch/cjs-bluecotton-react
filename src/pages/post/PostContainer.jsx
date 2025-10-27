import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./style";
import PostCategory from "./postcategory/PostCategory";
import PostCard from "./postCard/PostCard";

const dummyPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  thumbnail: "https://via.placeholder.com/486x250",
  category: "건강",
  challengeDay: 10,
  title: `다이어트 블로그 ${i + 1}일차 기록 - 배...`,
  excerpt: "다이어트 30일차 : 51.35kg 6시 이후 안 먹고 과자 안 먹고...",
  profile: "https://via.placeholder.com/20",
  nickname: "지존준서",
  date: "2025.9.28.",
  comments: 12,
  likes: 9,
  views: 145,
}));

const PostContainer = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Banner>
      {/* === 배너 === */}
        <div className="banner-inner">
        </div>
      </S.Banner>

      {/* === 카테고리/드롭다운 === */}
      <PostCategory />

      {/* === 카드형 게시판 === */}
      <S.Grid>
        {dummyPosts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            onClick={() => navigate(`/main/post/read/${post.id}`)}
          />
        ))}
      </S.Grid>

      {/* === 글쓰기 버튼 + 페이지네이션 === */}
      <S.Pagination>
        <div className="top-bar">
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
