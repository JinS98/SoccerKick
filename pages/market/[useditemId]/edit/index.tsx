import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import { withAuth } from "../../../../src/component/commons/hocs/withAuth";
import MarketNew from "../../../../src/component/units/market/new/new";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      price
      contents
      createdAt
      images
      tags
      pickedCount
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

function UseditemEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  });
  //자바스크립트
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  return <MarketNew data={data} />;
}

export default withAuth(UseditemEditPage);
