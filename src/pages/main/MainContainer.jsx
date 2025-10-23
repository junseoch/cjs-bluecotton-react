import React from 'react';
import MainContent from './maincontent/MainContent';
import { Link } from 'react-router-dom';
import MainCategory from './maincategory/MainCategory';

const MainContainer = () => {
  return (
    <div>
      <div>배너</div>
      <MainCategory />
      <MainContent />
    </div>
  );
};

export default MainContainer;