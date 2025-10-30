import React, { useState } from "react";
import * as S from "./style";

const PostWriteContent = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("작성 완료!");
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <S.Container>
      {/* 상단 타이틀 */}
      <S.PageTitle>오늘의 솜 작성</S.PageTitle>

      {/* 폼 */}
      <S.Form onSubmit={handleSubmit}>
        {/* 제목 */}
        <S.FormRow>
          <label>제목</label>
          <input
            type="text"
            placeholder="오늘의 솜의 제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.FormRow>

        {/* 카테고리 */}
        <S.FormRow>
          <label>카테고리</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">하고 있는 솜의 카테고리를 선택해주세요</option>
            <option value="study">학습</option>
            <option value="health">건강</option>
            <option value="social">소셜</option>
            <option value="hobby">취미</option>
            <option value="life">생활</option>
            <option value="rookie">루키</option>
          </select>
        </S.FormRow>

        {/* 내용 */}
        <S.FormGroup>
          <textarea
            placeholder="솜을 하면서 어떤 점을 느끼셨나요? 도전하는 동안 기억에 남는 순간을 적어주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000}
          />
          <div className="char-count">{content.length}/1000</div>
        </S.FormGroup>

        {/* 첨부파일 */}
        <S.FileBox>
          <div className="file-row">
            <label>첨부</label>
            <div className="file-select">
              <button type="button">파일 선택</button>
              <span className="file-name">선택된 파일 없음</span>
            </div>
          </div>

          <p className="file-info">용량이 50.0M 이하 파일만 업로드 가능</p>

          <div className="file-actions">
            <button type="button" className="add-btn">
              <img alt="파일 추가" />
              파일 추가
            </button>
            <button type="button" className="remove-btn">
              <img alt="파일 삭제" />
              파일 삭제
            </button>
          </div>
        </S.FileBox>

        {/* 버튼 */}
        <S.ButtonBox>
          <button type="button" className="cancel" onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className="submit">
            작성 완료
          </button>
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
};

export default PostWriteContent;