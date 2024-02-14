import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { constSelector, useRecoilState } from "recoil";
import {
  isEditState,
  searchValueState,
  TodayItemState,
} from "../../../../commons/stores";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./list.queries";
import * as S from "./list.style";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { timeForToday } from "../../../../commons/library/utils2";

export default function MarketsList() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [array, setArray] = useRecoilState(TodayItemState);
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useRecoilState(searchValueState);
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems == undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };
  const onClickDetail = (usedItem) => () => {
    const baskets = JSON.parse(window.sessionStorage.getItem("baskets")) || [];
    let isExists = false;
    if (baskets.length > 2) {
      baskets.forEach((basketEl) => {
        if (usedItem === basketEl) isExists = true;
      });
      if (isExists) {
        baskets.forEach((el, index) => {
          if (usedItem === el) {
            if (index === 2) return;
            console.log(index);
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
    } else {
      baskets.forEach((basketEl) => {
        if (usedItem === basketEl) isExists = true;
      });
      if (isExists) {
        baskets.forEach((el, index) => {
          if (usedItem === el) {
            baskets?.splice(index, 1);
            baskets.push(usedItem);
            setArray(baskets);
            sessionStorage.setItem("baskets", JSON.stringify(baskets));
          }
        });
      } else {
        baskets.push(usedItem);
        setArray(baskets);
        sessionStorage.setItem("baskets", JSON.stringify(baskets));
      }
    }
    router.push(`market/${usedItem}`);
  };

  useEffect(() => {
    getDebounce();
  }, [value]);

  const getDebounce = _.debounce(() => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 700);

  const mySecretCode = uuidv4();
  // console.log(myArr);

  const onClickSell = () => {
    setIsEdit(false);
    router.push(`/market/new`);
  };

  return (
    <S.Back>
      <S.SellWrap>
        <S.SellingBtn onClick={onClickSell}>판매하기</S.SellingBtn>
      </S.SellWrap>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        <S.Wrapper>
          {data?.fetchUseditems.map((el, index) => (
            <S.ItemWrapper
              key={el._id}
              id={el._id}
              onClick={onClickDetail(el._id)}
            >
              <S.ThumWrapper>
                <S.Thum
                  style={{
                    backgroundImage:
                      el.images[0] === undefined || el.images[0] === ""
                        ? "url(/header/logo6.png)"
                        : `url(https://storage.googleapis.com/${el.images[0]})`,
                  }}
                ></S.Thum>
              </S.ThumWrapper>
              <S.ContentsWrapper>
                <S.Name>
                  {el.name
                    .replaceAll(
                      keyword,
                      `${mySecretCode}${keyword}${mySecretCode}`
                    )
                    .split(mySecretCode)
                    .map((el: any) => (
                      <span
                        key={uuidv4()}
                        style={{ color: el === keyword ? "red" : "white" }}
                      >
                        {el}
                      </span>
                    ))}
                </S.Name>
              </S.ContentsWrapper>
              <S.Price_Pick>
                <S.Price>{el.price}원</S.Price>
                <S.PickWrapper>
                  <S.CreatedAt>{timeForToday(el.createdAt)}</S.CreatedAt>
                </S.PickWrapper>
              </S.Price_Pick>
            </S.ItemWrapper>
          ))}
        </S.Wrapper>
      </InfiniteScroll>
    </S.Back>
  );
}
