import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      소개페이지!
      <div>
        <Link to={"/main/som/all"}>메인으로이동</Link>
      </div>
    </div>
  );
};

export default Intro;