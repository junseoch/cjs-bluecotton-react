import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyPageContainer = () => {
  const style = {
    display: "flex"
  }
  return (
    <div style={style}>
      <div>
        <div><Link to={"/main/my-page/my-som/auth"}>마이 솜</Link></div>
        <div><Link to={"/main/my-page/my-shop/like"}>마이 샵</Link></div>
        <div><Link to={"/main/my-page/my-post/like"}>게시판</Link></div>
        <div><Link to={"/main/my-page/my-info"}>회원정보</Link></div>
      </div>
      <div><Outlet /></div>
    </div>
  );
};

export default MyPageContainer;