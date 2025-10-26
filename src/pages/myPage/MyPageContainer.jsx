import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MyPageWrapper, MainContentContainer, SidebarContainer, ProfileContainer, ProfileImageWrapper, ProfileImage, SomBadge, UserName, NavigationList, NavLink } from './style';
import { Link } from 'react-router-dom';

const MyPageContainer = () => {
  const location = useLocation();

  // 현재 경로에 따라 활성 상태 결정
  const isActive = (path) => {
    if (path === '/main/my-page/my-info') {
      return location.pathname === path || location.pathname.startsWith('/main/my-page/my-info');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <MyPageWrapper>
      <SidebarContainer>
        <ProfileContainer>
          <ProfileImageWrapper>
            <ProfileImage />
            <SomBadge>S</SomBadge>
          </ProfileImageWrapper>
          <UserName>zl존준서</UserName>
        </ProfileContainer>
        <NavigationList>
          <NavLink active={isActive('/main/my-page/my-som')}>
            <Link to="/main/my-page/my-som/auth">마이 솜</Link>
          </NavLink>
          <NavLink active={isActive('/main/my-page/my-shop')}>
            <Link to="/main/my-page/my-shop/like">마이샵</Link>
          </NavLink>
          <NavLink active={isActive('/main/my-page/my-post')}>
            <Link to="/main/my-page/my-post/write">게시판</Link>
          </NavLink>
          <NavLink active={isActive('/main/my-page/my-info')}>
            <Link to="/main/my-page/my-info">회원관리</Link>
          </NavLink>
        </NavigationList>
      </SidebarContainer>
      <MainContentContainer>
        <Outlet />
      </MainContentContainer>
    </MyPageWrapper>
  );
};

export default MyPageContainer;
