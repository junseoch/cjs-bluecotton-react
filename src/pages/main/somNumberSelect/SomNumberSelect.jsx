import React from "react";
import { Wrapper } from "./style";

const SomNumberSelect = ({ somList, pageNumber, setPageNumber }) => {
  const totalPages = Math.ceil(somList.length / 9); // 실제 totalPages가 있다면 내려받으면 됨.
  const groupSize = 10;

  // 현재 페이지 그룹의 시작 번호 계산
  const currentGroup = Math.floor((pageNumber - 1) / groupSize);
  const startPage = currentGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  return (
    <Wrapper>
      {/* 이전 그룹 */}
      <button
        disabled={startPage === 1}
        onClick={() => setPageNumber(startPage - groupSize)}
      >
        &lt;
      </button>

      {/* 페이지 리스트 */}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const page = startPage + i;
        return (
          <button
            key={page}
            className={pageNumber === page ? "active" : ""}
            onClick={() => setPageNumber(page)}
          >
            {page}
          </button>
        );
      })}

      {/* 다음 그룹 */}
      <button
        disabled={endPage >= totalPages}
        onClick={() => setPageNumber(startPage + groupSize)}
      >
        &gt;
      </button>
    </Wrapper>
  );
};

export default SomNumberSelect;
