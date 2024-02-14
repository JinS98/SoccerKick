import BoardWrite2 from "../../../../src/component/units/board/write/BoardWrite.container";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { isEditState } from "../../../../src/commons/stores";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      images
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function editPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  });
  //자바스크립트
  const router = useRouter();
  console.log(router);
  console.log(router.query.boardId);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <BoardWrite2 data={data} />;
}
