import React from 'react';
import S from './style';

const SomMemberContent = ({memberData}) => {
  const {
    userName,
    userProfileImagePath,
    userProfileImageName
  } = memberData

  return (
    <S.userInfoContainer>
      <S.userInfoIamge src={userProfileImagePath} alt={userProfileImageName}/>
      <S.userInfoName>{userName}</S.userInfoName>
    </S.userInfoContainer>
  );
};
export default SomMemberContent;