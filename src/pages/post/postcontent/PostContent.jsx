import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostContent = () => {
  const {category} = useParams();
  const [content, setContent] = useState([])

  useEffect(() => {
    console.log(`http://localhost:10000/api/som/${category}`)
  }, [category])
  return (
    <div>
      <div>
        <div>
          {category}
        </div>
        <div>
          <Link to={`/main/post/read/${1}`}>1번 게시글</Link>
        </div>
      </div>
    </div>
  );
};

export default PostContent;