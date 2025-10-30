import styled from "styled-components";

/* === 카드 컨테이너 === */
export const Card = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
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

/* === 본문 === */
export const Body = styled.div`
  padding: 18px 20px 22px 20px;
  display: flex;
  flex-direction: column;
`;

/* === 상단 메타 (건강 | 도전 10일) === */
export const MetaTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;

  .category {
    color: ${({ theme }) => theme.PALLETE.secondary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }

  .bar {
    color: ${({ theme }) => theme.PALLETE.grey.greyScale2};
    font-size: 12px;
    font-weight: 300;
  }

  .challenge {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
  }
`;

/* === 제목 === */
export const Title = styled.h3`
  color: ${({ theme }) => theme.PALLETE.basic};
  font-size: 17.5px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  line-height: 1.5;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* === 요약문 === */
export const Excerpt = styled.p`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
  line-height: 1.6;
  margin-bottom: 18px;
  height: 42px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

/* === 하단 정보 === */
export const MetaBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;

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

    .bar {
      color: ${({ theme }) => theme.PALLETE.grey.greyScale2};
      font-size: 12px;
      font-weight: 300;
    }

    .stat {
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    }
  }

  .right {
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* === 아이콘 === */
const IconBase = styled.i`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const IconComment = styled(IconBase)`
  background-image: url("/assets/icons/chat_gray.svg");
`;

export const IconHeart = styled(IconBase)`
  background-image: url("/assets/icons/favorite_gray.svg");
`;

export const IconEye = styled(IconBase)`
  background-image: url("/assets/icons/eye_gray.svg");
`;
