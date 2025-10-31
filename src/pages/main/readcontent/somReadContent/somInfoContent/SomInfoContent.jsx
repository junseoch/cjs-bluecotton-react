import React from 'react';
import S from './style';
import SomMemberList from './somMemberList/SomMemberList'

const SomInfoContent = ({infoMenuSelect, somMemberList}) => {
  let content = ""

  if(infoMenuSelect === "info"){
    content = ( 
    <S.somContent>
      솜 정보
    </S.somContent> 
    );
  } else if (infoMenuSelect === "memberList") {
    content = (
      <SomMemberList somMemberList={somMemberList} />
    )
  } else if (infoMenuSelect === "leader") {
    content = (
      <S.somLeaderInfo>

      </S.somLeaderInfo>
    )
  } else {
    content = ( 
    <S.somContent>
      솜 정보
    </S.somContent> 
    );
  }

  return (
    <S.somReadContentContainer>
      {content}
    </S.somReadContentContainer>
  );
};

export default SomInfoContent;