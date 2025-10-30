import React from 'react';
import S from './style'

const SomReadInfo = ({somInfo}) => {
  const {
    somTitle,
    somImagePath,
    somImageName,
    somCategory,
    somType,
    somAddress,
    somStartDate,
    somEndDate,
    somCount,
    somContent,
    somLikeCount,
    userName
  } = somInfo
  return (
    <S.somInfoWrap>
      <S.somCategoryWrap>
        <S.somCategoryIcon alt="카테고리 아이콘"/>
        <S.somCategoryTitle>카테고리</S.somCategoryTitle>
        <span>{'>'}</span>
        <S.somCategory>{somCategory}</S.somCategory>
      </S.somCategoryWrap>
      <S.somTitle>{somTitle}</S.somTitle>
      <S.somCountWrap>
        <S.somCountIcon alt="인원수 아이콘"/>
        <S.somCount>{somCount} 명</S.somCount>
      </S.somCountWrap>
      <S.somDateWrap>
        <S.somStartDateWrap>
          <S.somStartDateIcon />
          <S.somStartDateTitle></S.somStartDateTitle>
          <S.somStartDate>{somStartDate}</S.somStartDate>
        </S.somStartDateWrap>
        <S.somEndDateWrap>
          <S.somEndDateIcon />
          <S.somEndDateTitle></S.somEndDateTitle>
          <S.somEndDate>{somStartDate}</S.somEndDate>
        </S.somEndDateWrap>
      </S.somDateWrap>
      <S.somAddressWrap>
        <S.somAddressIcon />
        <S.somAddress>{somAddress}</S.somAddress>
      </S.somAddressWrap>
      <S.somButtonWrap>
        <S.somWhisperButton>귓솜말하기</S.somWhisperButton>
        <S.somJoinButton>참여하기 {somCount}/10</S.somJoinButton>
        <S.somLikeButtonWrap>
          <S.somLikeIcon />
          <S.somLikeCount>{somLikeCount}</S.somLikeCount>
        </S.somLikeButtonWrap>
      </S.somButtonWrap>
    </S.somInfoWrap>
  );
};

export default SomReadInfo;