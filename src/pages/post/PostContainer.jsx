import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./style";
import PostCategory from "./postcategory/PostCategory";
import PostCard from "./postCard/PostCard";
import PostNumberSelect from "./postNumberSelect/PostNumberSelect";

const dummyPosts = Array.from({ length: 45 }).map((_, i) => ({
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
  const [pageNumber, setPageNumber] = useState(1);
  const postsPerPage = 9;

  const startIndex = (pageNumber - 1) * postsPerPage;
  const currentPosts = dummyPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <S.Container>
      {/* === 배너 === */}
      <S.Banner>
        <div className="banner-inner"></div>
      </S.Banner>

      {/* === 카테고리/드롭다운 === */}
      <PostCategory />

      {/* === 카드형 게시판 === */}
      <S.Grid>
        {currentPosts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            onClick={() => navigate(`/main/post/read/${post.id}`)}
          />
        ))}
      </S.Grid>

      {/* === 글쓰기 버튼 === */}
      <S.WriteButtonWrapper>
        <button
          className="write-btn"
          onClick={() => navigate("/main/post/write")}
        >
          오늘의 솜 작성하기
        </button>
      </S.WriteButtonWrapper>

      {/* === 페이지네이션 === */}
      <PostNumberSelect
        postList={dummyPosts}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

      <Outlet />
    </S.Container>
  );
};

export default PostContainer;
