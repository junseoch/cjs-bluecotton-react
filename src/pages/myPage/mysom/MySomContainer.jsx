import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MySomContainer = () => {

  const location = useLocation()
  const path = location.pathname.replace("/main/my-page/my-som/", "");
  return (
    <div>
      {path === "auth" ? (<p>인증 현황</p>) 
        : path === "solo" ? (<p>솔로솜 현황</p>)
          : path === "party" ? (<p>파티솜 현황</p>)
            : path === "candy" ? (<p>캔디 현황</p>)
              : path === "rank" ? (<p>등급 현황</p>)
                :(<p>잘못된경로</p>)
      }
      <div>
        <Link to={'/main/my-page/my-som/auth'}>인증</Link> | &nbsp;
        <Link to={'/main/my-page/my-som/solo'}>솔로솜</Link> | &nbsp;
        <Link to={'/main/my-page/my-som/party'}>파티솜</Link> | &nbsp;
        <Link to={'/main/my-page/my-som/candy'}>캔디솜</Link> | &nbsp;
        <Link to={'/main/my-page/my-som/rank'}>솜등급</Link> 
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MySomContainer;