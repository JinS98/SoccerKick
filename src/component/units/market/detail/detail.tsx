import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/library/utils";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./detail.queries";
import * as S from "./detail.style";
import Dompurify from "dompurify";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Tooltip } from "antd";
import { useRecoilState } from "recoil";
import { basketsState } from "../../../../commons/stores";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetailUI() {
  const addKey = "f0c68224b90fedf4d41381f7107ec170";
  const [BasketsState, setBasketsState] = useRecoilState(basketsState);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const onClickDelete = () => {
    try {
      void deleteUseditem({
        variables: {
          useditemId: String(data?.fetchUseditem._id),
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    router.push("/market/");
  };

  const onClickEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          {data?.fetchUseditem.images[0] !== "" ? (
            <img
              style={{ width: "20px" }}
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images[i]}`}
            />
          ) : (
            <img style={{ width: "20px" }} src={`/ball.png`} />
          )}
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 랑 동일
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${addKey}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        if (data?.fetchUseditem) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다

          const lat = data?.fetchUseditem.useditemAddress?.lat
              ? data?.fetchUseditem.useditemAddress?.lat
              : 33.450701, // 위도
            lon = data?.fetchUseditem.useditemAddress?.lng
              ? data?.fetchUseditem.useditemAddress?.lng
              : 126.570667; // 경도

          const locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition);
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

          displayMarker(locPosition);
        }

        function displayMarker(locPosition) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
      });
    };
  }, [data]);

  const onClickPay = async () => {
    await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: String(data?.fetchUseditem._id),
      },
    });
    alert("구매가 완료되었습니다.");
    router.push("/market/");
  };

  const onClickBasket = (usedItem) => async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: String(router.query.useditemId),
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    let isExists = false;
    if (!JSON.parse(localStorage.getItem("baskets"))) {
      setBasketsState(0);
    }
    baskets.forEach((basketEl) => {
      if (usedItem === basketEl) isExists = true;
    });
    if (isExists) {
      baskets.forEach((el, index) => {
        if (usedItem === el) {
          baskets?.splice(index, 1);
          setBasketsState((prev) => prev - 1);
          localStorage.setItem("baskets", JSON.stringify(baskets));
        }
      });
    } else {
      baskets.push(usedItem);
      setBasketsState((prev) => prev + 1);
      localStorage.setItem("baskets", JSON.stringify(baskets));
    }
  };
  console.log(BasketsState);

  return (
    <S.Back>
      <S.Background>
        <S.Wrapper>
          <S.Header>
            <S.Icon src="/vector-7.png" />
            <S.Name_Date>
              <S.seller>{data?.fetchUseditem.seller?.name}</S.seller>
              <S.Date>{getDate(data?.fetchUseditem.createdAt)}</S.Date>
            </S.Name_Date>
            <S.IconWrapper>
              <S.Icon2>
                <img src="/vector-8.png" />
              </S.Icon2>
              <S.Icon3>
                <Tooltip
                  placement="topRight"
                  title={`${
                    data?.fetchUseditem.useditemAddress?.address ?? ""
                  } ${
                    data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                  }`}
                >
                  <img src="/vector-8-2.png" />
                </Tooltip>
              </S.Icon3>
            </S.IconWrapper>
          </S.Header>
          <S.Main>
            <S.Main_left>
              <div>
                <Slider {...settings}>
                  {data &&
                    data.fetchUseditem.images?.map((el, index) => {
                      return (
                        <S.bigImgBox key={index}>
                          <S.bigImg
                            style={{
                              backgroundImage: `url(https://storage.googleapis.com/${el})`,
                            }}
                          ></S.bigImg>
                        </S.bigImgBox>
                      );
                    })}
                </Slider>
              </div>
            </S.Main_left>
            <S.Main_right>
              <S.NameWrapper>
                <S.Name>{data && data.fetchUseditem.name}</S.Name>
                <S.PickWrapper>
                  <S.PickIcon
                    src="/ic_pick.png"
                    onClick={onClickBasket(data?.fetchUseditem._id)}
                  />
                  <S.PickCount>
                    {data && data.fetchUseditem.pickedCount}
                  </S.PickCount>
                </S.PickWrapper>
              </S.NameWrapper>
              <S.remarks>{data && data.fetchUseditem.remarks}</S.remarks>
              <S.TagWrapper>
                {data &&
                  data.fetchUseditem.tags.map((tagItem, index) => {
                    return (
                      <S.TagItem key={index}>
                        <S.Text>#{tagItem}</S.Text>
                      </S.TagItem>
                    );
                  })}
              </S.TagWrapper>
              {typeof window !== "undefined" && (
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(data?.fetchUseditem.contents),
                  }}
                ></S.Contents>
              )}
              <S.Price>{data && data.fetchUseditem.price}원</S.Price>
            </S.Main_right>
          </S.Main>
          <S.Map id="map" style={{ width: "100%", height: 400 }}></S.Map>
          <S.PayWrapper>
            <S.PayBtn type="button" onClick={onClickPay}>
              구매하기
            </S.PayBtn>
          </S.PayWrapper>
        </S.Wrapper>
        <S.Footer>
          <S.FooterMenu>
            <Link href={"/market/"}>
              <S.FooterMenuBox>목록으로</S.FooterMenuBox>
            </Link>
            <S.FooterMenuBox type="button" onClick={onClickEdit}>
              수정하기
            </S.FooterMenuBox>
            <S.FooterMenuBox type="button" onClick={onClickDelete}>
              삭제하기
            </S.FooterMenuBox>
          </S.FooterMenu>
        </S.Footer>
      </S.Background>
    </S.Back>
  );
}
