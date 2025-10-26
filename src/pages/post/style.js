import styled from "styled-components";

/* === 전체 컨테이너 === */
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

/* === 배너 === */
export const Banner = styled.div`
  width: 1160px;
  height: 250px;
  border-radius: 4px;
  background: url("/postImages/banner.png") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 100px; /* ✅ 헤더와의 간격 추가 */

  .banner-inner {
    width: 100%;
    height: 100%;
    padding: 0 40px;
    display: flex;
    align-items: center; /* ✅ 세로 중앙 정렬 */
    justify-content: flex-start; /* ✅ 왼쪽 정렬 */
  }

  .text-box {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      color: ${({ theme }) => theme.PALLETE.basic};
    }

    p {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["light"]};
      color: ${({ theme }) => theme.PALLETE.basic};
      margin-top: 8px;
    }
  }
`;

/* === 카드 그리드 === */
export const Grid = styled.div`
  width: 1160px;
  margin: 40px auto 20px; /* ✅ 아래쪽 여백 살짝 줄임 → 글쓰기 버튼이 가까워짐 */
  display: grid;
  grid-template-columns: repeat(3, 370px);
  grid-auto-rows: 390px;
  gap: 25px;
  justify-content: start;
`;

/* === 카드 === */
export const Card = styled.div`
  width: 370px;
  height: 390px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  }

  .thumb {
    height: 210px;
    background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta {
    flex: 1;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .category {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      color: ${({ theme }) => theme.PALLETE.primary.main};
    }

    .title {
      font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      margin-top: 4px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .desc {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
      line-height: 1.4;
      height: 2.8em;
      overflow: hidden;
    }

    .info {
      margin-top: 10px;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

/* === 페이지네이션 (글쓰기 버튼 포함) === */
export const Pagination = styled.div`
  width: 1160px;
  margin: 10px auto 100px; /* ✅ 위는 좁게 (카드랑 가깝게), 아래는 넓게 (푸터와 여유있게) */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px; /* ✅ 버튼과 페이지 번호 간격 더 멀어짐 */

  .top-bar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .write-btn {
    width: 168px;
    height: 40px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: white;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.PALLETE.primary.dark};
    }
  }

  .page-buttons {
    display: flex;
    justify-content: center;
    gap: 6px;

    button {
      width: 28px;
      height: 28px;
      border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
      border-radius: 4px;
      background: #fff;
      cursor: pointer;

      &.active {
        background: ${({ theme }) => theme.PALLETE.primary.main};
        color: #fff;
        border-color: ${({ theme }) => theme.PALLETE.primary.main};
      }
    }
  }
`;
