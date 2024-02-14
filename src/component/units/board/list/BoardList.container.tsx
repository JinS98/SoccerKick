import BoardsListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import _ from "lodash";
import { isEditState, searchValueState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function BoardsList() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [startPage, setStartPage] = useState(1);
  const [pageClick, setPageClick] = useState(1);
  const router = useRouter();
  const [page, setPage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useRecoilState(searchValueState);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickMoveNew = () => {
    router.push(`/boards/new`);
  };

  const onClickDetail = (event: MouseEvent<HTMLImageElement>) => {
    router.push(`boards/${event.currentTarget.id}`);
  };

  useEffect(() => {
    getDebounce();
  }, [value]);

  const getDebounce = _.debounce(() => {
    void refetch({ search: value, page: 1 });
    void refetchBoardsCount({ search: value });
    setKeyword(value);
  }, 700);

  return (
    <BoardsListUI
      data={data}
      onClickMoveNew={onClickMoveNew}
      onClickDetail={onClickDetail}
      startPage={startPage}
      pageClick={pageClick}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
    />
  );
}
