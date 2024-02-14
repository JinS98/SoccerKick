import { withAuth } from "../../../src/component/commons/hocs/withAuth";
import MarketNew from "../../../src/component/units/market/new/new";

function marketNewPage() {
  return <MarketNew />;
}

export default withAuth(marketNewPage);
