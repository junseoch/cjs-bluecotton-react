import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";

const PostReadContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showLikes, setShowLikes] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "지존준서",
      date: "2025.10.9 21:31",
      text: "손흥민짱!!",
      profile: "/postImages/profile.png",
      likes: 0,
      liked: false,
      replies: [],
    },
    {
      id: 2,
      name: "초이준서",
      date: "2025.10.9 21:31",
      text: "흥민이형이랑 볼 차고 싶다",
      profile: "/postImages/profile.png",
      likes: 0,
      liked: false,
      replies: [],
    },
  ]);

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

  // 댓글 등록
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

  // 대댓글 등록
  const handleReplySubmit = (parentId, text) => {
    if (!text.trim()) return;
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
              replyText: "",
              showReply: false,
            }
          : c
      )
    );
  };

  return (
    <S.Container>
      <S.Title>{id}번 게시글 제목</S.Title>

      <S.MetaBox>
        <div className="writer">준서왔솜</div>
        <div className="date">2025.09.14</div>
        <div className="view">조회수 : 5,905</div>
      </S.MetaBox>

      <S.Content>
        <S.EditBox>
          <span>수정</span> | <span>삭제</span>
        </S.EditBox>
        <p>{id}번 게시물 내용입니다.</p>
      </S.Content>

      {/* ❤️ 좋아요한 솜이 */}
      <S.LikeSection>
        <S.LikeHeader onClick={() => setShowLikes(!showLikes)}>
          <h3>
            게시글에 <span className="pink">좋아요한 솜이</span>
          </h3>
          <button>{showLikes ? "▲ 접기" : "▼ 펼치기"}</button>
        </S.LikeHeader>

        {showLikes && (
          <S.LikeGrid>
            {["가나다라마바사아", "somSom", "xocds271"].map((user, i) => (
              <div key={i} className="like-user">
                <img src="/postImages/profile.png" alt="프로필" />
                <span>{user}</span>
              </div>
            ))}
          </S.LikeGrid>
        )}
      </S.LikeSection>

      {/* 💬 댓글 섹션 */}
      <S.CommentSection>
        <S.CommentHeader>
          <span>댓글쓰기</span>
          <button onClick={() => setShowComments(!showComments)}>
            {showComments ? "▲ 접기" : "▼ 펼치기"}
          </button>
        </S.CommentHeader>

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
                        <div className="content">{c.text}</div>
                        <div className="meta-row">
                          <span>{c.date}</span>
                          <span>|</span>
                          <span className="report">신고</span>
                        </div>
                        <div className="reply-row">
                          <button
                            className="reply"
                            onClick={() =>
                              setComments((prev) =>
                                prev.map((co) =>
                                  co.id === c.id
                                    ? { ...co, showReply: !co.showReply }
                                    : co
                                )
                              )
                            }
                          >
                            답글
                          </button>
                        </div>

                        {c.showReply && (
                          <S.CommentForm style={{ marginTop: "10px" }}>
                            <div className="avatar">
                              <img src="/postImages/profile.png" alt="내 프로필" />
                              <span className="nickname">지존준서</span>
                            </div>
                            <div className="input-wrap">
                              <textarea
                                placeholder="답글을 입력하세요"
                                maxLength={300}
                                value={c.replyText || ""}
                                onChange={(e) =>
                                  setComments((prev) =>
                                    prev.map((co) =>
                                      co.id === c.id
                                        ? { ...co, replyText: e.target.value }
                                        : co
                                    )
                                  )
                                }
                              />
                              <span className="count">
                                {(c.replyText?.length || 0)}/300
                              </span>
                            </div>
                            <button
                              className="submit-btn"
                              onClick={() => handleReplySubmit(c.id, c.replyText || "")}
                            >
                              등록
                            </button>
                          </S.CommentForm>
                        )}
                      </div>
                    </div>

                    <div className="right">
                      <button className="like" onClick={() => handleLike(c.id)}>
                        {c.liked ? "♥" : "♡"} {c.likes}
                      </button>
                    </div>
                  </S.CommentItem>

                  {c.replies.map((r) => (
                    <S.CommentItem key={r.id} indent>
                      <div className="left">
                        <img src={r.profile} alt="프로필" className="profile" />
                        <div className="text-box">
                          <div className="writer">{r.name}</div>
                          <div className="content">{r.text}</div>
                          <div className="meta-row">
                            <span>{r.date}</span>
                            <span>|</span>
                            <span className="report">신고</span>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <button
                          className="like"
                          onClick={() => handleLike(r.id, true, c.id)}
                        >
                          {r.liked ? "♥" : "♡"} {r.likes}
                        </button>
                      </div>
                    </S.CommentItem>
                  ))}
                </React.Fragment>
              ))}
            </S.CommentList>

            {/* 댓글 작성 */}
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
              <button className="submit-btn" onClick={handleCommentSubmit}>
                등록
              </button>
            </S.CommentForm>
          </>
        )}
      </S.CommentSection>

      <S.Divider />
      <S.NavSection>
        <S.NavButton onClick={goList}>목록</S.NavButton>
      </S.NavSection>
    </S.Container>
  );
};

export default PostReadContent;
