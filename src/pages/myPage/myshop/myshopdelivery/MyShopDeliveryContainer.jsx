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
  PageNumber
} from '../style';
import styled, { css } from 'styled-components';

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: #E0E0E0;
  margin-right: 16px;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: ${props => props.primary ? 'none' : '1px solid #E0E0E0'};
  background-color: ${props => props.primary ? '#0051FF' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#111111'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s;
  
  &:hover {
    ${props => props.primary 
      ? css`background-color: #003DB8;`
      : css`background-color: #F5F5F5;`
    }
  }
`;

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
              <ItemImage />
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
