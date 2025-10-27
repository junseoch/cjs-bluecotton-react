import React, { useEffect, useState } from "react";
import S from "./style";
import MainCategory from "./maincategory/MainCategory";
import MainContent from "./maincontent/MainContent";
import { fetchSomList } from "./api/somAPI";


const MainContainer = () => {
  const [category, setCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("최신순");
  const [somList, setSomList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadSomList = async () => {
      const data = await fetchSomList(category, sortBy, pageNumber);
      setSomList(data);
    };
    loadSomList();
  }, [category, sortBy, pageNumber]);

  return (
    <S.Container>
      <S.BennerImageArea>
        <S.BennerImage src="../../../assets/images/main_benner_image.png" alt="배너 이미지"/>
      </S.BennerImageArea>
      <MainCategory
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <MainContent
        somList={somList}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </S.Container>
  );
};

export default MainContainer;
