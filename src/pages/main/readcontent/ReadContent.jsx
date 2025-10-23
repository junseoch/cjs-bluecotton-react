import React from 'react';
import { useParams } from 'react-router-dom';

const ReadContent = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>
      상세
    </div>
  );
};

export default ReadContent;