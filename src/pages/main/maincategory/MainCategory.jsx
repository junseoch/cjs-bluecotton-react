import React from "react";
import S from "./style";
import { useNavigate, useParams } from "react-router-dom";

const categoryMap = {
  all: "전체",
  study: "학습",
  health: "건강",
  social: "소셜",
  hobby: "취미",
  life: "생활",
  rookie: "루키",
};

const reverseMap = Object.fromEntries(
  Object.entries(categoryMap).map(([k, v]) => [v, k])
);

const categories = Object.values(categoryMap);
const sortOptions = ["전체", "인기순", "마감 임박순"];

const MainCategory = ({ sortBy, setSortBy }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.CategoryList>
        {categories.map((cat) => (
          <S.CategoryButton
            key={cat}
            className={categoryMap[category] === cat ? "active" : ""}
            onClick={() => navigate(`/main/som/${reverseMap[cat]}`)}
          >
            {cat}
          </S.CategoryButton>
        ))}
      </S.CategoryList>

      <S.SortBox value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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
