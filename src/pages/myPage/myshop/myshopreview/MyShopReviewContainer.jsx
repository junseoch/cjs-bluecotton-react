import React from 'react';
import {
  ListHeader,
  ListContainer,
  ListItem,
  Pagination,
  PageButton,
  PageNumber,
  OrderItemImage,
  ItemContent,
  ReviewProductInfo,
  OrderProductName,
  PurchaseDate,
  ReviewStars,
  ReviewDate,
  ReviewText,
  ReviewActionButtons,
  ReviewButton
} from '../style';

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
              <OrderItemImage />
              <ItemContent>
                <ReviewProductInfo>
                  <OrderProductName>{review.name}</OrderProductName>
                  {review.rating && (
                    <>
                      <ReviewStars>{'★'.repeat(review.rating)}</ReviewStars>
                      <ReviewDate>{review.date}</ReviewDate>
                      <ReviewText>{review.text}</ReviewText>
                    </>
                  )}
                  {review.purchaseDate && (
                    <PurchaseDate>구매 일자: {review.purchaseDate}</PurchaseDate>
                  )}
                </ReviewProductInfo>
              </ItemContent>
              <ReviewActionButtons>
                <ReviewButton primary>리뷰 수정</ReviewButton>
                <ReviewButton>리뷰 삭제</ReviewButton>
              </ReviewActionButtons>
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
