import * as S from "./BoardCommentWrite.style";
import { IBoardCommentUI } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentUI(props: IBoardCommentUI) {
  return (
    <S.Back>
      <S.CommentWrite>
        {!props.isEdit && (
          <S.CmtTitleBox>
            <S.Icon4>
              <S.img src="/ball.png" />
            </S.Icon4>
            <S.CmtTitle>댓글</S.CmtTitle>
          </S.CmtTitleBox>
        )}
        <S.Writer_Password_Star>
          <S.Input
            placeholder="작성자"
            onChange={props.OnCmtWriter}
            readOnly={!!props.el?.writer}
            value={props.cmtWriter || (props.el?.writer ?? "")}
          />
          <S.Input
            placeholder="비밀번호"
            onChange={props.OnCmtPassword}
            value={props.cmtPassword}
          />
          <S.StarBox>
            <Rate
              onChange={props.setValue}
              value={props.value || (props.el?.value ?? "")}
            />
          </S.StarBox>
        </S.Writer_Password_Star>
        <S.CommentBoxWrapper>
          <S.CommentBox
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.OnCmtContents}
            value={props.cmtContents || (props.el?.contents ?? "")}
          />
          <S.EnrollLine>
            <S.StrCount>{props.cmtContents.length}/100</S.StrCount>
            <S.EnrollBtn
              isActive={props.isActive}
              // disabled={!props.isActive ? true : false}
              onClick={
                props.isEdit
                  ? props.onClickUpdateComment
                  : props.onClickWriteComment
              }
            >
              {props.isEdit ? "수정" : "등록"}
            </S.EnrollBtn>
          </S.EnrollLine>
        </S.CommentBoxWrapper>
      </S.CommentWrite>
    </S.Back>
  );
}
