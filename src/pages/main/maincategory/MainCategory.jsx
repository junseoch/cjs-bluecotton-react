import React from "react";
import S from "./style";

const categories = ["전체", "학습", "건강", "소셜", "취미", "생활", "루키"];
const sortOptions = ["전체", "인기순", "마감 임박순"];

const MainCategory = ({ category, setCategory, sortBy, setSortBy }) => {
  return (
    <S.Wrapper>
      <S.CategoryList>
        {categories.map((cat) => (
          <S.CategoryButton
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </S.CategoryButton>
        ))}
      </S.CategoryList>

      <S.SortBox
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </S.SortBox>
    </S.Wrapper>
  );
};

export default MainCategory;
