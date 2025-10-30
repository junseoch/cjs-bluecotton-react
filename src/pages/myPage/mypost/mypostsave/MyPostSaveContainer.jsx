import React from 'react';
import {
  ListHeader,
  ListContainer,
  ListItem,
  ItemType,
  ItemTitle,
  ItemDetails,
  Pagination,
  PageButton,
  PageNumber
} from '../style';

const MyPostSaveContainer = () => {
  const posts = [
    {
      type: '솔로',
      title: '초록색 패션 코디 챌린지',
      date: '2025.09.15',
      status: '임시저장'
    },
    {
      type: '파티',
      title: '친구들과 함께하는 산책',
      date: '2025.09.10',
      status: '임시저장'
    },
    {
      type: '솔로',
      title: '다이어트 습관 만들기',
      date: '2025.09.05',
      status: '임시저장'
    }
  ];

  return (
    <div>
      <ListHeader>임시저장한 글(3개)</ListHeader>
      
      <ListContainer>
        {posts.map((post, index) => (
          <ListItem key={index}>
            <div>
              <ItemType>{post.type}</ItemType>
              <ItemTitle>{post.title}</ItemTitle>
              <ItemDetails>
                <span>저장일: {post.date}</span>
                <span>{post.status}</span>
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

export default MyPostSaveContainer;
