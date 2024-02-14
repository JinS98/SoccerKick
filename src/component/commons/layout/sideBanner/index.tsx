import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TodayItemState } from "../../../../commons/stores";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "./index.q";
import * as S from "./index.style";

export default function TodayItems() {
  const [array, setArray] = useRecoilState(TodayItemState);
  const router = useRouter();

  const { data: TodayData1 } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(array[0]),
    },
  });
  const { data: TodayData2 } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(array[1]),
    },
  });
  const { data: TodayData3 } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(array[2]),
    },
  });

  const onClickDetail = (usedItem) => () => {
    const baskets = JSON.parse(window.sessionStorage.getItem("baskets")) || [];
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (usedItem === basketEl) isExists = true;
    });
    if (isExists) {
      baskets.forEach((el, index) => {
        if (usedItem === el) {
          if (index === 2) return;
          baskets.splice(index, 1);
          baskets.push(usedItem);
          setArray(baskets);
          sessionStorage.setItem("baskets", JSON.stringify(baskets));
          return;
        }
      });
    } else {
      baskets?.shift();
      baskets.push(usedItem);
      setArray(baskets);
      sessionStorage.setItem("baskets", JSON.stringify(baskets));
    }

    console.log(usedItem);
    router.push(`market/${usedItem}`);
  };

  return (
    <>
      {TodayData1 ? (
        <S.TodayBox>
          <S.TodayName>최근 본 상품</S.TodayName>
          {TodayData1 ? (
            <S.TodayItem
              key={TodayData1?.fetchUseditem._id}
              id={TodayData1?.fetchUseditem._id}
              onClick={onClickDetail(array?.[0])}
              style={{
                backgroundImage:
                  TodayData1?.fetchUseditem?.images?.[0] === undefined ||
                  TodayData1?.fetchUseditem.images?.[0] === ""
                    ? "url(/header/logo6.png)"
                    : `url(https://storage.googleapis.com/${TodayData1?.fetchUseditem.images?.[0]})`,
              }}
            ></S.TodayItem>
          ) : (
            ""
          )}
          {TodayData2 ? (
            <S.TodayItem
              key={TodayData2?.fetchUseditem._id}
              id={TodayData2?.fetchUseditem._id}
              onClick={onClickDetail(array?.[1])}
              style={{
                backgroundImage:
                  TodayData2?.fetchUseditem?.images?.[0] === undefined ||
                  TodayData2?.fetchUseditem.images?.[0] === ""
                    ? "url(/header/logo6.png)"
                    : `url(https://storage.googleapis.com/${TodayData2?.fetchUseditem.images?.[0]})`,
              }}
            ></S.TodayItem>
          ) : (
            ""
          )}
          {TodayData3 ? (
            <S.TodayItem
              key={TodayData3?.fetchUseditem._id}
              id={TodayData3?.fetchUseditem._id}
              onClick={onClickDetail(array?.[2])}
              style={{
                backgroundImage:
                  TodayData3?.fetchUseditem?.images?.[0] === undefined ||
                  TodayData3?.fetchUseditem.images?.[0] === ""
                    ? "url(/header/logo6.png)"
                    : `url(https://storage.googleapis.com/${TodayData3?.fetchUseditem.images?.[0]})`,
              }}
            ></S.TodayItem>
          ) : (
            ""
          )}
        </S.TodayBox>
      ) : (
        ""
      )}
    </>
  );
}
