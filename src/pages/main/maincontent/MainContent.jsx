import React from "react";
import S from "./style";
import SomContentList from "../somContentList/SomContentList";
import PageNumberSelect from "../somNumberSelect/SomNumberSelect";

const MainContent = ({ somList, pageNumber, setPageNumber }) => {
  return (
    <S.Wrapper>
      <SomContentList somList={somList} pageNumber={pageNumber} />
      <PageNumberSelect somList={somList} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </S.Wrapper>
  );
};

export default MainContent;
