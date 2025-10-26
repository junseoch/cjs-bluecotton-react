import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 40px 120px;
  background-color: #F9F9F9;
  min-height: calc(100vh - 200px);
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

export const SomBadge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0051FF;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #fff;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #111111;
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const NavLink = styled.div`
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.active ? '#0051FF' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#111111'};
  font-size: 16px;
  font-weight: ${props => props.active ? '700' : '500'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#0051FF' : '#F9F9F9'};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MainContentContainer = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 40px;
`;

