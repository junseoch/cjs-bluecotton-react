import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TabContainer, Tab } from './style';

const MySomContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: 'auth', label: '인증', path: '/main/my-page/my-som/auth' },
    { id: 'solo', label: '솔로솜', path: '/main/my-page/my-som/solo' },
    { id: 'party', label: '파티솜', path: '/main/my-page/my-som/party' },
    { id: 'candy', label: '캔디솜', path: '/main/my-page/my-som/candy' },
    { id: 'rank', label: '솜등급', path: '/main/my-page/my-som/rank' }
  ];

  const getActiveTab = () => {
    if (location.pathname.includes('/auth')) return 'auth';
    if (location.pathname.includes('/solo')) return 'solo';
    if (location.pathname.includes('/party')) return 'party';
    if (location.pathname.includes('/candy')) return 'candy';
    if (location.pathname.includes('/rank')) return 'rank';
    return 'auth';
  };

  const handleTabClick = (path) => {
    navigate(path);
  };

  // check 경로에서는 탭을 표시하지 않음
  const isCheckPage = location.pathname.includes('/my-som-check');

  return (
    <div>
      {!isCheckPage && (
        <TabContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={getActiveTab() === tab.id}
              onClick={() => handleTabClick(tab.path)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabContainer>
      )}
      
      <Outlet />
    </div>
  );
};

export default MySomContainer;
