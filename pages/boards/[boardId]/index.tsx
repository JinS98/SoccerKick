import BoardDetail2 from "../../../src/component/units/board/detail/BoardDetail.container";
import BoardCommentsList from "../../../src/component/units/comment/board/BoardCommentList/BoardCommentList.container";
import BoardCommentWrite from "../../../src/component/units/comment/board/BoardCommentWrite/BoardCommentWrite.container";

export default function boardDetailPage() {
  return (
    <>
      <BoardDetail2 />
      <BoardCommentWrite />
      <BoardCommentsList />
    </>
  );
}
