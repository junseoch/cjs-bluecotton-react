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
  OrderProductName,
  PurchaseDate,
  OrderActionButton
} from '../style';

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
              <OrderItemImage />
              <ItemContent>
                <div>상품</div>
                <OrderProductName>{order.name}</OrderProductName>
                <div>구매 일자</div>
                <PurchaseDate>{order.date}</PurchaseDate>
              </ItemContent>
              <OrderActionButton>리뷰하기</OrderActionButton>
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
