import styled from "styled-components";

/* ===== 페이지 프레임 ===== */
export const Container = styled.div`
  width: 1160px;
  margin: 80px auto 120px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.PALLETE.basic};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["paragraph"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  padding-bottom: 12px;
`;

export const MetaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
  .writer {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }
  .date,
  .view {
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 32px 0 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
  line-height: 1.7;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;

export const EditBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE["smallText1"]};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  cursor: pointer;
`;

/* ===== 좋아요한 솜이 ===== */
export const LikeSection = styled.div`
  margin: 40px 0;
`;

export const LikeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }
  .pink {
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    cursor: pointer;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
  }
`;

export const LikeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 6px;
  padding: 16px;
  .like-user {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: ${({ theme }) => theme.PALLETE.grey.greyScale1};
    }
  }
`;

/* ===== 댓글 섹션 ===== */
export const CommentSection = styled.div`
  margin: 60px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  }
  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    cursor: pointer;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

/* ===== 댓글 아이템 ===== */
export const CommentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  padding: 20px 0;
  margin-left: ${({ indent }) => (indent ? "46px" : "0")};
  position: relative;

  .left {
    display: flex;
    gap: 12px;
    flex: 1;
  }

  .profile {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;

    .writer {
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    }

    .content {
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      color: ${({ theme }) => theme.PALLETE.basic};
      line-height: 1.5;
    }

    .meta-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText1"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};

      .report {
        color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
        cursor: pointer;
      }
    }

    .reply-row {
      margin-top: 6px;
      display: flex;
      align-items: center;

      .reply {
        border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
        background: white;
        border-radius: 4px;
        padding: 2px 10px;
        cursor: pointer;
        font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
        transition: 0.15s;

        &:hover {
          border-color: ${({ theme }) => theme.PALLETE.primary.main};
          color: ${({ theme }) => theme.PALLETE.primary.main};
        }
      }
    }
  }

  /* ✅ 좋아요 버튼을 상단(신고와 수평)에 맞춤 */
  .right {
    position: relative;
    top: 2px; /* 세밀한 높이 조정 */
    align-self: flex-start; /* ✅ 위쪽 정렬 */
    .like {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-width: 52px;
      height: 28px;
      border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
      border-radius: 4px;
      background: white;
      padding: 3px 8px;
      cursor: pointer;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      transition: 0.15s ease;

      &:hover {
        color: ${({ theme }) => theme.PALLETE.primary.main};
        border-color: ${({ theme }) => theme.PALLETE.primary.main};
      }
    }
  }
`;


/* ===== 댓글 입력 (댓글 + 대댓글 공통) ===== */
export const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 6px;
  width: 100%;

  .avatar {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      background: ${({ theme }) => theme.PALLETE.grey.greyScale1};
    }

    .nickname {
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    }
  }

  .input-wrap {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 120px;
      border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
      border-radius: 6px;
      padding: 10px 12px;
      resize: none;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
      box-sizing: border-box;

      /* ✅ 포커스 시 파란색(primary) 강조 */
      &:focus {
        border-color: ${({ theme }) => theme.PALLETE.primary.main};
        outline: none;
      }
    }

    .count {
      position: absolute;
      bottom: 8px;
      right: 12px;
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    }
  }

  .submit-btn {
    align-self: flex-end;
    background: ${({ theme }) => theme.PALLETE.primary.main};
    color: white;
    border: none;
    padding: 6px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    margin-top: 8px;
    margin-right: 2px; /* 끝선 맞춤 */
    transition: 0.15s;

    &:hover {
      background: ${({ theme }) => theme.PALLETE.primary.dark};
    }
  }
`;

/* ===== 구분선 & 네비게이션 ===== */
export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  margin: 40px 0 20px;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavButton = styled.button`
  align-self: center;
  width: 120px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
  background: #fff;
  color: ${({ theme }) => theme.PALLETE.basic};
  cursor: pointer;
`;
