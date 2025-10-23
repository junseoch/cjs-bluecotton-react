import React from 'react';
import Shop from './Shop';
import { Link } from 'react-router-dom';

const ShopContainer = () => {
  return (
    <div>
      블루 코튼 샵
      <div>카테고리</div>
      <Link to={"/main/shop/read/1"}>1번상품</Link>
    </div>
  );
};

export default ShopContainer;