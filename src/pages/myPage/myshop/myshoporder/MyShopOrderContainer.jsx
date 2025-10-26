import React from 'react';
import {
  ListHeader,
  ListContainer,
  ListItem,
  Pagination,
  PageButton,
  PageNumber
} from '../style';
import styled from 'styled-components';

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

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const PurchaseDate = styled.div`
  font-size: 14px;
  color: #757575;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #0051FF;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #003BBF;
  }
`;

const MyShopOrderContainer = () => {
  const orders = [
    { id: 1, name: '솜이 인형', date: '2025-09-11' },
    { id: 2, name: '솜이 인형', date: '2025-09-11' },
    { id: 3, name: '솜이 인형', date: '2025-09-11' },
    { id: 4, name: '솜이 인형', date: '2025-09-11' },
    { id: 5, name: '솜이 인형', date: '2025-09-11' }
  ];

  return (
    <div>
      <ListHeader>구매내역(5개)</ListHeader>
      
      <ListContainer>
        {orders.map(order => (
          <ListItem key={order.id}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <ItemImage />
              <ItemContent>
                <div>상품</div>
                <ProductName>{order.name}</ProductName>
                <div>구매 일자</div>
                <PurchaseDate>{order.date}</PurchaseDate>
              </ItemContent>
              <ActionButton>리뷰하기</ActionButton>
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

export default MyShopOrderContainer;
