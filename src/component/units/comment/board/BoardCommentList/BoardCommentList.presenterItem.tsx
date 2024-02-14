import * as S from "./BoardCommentList.style";
import { getDate } from "../../../../../commons/library/utils";
import BoardCommentWrite from "../BoardCommentWrite/BoardCommentWrite.container";
import { Modal, Rate } from "antd";
import { useState } from "react";
import { IBoardCommentsListUI } from "./BoardCommentList.types";

export default function CommentListItemUI(props: IBoardCommentsListUI) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
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
            <S.Icon5 src="/vector-7.png" />
            <S.CmtMain id={props.el.writer} onClick={props.onClickComment}>
              <S.WriterLine>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.StarBox>
                  <Rate disabled value={props.el.rating} />
                </S.StarBox>
                <S.Icon6
                  src="/vector-12.png"
                  id={props.el._id}
                  onClick={onClickEdit}
                />
                <S.Icon7
                  id={props.el._id}
                  onClick={props.onClickOpenDeleteModal}
                  src="/vector-13.png"
                />
              </S.WriterLine>
              <S.Cmt>{props.el.contents}</S.Cmt>
              <S.CmtDate>{getDate(props.el.createdAt)}</S.CmtDate>
            </S.CmtMain>
          </S.Comment>
        </S.Back>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
