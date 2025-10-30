import React from 'react';
import S from './style';
import SomMemberContent from '../somMemberContent/SomMemberContent';

const SomMemberList = ({somMemberList}) => {

  const list = somMemberList.map((data) => (
    <SomMemberContent memberData={data}/>
  ));

  console.log(list)

  return (
    <S.somMemberListContainer>
      <S.somMemberListTitleWrap>
        <S.somMemberListTitle>함께하는 멤버</S.somMemberListTitle>
        <S.somMemberListTitleCotext></S.somMemberListTitleCotext>
      </S.somMemberListTitleWrap>
      <S.somMemberListContents>
        {list}
      </S.somMemberListContents>
    </S.somMemberListContainer>
  );
};

export default SomMemberList;