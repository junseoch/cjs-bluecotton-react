import React from "react";
import * as S from "./style";

const PostCard = ({
  id,
  category,
  challengeDay,
  title,
  excerpt,
  views,
  comments,
  likes,
  date,
  nickname,
  avatar,
  imageUrl,
  onClick, // ✅ navigate 함수 받기
}) => {
  return (
    <S.Card onClick={onClick} role="button" tabIndex={0}>
      <S.ThumbWrap>
        <img src={imageUrl} alt="썸네일" />
      </S.ThumbWrap>

      <S.Body>
        {/* 상단 메타 */}
        <S.MetaTop>
          <span className="category">{category}</span>
          <span className="bar">|</span>
          <span className="challenge">도전 {challengeDay}일</span>
        </S.MetaTop>

        {/* 제목 */}
        <S.Title>{title}</S.Title>

        {/* 요약 */}
        <S.Excerpt>{excerpt}</S.Excerpt>

        {/* 하단 정보 */}
        <S.MetaBottom>
          <div className="left">
            <img className="avatar" src={avatar} alt="프로필" />
            <span className="nick">{nickname}</span>
            <span className="bar">|</span>
            <span className="date">{date}</span>
            <span className="bar">|</span>
            <span className="stat">
              <S.IconComment /> {comments}
            </span>
            <span className="stat">
              <S.IconHeart /> {likes}
            </span>
            <span className="stat">
              <S.IconEye /> {views}
            </span>
          </div>
          <div className="right">신고</div>
        </S.MetaBottom>
      </S.Body>
    </S.Card>
  );
};

export default PostCard;
