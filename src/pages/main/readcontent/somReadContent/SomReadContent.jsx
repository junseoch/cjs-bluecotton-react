import React from 'react';
import S from './style'
import SomInfoContent from './somInfoContent/SomInfoContent';

const SomReadContent = ({
  somMemberList,
  setSomMemberList,
  infoMenuSelect, 
  setInfoMenuSelect,
  somInfo
}) => {

  const { somImageName, somImagePath } = somInfo;

  return (
    <S.somReadContentContainer>
      <S.somImage src={somImagePath} alt={somImageName}/>
      <S.somInfoMenu>
        <S.somInfo onClick={() => {setInfoMenuSelect("info");}}>정보</S.somInfo>
        <S.somMemberList onClick={() => {setInfoMenuSelect("memberList");}}>함께하는 멤버</S.somMemberList>
        <S.somLeader onClick={() => setInfoMenuSelect("leader")}>팀장</S.somLeader>
      </S.somInfoMenu>
      <SomInfoContent infoMenuSelect={infoMenuSelect} somMemberList={somMemberList} setSomMemberList={somMemberList}/>
    </S.somReadContentContainer>
  );
};

export default SomReadContent;