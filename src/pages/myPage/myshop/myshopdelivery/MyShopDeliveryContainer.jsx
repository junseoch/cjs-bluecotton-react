import React, { useState } from 'react';
import {
  FilterContainer,
  FilterButton,
  ListHeader,
  ListContainer,
  ListItem,
  ItemDetails,
  ItemTitle,
  Pagination,
  PageButton,
  PageNumber,
  DeliveryItemImage,
  ActionButton
} from '../style';

const MyShopDeliveryContainer = () => {
  const [activeFilter, setActiveFilter] = useState('completed');

  const items = [
    { id: 1, name: '솜이 인형', date: '2025-09-11' },
    { id: 2, name: '솜이 인형', date: '2025-09-11' },
    { id: 3, name: '솜이 인형', date: '2025-09-11' },
    { id: 4, name: '솜이 인형', date: '2025-09-16' },
    { id: 5, name: '솜이 인형', date: '2025-09-11' }
  ];

  return (
    <div>
      <FilterContainer>
        <FilterButton
          active={activeFilter === 'pending'}
          onClick={() => setActiveFilter('pending')}
        >
          구매완료(5개)
        </FilterButton>
        <FilterButton
          active={activeFilter === 'shipping'}
          onClick={() => setActiveFilter('shipping')}
        >
          배송 중
        </FilterButton>
        <FilterButton
          active={activeFilter === 'completed'}
          onClick={() => setActiveFilter('completed')}
        >
          배송완료
        </FilterButton>
      </FilterContainer>

      <ListHeader>배송완료(5개)</ListHeader>
      
      <ListContainer>
        {items.map(item => (
          <ListItem key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <DeliveryItemImage />
              <ItemDetails style={{ flex: 1 }}>
                <div>상품</div>
                <ItemTitle>{item.name}</ItemTitle>
                <div>구매 일자</div>
                <div>{item.date}</div>
              </ItemDetails>
              <div>
                <ActionButton>구매 취소</ActionButton>
                <ActionButton primary>리뷰하기</ActionButton>
              </div>
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

export default MyShopDeliveryContainer;
