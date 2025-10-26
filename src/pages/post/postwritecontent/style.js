import styled from "styled-components";

/* === 전체 컨테이너 === */
export const Container = styled.div`
  width: 1160px;
  margin: 80px auto 120px;
  display: flex;
  flex-direction: column;
`;

/* === 페이지 타이틀 === */
export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  margin-bottom: 30px;
`;

/* === 폼 전체 === */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

/* === 제목 / 카테고리 (가로 정렬) === */
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  /* ✅ 라벨: Heading6 */
  label {
    width: 100px;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    color: ${({ theme }) => theme.PALLETE.basic};
  }

  /* ✅ 인풋/셀렉트: smallText3-Regular */
  input,
  select {
    flex: 1;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    color: ${({ theme }) => theme.PALLETE.basic};
    padding: 0 12px;
    outline: none;
    background-color: #fff;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    }

    &:focus {
      border-color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }

  /* ✅ 드롭다운 전용 화살표 추가 */
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='28' width='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 26px;
  } 
`;

/* === 본문 내용 === */
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  textarea {
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    padding: 12px;
    height: 260px;
    resize: none;
    line-height: 1.6;
    color: ${({ theme }) => theme.PALLETE.basic};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    }

    &:focus {
      border-color: ${({ theme }) => theme.PALLETE.primary.main};
      color: ${({ theme }) => theme.PALLETE.basic};
    }
  }

  .char-count {
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    align-self: flex-end;
  }
`;

/* === 파일 첨부 (라벨/내용 그리드 정렬) === */
export const FileBox = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};

  /* 2열 그리드: [라벨 100px] [내용 1fr] */
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 16px;
  row-gap: 14px;

  /* 첫 번째 줄: 라벨 + 파일 선택 박스 */
  .file-row {
    /* 자식들을 상위 그리드에 그대로 배치 (라벨 = col1, 선택박스 = col2) */
    display: contents;
  }

  .file-row > label {
    grid-column: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    color: ${({ theme }) => theme.PALLETE.basic};
    align-self: center;
  }

  .file-row > .file-select {
    grid-column: 2;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;

    button {
      background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
      color: ${({ theme }) => theme.PALLETE.basic};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
      border: none;
      border-right: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
      padding: 0 18px;
      height: 40px;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
      }
    }

    .file-name {
      flex: 1;
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
      padding-left: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  /* 두 번째 줄: 용량 안내 (col2에 정렬) */
  .file-info {
    grid-column: 2;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
  }

  /* 세 번째 줄: 추가/삭제 버튼 (col2에 정렬) */
  .file-actions {
    grid-column: 2;
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      height: 34px;
      padding: 0 12px;
      border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
      border-radius: 4px;
      background-color: #fff;
      color: ${({ theme }) => theme.PALLETE.basic};
      font-size: ${({ theme }) => theme.FONT_SIZE["smallText3"]};
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
      }
    }
  }
`;




/* === 버튼 === */
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;

  button {
    width: 130px;
    height: 40px;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.FONT_SIZE["smallText2"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    cursor: pointer;
    transition: 0.2s;
  }

  .cancel {
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale2};
    background: #fff;
    color: ${({ theme }) => theme.PALLETE.basic};

    &:hover {
      background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
    }
  }

  .submit {
    border: none;
    background-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: #fff;

    &:hover {
      background-color: ${({ theme }) => theme.PALLETE.primary.dark};
    }
  }
`;
