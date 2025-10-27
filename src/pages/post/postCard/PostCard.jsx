import React from "react";
import * as S from "./style";

const PostCard = ({
  id,
  thumbnail,
  category,
  challengeDay,
  title,
  excerpt,
  profile,
  nickname,
  date,
  comments,
  likes,
  views,
  onClick,
}) => {
  return (
    <S.Card onClick={onClick}>
      <S.ThumbWrap>
        <img src={thumbnail} alt="썸네일" />
      </S.ThumbWrap>

      <S.Body>
        <S.MetaTop>
          <span className="category">{category}</span>
          {challengeDay && (
            <>
              <span className="dot">|</span>
              <span className="challenge">도전 {challengeDay}일</span>
            </>
          )}
        </S.MetaTop>

        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>

        <S.MetaBottom>
          <div className="left">
            <img className="avatar" src={profile} alt="프로필" />
            <span className="nick">{nickname}</span>
            <span className="dot">|</span>
            <span className="date">{date}</span>
          </div>

          <div className="right">
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
        </S.MetaBottom>
      </S.Body>
    </S.Card>
  );
};

export default PostCard;
