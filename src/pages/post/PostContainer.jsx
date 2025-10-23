import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PostCategory from './postcategory/PostCategory';
import PostContent from './postcontent/PostContent';

const PostContainer = () => {
  return (
    <div>
      <div>배너</div>
      <div>
        <PostCategory />
      </div>
      <div>
        <PostContent />
      </div>
      <Link to={'/main/post/write'}>작성하기</Link>
    </div>
  );
};

export default PostContainer;