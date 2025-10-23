import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Link to={"/main/som/all"}>홈</Link> | &nbsp;
        <Link to={"/main/my-page/my-som/auth"}>마이페이지</Link> | &nbsp;
        <Link to={"/main/shop"}>블루코튼 샵</Link> | &nbsp;
        <Link to={"/main/post/all"}>오늘의 솜</Link> | &nbsp;
        <Link to={"/main/map"}>주변 솜</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>푸터에요</footer>
    </div>
  );
};

export default Layout;