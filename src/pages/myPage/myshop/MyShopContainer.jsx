import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MyShopContainer = () => {
  
  const location = useLocation()
  const path = location.pathname.replace("/main/my-page/my-shop/", "");
  return (
    <div>
      {path === "like" ? (<p>좋아요 현황</p>)
        :path === "cart" ? (<p>장바구니 현황</p>)
          :path === "review" ? (<p>리뷰 현황</p>)
            :path === "delivery" ? (<p>상품 현황</p>)
              :path === "order" ? (<p>구매내역</p>)
                :(<p>잘못된경로</p>)
      }
      <div>
        <Link to={'/main/my-page/my-shop/like'}>찜</Link> | &nbsp;
        <Link to={'/main/my-page/my-shop/cart'}>장바구니</Link> | &nbsp;
        <Link to={'/main/my-page/my-shop/review'}>리뷰</Link> | &nbsp;
        <Link to={'/main/my-page/my-shop/delivery'}>상품 현황</Link> | &nbsp;
        <Link to={'/main/my-page/my-shop/order'}>구매내역</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyShopContainer;