import React from 'react';
import { Link } from 'react-router-dom';

const MainCategory = () => {
  return (
    <div>
      <Link to={"/main/som/all"}>전체</Link> | &nbsp;
      <Link to={"/main/som/study"}>학습</Link> | &nbsp;
      <Link to={"/main/som/health"}>건강</Link> | &nbsp;
      <Link to={"/main/som/social"}>소셜</Link> | &nbsp;
      <Link to={"/main/som/hobbies"}>취미</Link> | &nbsp;
      <Link to={"/main/som/life-style"}>생활</Link>
    </div>
  );
};

export default MainCategory;