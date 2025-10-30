import React from "react";
import S from "./style";

const SomContent = ({ content }) => {
  const {
    somTitle,
    somImageLocation,
    somAddress,
    somStartDate,
    somEndDate,
    somCount,
    somLikeCount,
    userName,
    userProfileLocation
  } = content;

  const isFullSomButton = somCount == 10 ? 
  <S.FullSomButton>참여 ({somCount}/10)</S.FullSomButton> :
  <S.SomButton>참여 ({somCount}/10)</S.SomButton> 
  ;

  return (
    <S.Card>
      <S.SomImage src={somImageLocation} alt={somTitle} />
      <S.SomInfo>
        <S.SomTitleArea>
          <img src={userProfileLocation} alt={userName} />
          <S.SomTitle>{somTitle}</S.SomTitle>
        </S.SomTitleArea>
        <S.SomExplanation>
          <S.SomExplantionArea>
            <S.SomExplanationInfo>
              <span>icon</span>
              <span>{somAddress}</span>
            </S.SomExplanationInfo>
            <span>
              {somStartDate}
            </span>
          </S.SomExplantionArea>
          <S.SomExplantionArea>
            <S.SomExplanationInfo>
              <span>icon</span>
              <span>솜 마감일</span>
            </S.SomExplanationInfo>
            <span>
              {somEndDate}
            </span>
          </S.SomExplantionArea>
        </S.SomExplanation>
      </S.SomInfo>
      <S.SomButtonArea>
        <S.SomButton>귓솜말하기</S.SomButton>
        {isFullSomButton}
        <S.LikeButton>
          <span>
            ❤️ {/* 여기 하트 아이콘 들어갈 자리 ♥ */}
          </span>
          <span>
            {somLikeCount}
          </span>
        </S.LikeButton>
      </S.SomButtonArea>
    </S.Card>
  );
};

export default SomContent;
