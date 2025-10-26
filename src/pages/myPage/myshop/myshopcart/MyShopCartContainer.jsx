import React from 'react';
import {
  ListHeader,
  FilterContainer,
  FilterButton,
  ListContainer
} from '../style';
import styled from 'styled-components';

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SelectAll = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  gap: 16px;
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #E0E0E0;
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #E0E0E0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const PriceInfo = styled.div`
  text-align: right;
`;

const PriceRow = styled.div`
  font-size: 14px;
  color: #757575;
  margin-bottom: 4px;
`;

const PriceValue = styled.span`
  margin-left: 8px;
  font-weight: 600;
  color: #111111;
`;

const OrderSummary = styled.div`
  background-color: #F9F9F9;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    font-size: 18px;
    font-weight: 700;
    color: #0051FF;
    margin-bottom: 0;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #0051FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    background-color: #003BBF;
  }
`;

const MyShopCartContainer = () => {
  const items = [
    { id: 1, name: '솜이 레옹 키링', price: 5000 },
    { id: 2, name: '솜이 메모지', price: 4000 }
  ];

  return (
    <div>
      <ListHeader>장바구니</ListHeader>
      
      <FilterContainer>
        <FilterButton active>일반 상품</FilterButton>
        <FilterButton>캔디 상품</FilterButton>
      </FilterContainer>

      <CartHeader>
        <SelectAll>
          <input type="checkbox" /> 전체선택
        </SelectAll>
        <button style={{ padding: '8px 16px', backgroundColor: '#E0E0E0', border: 'none', borderRadius: '8px' }}>삭제</button>
      </CartHeader>

      <ListContainer>
        {items.map(item => (
          <CartItem key={item.id}>
            <input type="checkbox" />
            <ItemImage />
            <ItemInfo>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <ItemName>{item.name}</ItemName>
                  <div style={{ color: '#757575', fontSize: '14px', marginBottom: '8px' }}>삭제</div>
                  <QuantityControl>
                    <QuantityButton>-</QuantityButton>
                    <Quantity>1</Quantity>
                    <QuantityButton>+</QuantityButton>
                  </QuantityControl>
                </div>
                <PriceInfo>
                  <PriceRow>상품금액(1개) <PriceValue>{item.price}캔디</PriceValue></PriceRow>
                  <PriceRow>할인금액 <PriceValue>0캔디</PriceValue></PriceRow>
                  <PriceRow>주문금액 <PriceValue>{item.price}캔디</PriceValue></PriceRow>
                </PriceInfo>
              </div>
            </ItemInfo>
          </CartItem>
        ))}
      </ListContainer>

      <OrderSummary>
        <SummaryRow>
          <span>선택 상품 금액</span>
          <span>9,000캔디</span>
        </SummaryRow>
        <SummaryRow>
          <span>+ 총 배송비</span>
          <span>무료배송</span>
        </SummaryRow>
        <SummaryRow>
          <span>- 할인 예상 금액</span>
          <span>0원</span>
        </SummaryRow>
        <SummaryRow>
          <span>주문 금액</span>
          <span>9,000캔디</span>
        </SummaryRow>
      </OrderSummary>

      <OrderButton>주문하기</OrderButton>
    </div>
  );
};

export default MyShopCartContainer;
