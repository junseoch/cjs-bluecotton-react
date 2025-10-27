import React from 'react';
import S from "./style"; // 스타일 파일을 import 합니다.

const ShopReview = () => {
  return (
    // S.ReviewContainer 와 같은 스타일을 style.js에 추가하고 사용하면 좋습니다.
    // 우선 임시로 div를 사용합니다.
    <div>
       <h3 style={{ marginTop: '20px', fontSize: '18px' }}>상품 리뷰 (22)</h3>
       <div style={{ marginTop: '16px', color: '#555' }}>
         아직 작성된 리뷰가 없습니다.
       </div>
       {/* 여기에 리뷰 목록을 렌더링하는 로직을 추가할 수 있습니다. */}
    </div>
  );
};

export default ShopReview;
