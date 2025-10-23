import React from 'react';
import { Link } from 'react-router-dom';

const PostCategory = () => {
  return (
    <div>
      <Link to={"/main/post/all"}>전체</Link> | &nbsp;
      <Link to={"/main/post/study"}>학습</Link> | &nbsp;
      <Link to={"/main/post/health"}>건강</Link> | &nbsp;
      <Link to={"/main/post/social"}>소셜</Link> | &nbsp;
      <Link to={"/main/post/hobbies"}>취미</Link> | &nbsp;
      <Link to={"/main/post/life-style"}>생활</Link>
    </div>
  );
};

export default PostCategory;