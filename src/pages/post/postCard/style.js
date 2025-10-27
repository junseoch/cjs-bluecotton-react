import styled from "styled-components";

/* === 카드 컨테이너 === */
export const Card = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 10px;
  background: #fff;
  overflow: hidden; /* 둥근 모서리 유지 */
  cursor: pointer;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
`;

/* === 썸네일 === */
export const ThumbWrap = styled.div`
  width: 100%;
  height: 210px;
  background: ${({ theme }) => theme.PALLETE.grey.greyScale0};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;          /* 요소 간격 안정화 */
  /* height 지정 안 함: 자동으로 */
`;

/* === 상단 메타 === */
export const MetaTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;

  .category {
    color: ${({ theme }) => theme.PALLETE.basic};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }

  .dot {
    color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  }

  .challenge {
    color: ${({ theme }) => theme.PALLETE.basic};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }
`;

/* === 제목 === */
export const Title = styled.h3`
  color: ${({ theme }) => theme.PALLETE.basic};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  line-height: 1.4;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* === 내용 요약 === */
export const Excerpt = styled.p`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  line-height: 1.5;
  margin-bottom: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

/* === 하단 정보 === */
export const MetaBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    gap: 6px;

    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      object-fit: cover;
    }

    .nick,
    .date {
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    }

    .dot {
      color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;

    .stat {
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    }
  }
`;

/* === 아이콘 === */
const IconBase = styled.i`
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

/* 👁 조회수 아이콘 */
export const IconEye = styled(IconBase)`
  background-image: url("/assets/icons/eye_gray.svg");
`;

/* ♡ 좋아요 아이콘 (빈하트) */
export const IconHeart = styled(IconBase)`
  background-image: url("/assets/icons/favorite_gray.svg");
`;

/* 💬 댓글 아이콘 */
export const IconComment = styled(IconBase)`
  background-image: url("/assets/icons/chat_gray.svg");
`;
