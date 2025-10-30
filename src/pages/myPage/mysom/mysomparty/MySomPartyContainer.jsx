import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentTitle,
  ContentSubtitle,
  FilterContainer,
  FilterButton,
  ListContainer,
  ListItem,
  ItemType,
  ItemTitle,
  ItemDetails,
  Pagination,
  PageButton,
  PageNumber
} from '../style';
import styled from 'styled-components';

const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #0051FF;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #003DB8;
  }
`;

const feedbackOptions = [
  '챌린지 난이도가 적당했어요',
  '미션 설명이 이해하기 쉬웠어요',
  '챌린지 기간이 적당했어요',
  '굿즈, 리워드가 만족스러워요',
  '팀장이 피드백을 자주 남겨줘요',
  '팀장이 응원과 칭찬을 많이 해줘요',
  '팀장이 미션 질문에 잘 답해줘요',
  '팀장이 전체 메시지를 잘 올려요',
  '팀장이 활동기록을 잘 정리해줘요',
  '팀장이 늦은 인증도 잘 관리해줘요',
  '팀장이 나에게 관심을 가져줘요',
  '팀장이 미션 실패자도 챙겨줘요',
  '팀장이 힘이 되어줘요',
  '팀장이 나의 일상을 응원해줘요',
  '팀장이 꼼꼼하고 세심해요',
  '팀장이 재밌고 유쾌해요',
  '팀장이 소통이 잘돼요',
  '팀장이 사진/글을 정성껏 남겨줘요',
  '팀장이 규칙을 잘 안내해줘요',
  '팀장이 팀원 참여율을 잘 관리해줘요',
];

const PopupModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(33, 33, 33, 0.45);
  z-index: 1010;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PopupModal = styled.div`
  background: #fff;
  max-width: 800px;
  width: 98vw;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  padding: 36px 38px 28px 38px;
  position: relative;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 16px; right: 20px;
  border: none;
  background: none;
  font-size: 32px;
  color: #888;
  cursor: pointer;
`;
const PopupTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
  font-weight: bold;
`;
const OptionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 22px 0;
`;
const OptionBtn = styled.button`
  flex: 1 1 30%;
  min-width: 32%;
  max-width: 33.3%;
  box-sizing: border-box;
  padding: 15px 8px;
  border-radius: 22px;
  border: 1px solid #ACB5BF;
  background: ${({selected}) => selected ? '#0051FF' : '#F1F3F6'};
  color: ${({selected}) => selected ? '#fff' : '#515151'};
  font-size: 15px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: background .15s, color .15s;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const PopupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const MySomPartyContainer = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('completed');
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState([]);

  // 모달용 팀/소식지명 변수 -> teamLeaderName 으로 변경
  const teamLeaderName = 'zl존준서';

  const handleOptionClick = (idx) => {
    if(selected.includes(idx)) setSelected(selected.filter(i=>i!==idx));
    else if(selected.length < 3) setSelected([...selected, idx]);
    // 3개 이상 선택시 무시
  };

  const challenges = [
    {
      type: '파티',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회'
    },
    {
      type: '파티',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회'
    }
  ];

  // ✅ 상태에 따라 버튼 라벨과 이동 경로 결정
  const getButtonLabel = () => {
    if (activeFilter === 'progress') return '인증하기';
    if (activeFilter === 'completed') return '리뷰하기';
    return null; // 진행예정일 경우 버튼 없음
  };

  const getButtonPath = () => {
    if (activeFilter === 'progress') return '/main/my-page/my-som-check';
    if (activeFilter === 'completed') return '/main/my-page/my-som-review';
    return null;
  };

  return (
    <div>
      <ContentTitle>파티 솜 현황이 궁금하세요?</ContentTitle>
      <ContentSubtitle>파티 솜 현황을 확인할 수 있어요.</ContentSubtitle>
      
      <FilterContainer>
        <FilterButton
          active={activeFilter === 'scheduled'}
          onClick={() => setActiveFilter('scheduled')}
        >
          진행예정 (2개)
        </FilterButton>
        <FilterButton
          active={activeFilter === 'progress'}
          onClick={() => setActiveFilter('progress')}
        >
          진행중 (2개)
        </FilterButton>
        <FilterButton
          active={activeFilter === 'completed'}
          onClick={() => setActiveFilter('completed')}
        >
          진행완료(15개)
        </FilterButton>
      </FilterContainer>
      
      <ListContainer>
        {challenges.map((challenge, index) => (
          <ListItem key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div>
                <ItemType>{challenge.type}</ItemType>
                <ItemTitle>{challenge.title}</ItemTitle>
                <ItemDetails>
                  <span>{challenge.date}</span>
                  <span>{challenge.repeat} {challenge.progress}</span>
                </ItemDetails>
              </div>

              {/* ✅ 진행예정은 버튼 숨김, 나머지는 상태에 따라 버튼 표시 */}
              {getButtonLabel() && (
                activeFilter === 'progress' ? (
                  <ActionButton onClick={()=>navigate('/main/my-page/my-som-check')}>
                    {getButtonLabel()}
                  </ActionButton>
                ) : (
                  <ActionButton onClick={()=>setShowPopup(true)}>
                    {getButtonLabel()}
                  </ActionButton>
                )
              )}
            </div>
          </ListItem>
        ))}
      </ListContainer>

      <Pagination>
        <PageButton disabled>&lt; 이전</PageButton>
        <PageNumber>1</PageNumber>
        <PageButton disabled={false}>다음 &gt;</PageButton>
      </Pagination>

      {/* 팝업 모달 */}
      {showPopup && (
        <PopupModalOverlay>
          <PopupModal>
            <CloseButton onClick={()=>setShowPopup(false)}>×</CloseButton>
            <PopupTitle>({teamLeaderName})팀장의의 어떤 점이 좋았는지 선택해주세요! <span style={{fontSize:'14px',fontWeight:'normal',color:'#888'}}>최대 3개, 복수선택가능</span></PopupTitle>
            <div style={{fontSize:'13px',color:'#AAB6BF',margin:'0 0 8px'}}>설문은 익명으로 저장되며 더 나은 소식지를 위해 활용됩니다.</div>
            <OptionGrid>
              {feedbackOptions.map((option, i) => (
                <OptionBtn key={i} selected={selected.includes(i)} onClick={()=>handleOptionClick(i)}>
                  {option}
                </OptionBtn>
              ))}
            </OptionGrid>
            <PopupFooter>
              <ActionButton type="button" onClick={()=>{setShowPopup(false);setSelected([]);}}>완료</ActionButton>
            </PopupFooter>
          </PopupModal>
        </PopupModalOverlay>
      )}
    </div>
  );
};

export default MySomPartyContainer;
