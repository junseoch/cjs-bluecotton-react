// export const fetchSomList = async (category, sortBy, page) => {
//   const res = await fetch(
//     `/api/soms?category=${category}&sortBy=${sortBy}&page=${page}`
//   );
//   if (!res.ok) throw new Error("Failed to fetch som list");
//   return await res.json();
// };


import somDummy from "../dummyData/sqlDummy.json";

export const fetchSomList = async (category, sortBy, page) => {
  // 실제 API처럼 delay 효과
  await new Promise((resolve) => setTimeout(resolve, 200));

  let data = somDummy;

  // 🔹 카테고리 필터링 (전체 제외)
  if (category !== "전체") {
    data = data.sort((a, b) => b.id - a.id).filter((som) =>
      som.somTitle.includes(category) || som.somAddress.includes(category)
    );
  }

  // 🔹 정렬 기준
  if (sortBy === "인기순") {
    data.sort((a, b) => b.somLikeCount - a.somLikeCount);
  } else if (sortBy === "전체") {
    data.sort(
      (a, b) => new Date(b.id) - new Date(a.id)
    );
  } else if (sortBy === "마감 임박순") {
    data.sort(
      (a, b) => new Date(a.somEndDate) - new Date(b.somEndDate)
    );
  }

  return data;
};
