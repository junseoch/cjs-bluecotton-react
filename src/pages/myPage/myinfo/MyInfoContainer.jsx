import React from 'react';
import { useLocation } from 'react-router-dom';

const MyInfoContainer = () => {
  const location = useLocation()
  const path = location.pathname.replace("/main/my-page/my-info/", "");
  return (
    <div>
      회원 정보 수정
    </div>
  );
};

export default MyInfoContainer;