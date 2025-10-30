import React from 'react';
import {
  ListHeader,
  ListContainer,
  ListItem,
  Pagination,
  PageButton,
  PageNumber
} from '../style';
import styled, { css } from 'styled-components';

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #E0E0E0;
  border-radius: 8px;
  margin-right: 16px;
`;

const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const PurchaseDate = styled.div`
  font-size: 14px;
  color: #757575;
`;

const Stars = styled.span`
  color: #FFD700;
  font-size: 20px;
`;

const ReviewDate = styled.div`
  font-size: 14px;
  color: #757575;
  margin-top: 4px;
`;

const ReviewText = styled.div`
  font-size: 16px;
  color: #111111;
  margin-top: 8px;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${props => props.primary ? '#0051FF' : '#E0E0E0'};
  background-color: ${props => props.primary ? '#0051FF' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#111111'};
  transition: all 0.2s;
  
  &:hover {
    ${props => props.primary 
      ? css`background-color: #003DB8; border-color: #003DB8;`
      : css`background-color: #F5F5F5;`
    }
  }
`;

const MyShopReviewContainer = () => {
  const reviews = [
    { id: 1, name: '솜이 레옹 키링', date: '2025.09.20', rating: 5, text: '기대 그 이상의 이상이에요 가방에 차고 다니니까 예뻐요!' },
    { id: 2, name: '솜이 인형', purchaseDate: '2025-09-11' }
  ];

  return (
    <div>
      <ListHeader>마이리뷰(5개)</ListHeader>
      
      <ListContainer>
        {reviews.map(review => (
          <ListItem key={review.id}>
            <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
              <ItemImage />
              <ItemContent>
                <ProductInfo>
                  <ProductName>{review.name}</ProductName>
                  {review.rating && (
                    <>
                      <Stars>{'★'.repeat(review.rating)}</Stars>
                      <ReviewDate>{review.date}</ReviewDate>
                      <ReviewText>{review.text}</ReviewText>
                    </>
                  )}
                  {review.purchaseDate && (
                    <PurchaseDate>구매 일자: {review.purchaseDate}</PurchaseDate>
                  )}
                </ProductInfo>
              </ItemContent>
              <ActionButtons>
                <Button primary>리뷰 수정</Button>
                <Button>리뷰 삭제</Button>
              </ActionButtons>
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

export default MyShopReviewContainer;
