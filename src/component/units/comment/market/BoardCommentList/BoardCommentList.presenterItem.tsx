import * as S from "./BoardCommentList.style";
import BoardCommentWrite from "../BoardCommentWrite/MarketCommentWrite.container";
import { useState } from "react";
import { IBoardCommentsListUI } from "./BoardCommentList.types";
import CommentAnswerWriter from "../CommentAnswerWriter";
import CommentAnswerPage from "../CommentAnswerList";
import { timeForToday } from "../../../../../commons/library/utils2";

export default function CommentListItemUI(props: IBoardCommentsListUI) {
  const [isEdit, setIsEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  const onClickAnswer = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div key={props.el._id}>
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.handleCancel}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.Back>
          <S.Comment>
            <S.Wrapper>
              <S.Icon5 src="/vector-7.png" />
              <S.CmtMain onClick={props.onClickComment}>
                <S.WriterLine>
                  <S.Writer>{props.el.user.name}</S.Writer>
                  <S.IconWrapper>
                    <S.Icon6
                      src="/vector-12.png"
                      id={props.el._id}
                      onClick={onClickEdit}
                    />
                    <S.Icon7
                      id={props.el._id}
                      onClick={props.onClickDelete}
                      src="/vector-13.png"
                    />
                  </S.IconWrapper>
                </S.WriterLine>
                <S.Cmt>{props.el.contents}</S.Cmt>
                <S.DateWrapper>
                  <S.CmtDate>{timeForToday(props.el.createdAt)}</S.CmtDate>
                  <S.AnswerBtn onClick={onClickAnswer}>답글 쓰기</S.AnswerBtn>
                </S.DateWrapper>
              </S.CmtMain>
            </S.Wrapper>
            {isActive && <CommentAnswerWriter el={props.el} />}
            <CommentAnswerPage el={props.el} />
          </S.Comment>
        </S.Back>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
