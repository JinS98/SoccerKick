import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriterProps {
  onClickWriteComment: () => void;
  OnCmtWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  OnCmtPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnCmtContents: (event: ChangeEvent<HTMLInputElement>) => void;
  cmtContents: string;
  cmtWriter: string;
  cmtPassword: string;
  el: any;
  isEdit: boolean;
  setIsEdit: any;
  onClickUpdateComment: () => void;
  value: number;
}

export interface IBoardCommentUI {
  onClickWriteComment: () => void;
  onClickUpdateComment: () => void;
  OnCmtWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  OnCmtPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnCmtContents: (event: ChangeEvent<HTMLInputElement>) => void;
  cmtContents: string;
  cmtWriter: string;
  cmtPassword: string;
  isEdit: boolean;
  el: any;
  setIsEdit: any;
}
export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
