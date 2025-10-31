import React, { useState, useEffect } from 'react';
import {
  ListHeader,
  FilterContainer,
  FilterButton,
  ListContainer,
  CartHeader,
  SelectAll,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  QuantityControl,
  QuantityButton,
  Quantity,
  PriceInfo,
  PriceRow,
  PriceValue,
  OrderSummary,
  SummaryRow,
  OrderButton
} from '../style';

const MyShopCartContainer = () => {
  const items = [
    { id: 1, name: '솜이 레옹 키링', price: 5000 },
    { id: 2, name: '솜이 메모지', price: 4000 }
  ];

  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    items.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    return initialQuantities;
  });

  // 전체 선택/해제 핸들러
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedItems(new Set(items.map(item => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  // 개별 아이템 선택/해제 핸들러
  const handleItemSelect = (itemId) => (e) => {
    const isChecked = e.target.checked;
    const newSelectedItems = new Set(selectedItems);
    
    if (isChecked) {
      newSelectedItems.add(itemId);
    } else {
      newSelectedItems.delete(itemId);
    }
    
    setSelectedItems(newSelectedItems);
  };

  // 전체 선택 상태 자동 업데이트
  useEffect(() => {
    setSelectAll(selectedItems.size === items.length && items.length > 0);
  }, [selectedItems, items.length]);

  // 수량 증가 핸들러
  const handleIncreaseQuantity = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1
    }));
  };

  // 수량 감소 핸들러
  const handleDecreaseQuantity = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) - 1)
    }));
  };

  // 개별 아이템 금액 계산
  const getItemTotalPrice = (item) => {
    return (item.price || 0) * (quantities[item.id] || 1);
  };

  // 선택된 상품 총 금액 계산
  const getTotalPrice = () => {
    return items
      .filter(item => selectedItems.has(item.id))
      .reduce((total, item) => total + getItemTotalPrice(item), 0);
  };

  return (
    <div>
      <ListHeader>장바구니</ListHeader>
      
      <FilterContainer>
        <FilterButton active>일반 상품</FilterButton>
        <FilterButton>캔디 상품</FilterButton>
      </FilterContainer>

      <CartHeader>
        <SelectAll>
          <input 
            type="checkbox" 
            checked={selectAll}
            onChange={handleSelectAll}
          /> 전체선택
        </SelectAll>
        <button style={{ padding: '8px 16px', backgroundColor: '#E0E0E0', border: 'none', borderRadius: '8px' }}>삭제</button>
      </CartHeader>

      <ListContainer>
        {items.map(item => (
          <CartItem key={item.id}>
            <input 
              type="checkbox" 
              checked={selectedItems.has(item.id)}
              onChange={handleItemSelect(item.id)}
            />
            <ItemImage />
            <ItemInfo>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <ItemName>{item.name}</ItemName>
                  <div style={{ color: '#757575', fontSize: '14px', marginBottom: '8px' }}>삭제</div>
                  <QuantityControl>
                    <QuantityButton 
                      onClick={() => handleDecreaseQuantity(item.id)}
                      disabled={quantities[item.id] <= 1}
                    >
                      -
                    </QuantityButton>
                    <Quantity>{quantities[item.id] || 1}</Quantity>
                    <QuantityButton 
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </QuantityButton>
                  </QuantityControl>
                </div>
                <PriceInfo>
                  <PriceRow>상품금액({quantities[item.id] || 1}개) <PriceValue>{item.price}캔디</PriceValue></PriceRow>
                  <PriceRow>할인금액 <PriceValue>0캔디</PriceValue></PriceRow>
                  <PriceRow>주문금액 <PriceValue>{getItemTotalPrice(item).toLocaleString()}캔디</PriceValue></PriceRow>
                </PriceInfo>
              </div>
            </ItemInfo>
          </CartItem>
        ))}
      </ListContainer>

      <OrderSummary>
        <SummaryRow>
          <span>선택 상품 금액</span>
          <span>{getTotalPrice().toLocaleString()}캔디</span>
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
          <span>{getTotalPrice().toLocaleString()}캔디</span>
        </SummaryRow>
      </OrderSummary>

      <OrderButton>주문하기</OrderButton>
    </div>
  );
};

export default MyShopCartContainer;
