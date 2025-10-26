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

const MyPostLikeContainer = () => {
  const posts = [
    {
      type: '솔로',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회'
    },
    {
      type: '솔로',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회'
    },
    {
      type: '파티',
      title: '플로깅 챌린지',
      date: '2025.09.05 ~ 2025.09.12',
      repeat: '[요일반복] [토]',
      progress: '4회/7회'
    },
    {
      type: '솔로',
      title: '2km 런닝 뛰기 챌린지!!',
      date: '2025.09.01 ~ 2025.09.07',
      repeat: '[요일반복] [금]',
      progress: '7회/7회'
    },
    {
      type: '솔로',
      title: '스쿼트 100회 도전',
      date: '2025.09.10 ~ 2025.09.17',
      repeat: '[매일]',
      progress: '3회/7회'
    }
  ];

  return (
    <div>
      <ListHeader>좋아요(5개)</ListHeader>
      
      <ListContainer>
        {posts.map((post, index) => (
          <ListItem key={index}>
            <div>
              <ItemType>{post.type}</ItemType>
              <ItemTitle>{post.title}</ItemTitle>
              <ItemDetails>
                <span>{post.date}</span>
                <span>{post.repeat} {post.progress}</span>
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

export default MyPostLikeContainer;
