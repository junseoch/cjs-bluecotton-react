import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MyPostContainer = () => {
  const location = useLocation()
  const path = location.pathname.replace("/main/my-page/my-post/", "");
  return (
    <div> 
      {path === "like" ? (<p>좋아요 현황</p>)
        :path === "write" ? (<p>작성 현황</p>)
          :path === "comment" ? (<p>댓글 현황</p>)
            :path === "save" ? (<p>임시 저장 현황</p>)
              :path === "recent" ? (<p>최근에 본 글</p>)
                :(<p>잘못된경로</p>)
      }
      <div>
        <Link to={'/main/my-page/my-post/like'}>좋아요</Link> | &nbsp;
        <Link to={'/main/my-page/my-post/write'}>작성글</Link> | &nbsp;
        <Link to={'/main/my-page/my-post/comment'}>댓글</Link> | &nbsp;
        <Link to={'/main/my-page/my-post/save'}>임시 저장</Link> | &nbsp;
        <Link to={'/main/my-page/my-post/recent'}>최근 글</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyPostContainer;