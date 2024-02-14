import InfiniteScroll from "react-infinite-scroller";
import CommentListItemUI from "./BoardCommentList.presenterItem";
import { IBoardCommentsListUI } from "./BoardCommentList.types";

export default function BoardCommentsListUI(props: IBoardCommentsListUI) {
  console.log(props.data);
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data.fetchUseditemQuestions.map((el) => (
          <CommentListItemUI
            key={el._id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
