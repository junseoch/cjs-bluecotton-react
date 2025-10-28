import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";

const PostModifyContent = () => {
  const { id } = useParams(); // URL 파라미터에서 게시글 ID 받기
  const navigate = useNavigate();

  // 게시글 데이터 상태
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("선택된 파일 없음");

  // ✅ 더미 데이터 (나중에 API 연동 시 대체)
  const dummyPosts = [
    {
      id: 1,
      title: "손흥민 선수 경기 분석",
      category: "hobby",
      content:
        "오늘 손흥민 선수는 정말 대단했어요! 골 결정력과 패스 모두 최고였습니다.",
      fileName: "son_analysis.png",
    },
    {
      id: 2,
      title: "건강 루틴 공유",
      category: "health",
      content: "매일 아침 7시에 스트레칭과 명상을 합니다. 하루가 상쾌해요 ☀️",
      fileName: "routine.jpg",
    },
  ];

  // ✅ 페이지 진입 시 기존 데이터 불러오기 (useEffect)
  useEffect(() => {
    const post = dummyPosts.find((p) => p.id === Number(id));
    if (post) {
      setTitle(post.title);
      setCategory(post.category);
      setContent(post.content);
      setFileName(post.fileName);
    } else {
      alert("존재하지 않는 게시글입니다.");
      navigate("/main/post/all");
    }
  }, [id, navigate]);

  // 파일 선택 시
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // 수정 완료 시
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${id}번 게시글 수정 완료!\n제목: ${title}`);
    navigate(`/main/post/read/${id}`);
  };

  // 취소 시
  const handleCancel = () => {
    if (window.confirm("수정을 취소하시겠습니까? 변경 사항이 저장되지 않습니다.")) {
      navigate(`/main/post/read/${id}`);
    }
  };

  return (
    <S.Container>
      {/* 상단 타이틀 */}
      <S.PageTitle>{id}번 게시글 수정</S.PageTitle>

      {/* 폼 */}
      <S.Form onSubmit={handleSubmit}>
        {/* 제목 */}
        <S.FormRow>
          <label>제목</label>
          <input
            type="text"
            placeholder="게시글 제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </S.FormRow>

        {/* 카테고리 */}
        <S.FormRow>
          <label>카테고리</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">카테고리를 선택해주세요</option>
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
            placeholder="수정할 내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={1000}
            required
          />
          <div className="char-count">{content.length}/1000</div>
        </S.FormGroup>

        {/* 첨부파일 */}
        <S.FileBox>
          <div className="file-row">
            <label>첨부파일</label>
            <div className="file-select">
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button type="button" onClick={() => document.getElementById("fileInput").click()}>
                파일 선택
              </button>
              <span className="file-name">{fileName}</span>
            </div>
          </div>

          <p className="file-info">용량이 50MB 이하 파일만 업로드 가능합니다.</p>
        </S.FileBox>

        {/* 버튼 */}
        <S.ButtonBox>
          <button type="button" className="cancel" onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className="submit">
            수정 완료
          </button>
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
};

export default PostModifyContent;
