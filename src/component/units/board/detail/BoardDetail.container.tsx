import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardWriteUI2Props } from "../write/BoardWrite.types";
import BoarDetailUI2 from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail2(props: IBoardWriteUI2Props) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const handleOk = async () => {
    setIsOpenDeleteModal(false);
    void deleteBoard({
      variables: {
        boardId: String(data?.fetchBoard._id),
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data?.deleteBoard;
              // el._id가 안되므로, readField를 사용해서 _id를 가져옴
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev]; //삭제된 ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
    router.push("/boards/");
  };

  const handleCancel = () => {
    setIsOpenDeleteModal(false);
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  //   console.log(router);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  let Url = data?.fetchBoard.youtubeUrl;
  let LastUrl = Url?.substring(Url.indexOf("=") + 1);

  const onClickMove = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickMoveList = () => {
    setIsEdit(false);
    router.push(`/boards/`);
  };
  const onClickDeleteBtn = async () => {
    setIsOpenDeleteModal(true);
  };

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
          data: {
            fetchBoard: {
              _id: String(router.query.boardId),
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  const onClickDislike = async () => {
    await dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      optimisticResponse: {
        dislikeBoard: (data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
          data: {
            fetchBoard: {
              _id: String(router.query.boardId),
              __typename: "Board",
              dislikeCount: data?.dislikeBoard,
            },
          },
        });
      },
    });
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setMyBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  console.log(data);
  return (
    <BoarDetailUI2
      data={data}
      onClickMove={onClickMove}
      onClickMoveList={onClickMoveList}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      LastUrl={LastUrl}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
