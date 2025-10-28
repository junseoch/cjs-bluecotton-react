import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";

const PostReadContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showLikes, setShowLikes] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const [comment, setComment] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const [showModal, setShowModal] = useState(false); // ✅ 게시글 삭제 모달
  const [showCommentModal, setShowCommentModal] = useState(false); // ✅ 댓글/답글 삭제 모달
  const [deleteTarget, setDeleteTarget] = useState(null); // ✅ 삭제 대상 저장

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "지존준서",
      date: "2025.10.9 21:31",
      text: "손흥민짱!!",
      profile: "/postImages/profile.png",
      likes: 1,
      liked: true,
      replies: [
        {
          id: 101,
          name: "초이준서",
          date: "2025.10.9 22:00",
          text: "@지존준서 완전 공감합니다!",
          profile: "/postImages/profile.png",
          likes: 0,
          liked: false,
        },
      ],
    },
  ]);

  const likeUsers = [
    { id: 1, nickname: "somSom", avatar: "https://via.placeholder.com/22" },
    { id: 2, nickname: "xocds271", avatar: "https://via.placeholder.com/22" },
    { id: 3, nickname: "가나다라마바사아", avatar: "https://via.placeholder.com/22" },
    { id: 4, nickname: "bluecotton_dev_team", avatar: "https://via.placeholder.com/22" },
  ];

  const currentId = Number(id);
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId + 1;

  const goList = () => navigate("/main/post/all");
  const goPrev = () => prevId && navigate(`/main/post/read/${prevId}`);
  const goNext = () => navigate(`/main/post/read/${nextId}`);

  // ❤️ 좋아요 토글
  const handleLike = (cid, isReply = false, parentId = null) => {
    setComments((prev) =>
      prev.map((c) => {
        if (isReply && c.id === parentId) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === cid
                ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 }
                : r
            ),
          };
        }
        if (!isReply && c.id === cid)
          return { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 };
        return c;
      })
    );
  };

  // 📝 댓글 등록
  const handleCommentSubmit = () => {
    if (!comment.trim()) return;
    const newComment = {
      id: Date.now(),
      name: "지존준서",
      date: "2025.10.26 22:00",
      text: comment,
      profile: "/postImages/profile.png",
      likes: 0,
      liked: false,
      replies: [],
    };
    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  // 💬 대댓글 등록
  const handleReplySubmit = (parentId) => {
    const text = (replyInputs[parentId] || "").trim();
    if (!text) return;

    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: Date.now(),
                  name: "지존준서",
                  date: "2025.10.26 22:10",
                  text,
                  profile: "/postImages/profile.png",
                  likes: 0,
                  liked: false,
                },
              ],
              showReply: false,
            }
          : c
      )
    );

    setReplyInputs((prev) => ({ ...prev, [parentId]: "" }));
  };

  // 💬 대댓글 버튼 클릭 시 @닉네임 자동 삽입
  const handleReplyClick = (parentId, nickname) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId ? { ...c, showReply: !c.showReply } : c
      )
    );
    setReplyInputs((prev) => ({
      ...prev,
      [parentId]: prev[parentId]?.includes(`@${nickname}`)
        ? prev[parentId]
        : `@${nickname} `,
    }));
  };

  // 🪄 댓글 텍스트 내 @닉네임 감지 (파란색 기울임체 표시)
  const renderTextWithTags = (text) => {
    const parts = text.split(/(@\S+)/g);
    return parts.map((part, i) =>
      part.startsWith("@") ? (
        <S.Mention key={i}>{part}</S.Mention>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  // 🗑 게시글 삭제
  const handleDelete = () => {
    alert(`${id}번 게시글이 삭제되었습니다.`);
    setShowModal(false);
    navigate("/main/post/all");
  };

  // 🗑 댓글/답글 삭제
  const handleCommentDelete = () => {
    if (!deleteTarget) return;
    setComments((prev) =>
      prev
        .map((c) => {
          if (deleteTarget.type === "comment" && c.id === deleteTarget.id) {
            return null;
          }
          if (deleteTarget.type === "reply") {
            return {
              ...c,
              replies: c.replies.filter((r) => r.id !== deleteTarget.id),
            };
          }
          return c;
        })
        .filter(Boolean)
    );
    setShowCommentModal(false);
    setDeleteTarget(null);
  };

  return (
    <S.Container>
      <S.Title>{id}번 게시글 제목</S.Title>

      <S.MetaBox>
        <div className="writer">지존준서</div>
        <span className="divider">|</span>
        <div className="date">2025.10.26</div>
        <span className="divider">|</span>
        <div className="view">조회수 : 5,905</div>
      </S.MetaBox>

      <S.Content>
        <S.EditBox>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/main/post/modify/${id}`)}
          >
            수정
          </span>
          {" | "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          >
            삭제
          </span>
        </S.EditBox>
        <p>{id}번 게시물 내용입니다.</p>
      </S.Content>

      {/* ✅ 게시글 삭제 모달 */}
      {showModal && (
        <S.ModalBackdrop>
          <S.ModalBox>
            <h3>게시글을 삭제하시겠습니까?</h3>
            <p>삭제된 게시글은 복구할 수 없습니다.</p>
            <div className="button-row">
              <button className="cancel" onClick={() => setShowModal(false)}>
                취소
              </button>
              <button className="confirm" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </S.ModalBox>
        </S.ModalBackdrop>
      )}

      {/* ❤️ 좋아요한 솜이 */}
      <S.LikeSection>
        <S.LikeHeader onClick={() => setShowLikes(!showLikes)}>
          <h3>
            게시글에 <span className="pink">좋아요한 솜이</span>
          </h3>
          <S.ToggleButton $open={showLikes}>
            <img
              src={
                showLikes
                  ? "/assets/icons/drop_down_acv.svg"
                  : "/assets/icons/drop_down.svg"
              }
              alt="드롭다운"
            />
          </S.ToggleButton>
        </S.LikeHeader>

        {showLikes && (
          <S.LikeGrid>
            {likeUsers.map((user) => (
              <div key={user.id} className="like-user">
                <img src={user.avatar} alt="프로필" />
                <span className="nickname">{user.nickname}</span>
              </div>
            ))}
          </S.LikeGrid>
        )}
      </S.LikeSection>

      {/* 💬 댓글 섹션 */}
      <S.CommentSection>
        {showComments && (
          <>
            <S.CommentList>
              {comments.map((c) => (
                <React.Fragment key={c.id}>
                  <S.CommentItem>
                    <div className="left">
                      <img src={c.profile} alt="프로필" className="profile" />
                      <div className="text-box">
                        <div className="writer">{c.name}</div>
                        <div className="content">{renderTextWithTags(c.text)}</div>
                        <div className="meta-row">
                          <span>{c.date}</span>
                          <span>|</span>
                          <span className="report">신고</span>
                          <span>|</span>
                          <span
                            className="delete"
                            onClick={() => {
                              setDeleteTarget({ type: "comment", id: c.id });
                              setShowCommentModal(true);
                            }}
                          >
                            삭제
                          </span>
                        </div>

                        {/* ===== 대댓글 ===== */}
                        {c.replies.map((r) => (
                          <S.CommentItem key={r.id} indent>
                            <div className="left">
                              <img src={r.profile} alt="프로필" className="profile" />
                              <div className="text-box">
                                <div className="writer">{r.name}</div>
                                <div className="content">
                                  {renderTextWithTags(r.text)}
                                </div>
                                <div className="meta-row">
                                  <span>{r.date}</span>
                                  <span>|</span>
                                  <span className="report">신고</span>
                                  <span>|</span>
                                  <span
                                    className="delete"
                                    onClick={() => {
                                      setDeleteTarget({ type: "reply", id: r.id });
                                      setShowCommentModal(true);
                                    }}
                                  >
                                    삭제
                                  </span>
                                </div>
                              </div>
                            </div>
                          </S.CommentItem>
                        ))}
                      </div>
                    </div>
                  </S.CommentItem>
                </React.Fragment>
              ))}
            </S.CommentList>

            {/* 댓글 입력창 */}
            <S.CommentForm>
              <div className="avatar">
                <img src="/postImages/profile.png" alt="내 프로필" />
                <span className="nickname">지존준서</span>
              </div>
              <div className="input-wrap">
                <textarea
                  placeholder="마음이 따뜻해지는 착한 댓글만 달아주세요!"
                  maxLength={300}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <span className="count">{comment.length}/300</span>
              </div>
              <button
                type="button"
                className="submit-btn"
                onClick={handleCommentSubmit}
              >
                등록
              </button>
            </S.CommentForm>
          </>
        )}
      </S.CommentSection>

      {/* ✅ 댓글/답글 삭제 모달 */}
      {showCommentModal && (
        <S.ModalBackdrop>
          <S.ModalBox>
            <h3>댓글을 삭제하시겠습니까?</h3>
            <p>삭제된 댓글은 복구할 수 없습니다.</p>
            <div className="button-row">
              <button className="cancel" onClick={() => setShowCommentModal(false)}>
                취소
              </button>
              <button className="confirm" onClick={handleCommentDelete}>
                삭제
              </button>
            </div>
          </S.ModalBox>
        </S.ModalBackdrop>
      )}

      {/* ✅ 이전/다음 글 네비게이션 */}
      <S.NavList>
        <S.NavItem onClick={goNext} $disabled={!nextId}>
          <div className="label">
            <S.NavArrow src="/assets/icons/drop_down.svg" alt="" $up />
            다음 글
          </div>
          <div className="title">{`${nextId}번 게시글 입니다.`}</div>
        </S.NavItem>

        <S.NavItem onClick={prevId ? goPrev : undefined} $disabled={!prevId}>
          <div className="label">
            <S.NavArrow src="/assets/icons/drop_down.svg" alt="" />
            이전 글
          </div>
          <div className="title">
            {prevId ? `${prevId}번 게시글 입니다.` : "이전 글이 없습니다."}
          </div>
        </S.NavItem>
      </S.NavList>

      <S.Divider />
      <S.NavSection>
        <S.NavButton onClick={goList}>목록</S.NavButton>
      </S.NavSection>
    </S.Container>
  );
};

export default PostReadContent;
