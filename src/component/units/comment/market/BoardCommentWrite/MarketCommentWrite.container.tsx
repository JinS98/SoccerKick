import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import * as S from "./MarketCommentWrite.style";

export default function MarketComment(props: IBoardCommentWriterProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const OnCmtContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    if (contents) {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.useditemId),
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      setContents("");
    } else if (!contents) {
      alert("내용을 입력해주세요.");
    }
  };
  const onClickUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateUseditemQuestionInput = {};
      if (contents) updateBoardCommentInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemQuestionId: router.query.useditemQuestionId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        props.setIsEdit?.(false);
      }
    }
  };
  return (
    <>
      <S.Back>
        <S.CommentWrite>
          {!props.isEdit && (
            <S.CmtTitleBox>
              <S.Icon4>
                <S.img src="/ball.png" />
              </S.Icon4>
              <S.CmtTitle>문의하기</S.CmtTitle>
            </S.CmtTitleBox>
          )}

          <S.CommentBoxWrapper>
            <S.CommentBox
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={OnCmtContents}
              value={contents || (props.el?.contents ?? "")}
            />
            <S.EnrollLine>
              <S.StrCount>{contents.length}/100</S.StrCount>
              <S.EnrollBtn
                onClick={props.isEdit ? onClickUpdate : onClickWrite}
              >
                {props.isEdit ? "수정" : "등록"}
              </S.EnrollBtn>
            </S.EnrollLine>
          </S.CommentBoxWrapper>
        </S.CommentWrite>
      </S.Back>
    </>
  );
}
