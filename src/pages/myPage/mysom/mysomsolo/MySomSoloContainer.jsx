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

const MySomSoloContainer = () => {
  const [activeFilter, setActiveFilter] = useState('scheduled');

  const challenges = [
    {
      type: '솔로',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.31',
      repeat: '[요일반복] [금]',
      progress: '4회/4회'
    },
    {
      type: '솔로',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.31',
      repeat: '[요일반복] [금]',
      progress: '4회/4회'
    }
  ];

  return (
    <div>
      <ContentTitle>솔로 솜 현황이 궁금하세요?</ContentTitle>
      <ContentSubtitle>솔로 솜 현황을 확인할 수 있어요.</ContentSubtitle>
      
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
            <div>
              <ItemType>{challenge.type}</ItemType>
              <ItemTitle>{challenge.title}</ItemTitle>
              <ItemDetails>
                <span>{challenge.date}</span>
                <span>{challenge.repeat} {challenge.progress}</span>
              </ItemDetails>
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

export default MySomSoloContainer;
