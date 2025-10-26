import React, { useState } from 'react';
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

const MySomPartyContainer = () => {
  const [activeFilter, setActiveFilter] = useState('completed');

  const challenges = [
    {
      type: '파티',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회',
      button: '리뷰하기'
    },
    {
      type: '파티',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회',
      button: '리뷰하기'
    }
  ];

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
              <button style={{
                padding: '8px 16px',
                backgroundColor: '#0051FF',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {challenge.button}
              </button>
            </div>
          </ListItem>
        ))}
      </ListContainer>

      <Pagination>
        <PageButton disabled>&lt; 이전</PageButton>
        <PageNumber>1</PageNumber>
        <PageButton disabled={false}>다음 &gt;</PageButton>
      </Pagination>
    </div>
  );
};

export default MySomPartyContainer;
