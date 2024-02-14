import InfiniteScroll from "react-infinite-scroller";
import CommentListItemUI from "./BoardCommentList.presenterItem";
import { IBoardCommentsListUI } from "./BoardCommentList.types";

export default function BoardCommentsListUI(props: IBoardCommentsListUI) {
  console.log(props.data);
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <CommentListItemUI
            key={el._id}
            el={el}
            isOpenDeleteModal={props.isOpenDeleteModal}
            onClickDelete={props.onClickDelete}
            onClickOpenDeleteModal={props.onClickOpenDeleteModal}
            onChangeDeletePassword={props.onChangeDeletePassword}
            handleCancel={props.handleCancel}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
