import BoardCommentUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import {
  IBoardCommentWriterProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriterProps) {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [cmtWriter, setCmtWriter] = useState("");
  const [cmtPassword, setCmtPassword] = useState("");
  const [cmtContents, setCmtContents] = useState("");
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const OnCmtWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCmtWriter(event.target.value);
    if (event.target.value && cmtPassword) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const OnCmtPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCmtPassword(event.target.value);
    if (event.target.value && cmtWriter) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const OnCmtContents = (event: ChangeEvent<HTMLInputElement>) => {
    setCmtContents(event.target.value);
  };
  const reset = () => {
    setCmtWriter("");
    setCmtPassword("");
    setCmtContents("");
    setIsActive(false);
    setValue(0);
  };
  const onClickWriteComment = async () => {
    if (cmtWriter && cmtPassword) {
      const result = await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: cmtWriter,
            password: cmtPassword,
            contents: cmtContents,
            rating: value,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      reset();
    } else if (!cmtWriter) {
      alert("작성자를 입력해주세요.");
    } else if (!cmtPassword) {
      alert("비밀번호를 입력해주세요.");
    }
  };

  const onClickUpdateComment = async () => {
    console.log(value, props.el?.rating);
    if (!cmtContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!cmtPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (cmtContents) updateBoardCommentInput.contents = cmtContents;
    if (value !== props.el?.rating) updateBoardCommentInput.rating = value;
    await updateBoardComment({
      variables: {
        updateBoardCommentInput: { contents: cmtContents, rating: value },
        password: cmtPassword,
        boardCommentId: props.el?._id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    props.setIsEdit?.(false);
  };

  return (
    <BoardCommentUI
      onClickWriteComment={onClickWriteComment}
      OnCmtWriter={OnCmtWriter}
      OnCmtPassword={OnCmtPassword}
      OnCmtContents={OnCmtContents}
      cmtContents={cmtContents}
      cmtWriter={cmtWriter}
      cmtPassword={cmtPassword}
      el={props.el}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
      onClickUpdateComment={onClickUpdateComment}
      value={value}
      setValue={setValue}
      isActive={isActive}
    />
  );
}
