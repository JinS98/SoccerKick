import MarketCommentsList from "../../../src/component/units/comment/board/BoardCommentList/BoardCommentList.container";
import MarketCommentList from "../../../src/component/units/comment/market/BoardCommentList/BoardCommentList.container";
import MarketComment from "../../../src/component/units/comment/market/BoardCommentWrite/MarketCommentWrite.container";
import ItemDetailUI from "../../../src/component/units/market/detail/detail";

export default function ItemDetail() {
  return (
    <>
      <ItemDetailUI />
      <MarketComment />
      <MarketCommentList />
    </>
  );
}
