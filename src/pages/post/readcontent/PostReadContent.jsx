import React from 'react';
import { useParams } from 'react-router-dom';

const PostReadContent = () => {
  const{id} = useParams;
  console.log(id)
  return (
    <div>
      게시판 상세
    </div>
  );
};

export default PostReadContent;