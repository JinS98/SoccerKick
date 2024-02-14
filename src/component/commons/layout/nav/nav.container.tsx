import { useMutation, useQuery } from "@apollo/client";
import { tuple } from "antd/es/_util/type";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  basketsState,
  searchValueState,
  userNameState,
} from "../../../../commons/stores";
import { IQuery } from "../../../../commons/types/generated/types";
import NavUI from "./nav.presenter";
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from "./nav.queries";

export default function LayoutNav(props) {
  const [BasketsState, setBasketsState] = useRecoilState(basketsState);
  const router = useRouter();
  const [isBoards, setIsBoards] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const [isMarket, setIsMArket] = useState(false);
  const [userName, setUserName] = useRecoilState(userNameState);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOG_OUT_USER);

  useEffect(() => {
    if (router.asPath.includes("boards")) {
      setIsBoards(true);
    }
    if (router.asPath.includes("highlights")) {
      setIsHighlight(true);
    }
    if (!localStorage.getItem("baskets")) {
      setBasketsState(0);
    } else {
      setBasketsState(JSON.parse(localStorage.getItem("baskets"))?.length);
    }
  }, []);

  const onClickBoards = () => {
    router.push(`/boards/`);
    setIsBoards(true);
    setIsHighlight(false);
    setIsMArket(false);
  };

  const onClickHighlight = () => {
    router.push(`/highlights/`);
    setIsHighlight(true);
    setIsBoards(false);
    setIsMArket(false);
  };

  const onClickMarket = () => {
    router.push(`/market/`);
    setIsHighlight(false);
    setIsBoards(false);
    setIsMArket(true);
  };

  const onClickMenu = () => {};

  const onClickLogin = () => {
    router.push(`/log_in/`);
  };

  if (data?.fetchUserLoggedIn.name !== undefined) {
    setUserName(data?.fetchUserLoggedIn.name);
  }

  const onClickLogout = async () => {
    router.push("/");
    await logoutUser();
    window.localStorage.removeItem("accessToken");
    location.reload();
  };

  return (
    <>
      <NavUI
        onClickBoards={onClickBoards}
        onClickHighlight={onClickHighlight}
        onClickMenu={onClickMenu}
        isMarket={isMarket}
        isBoards={isBoards}
        isHighlight={isHighlight}
        onChangeSearch={props.onChangeSearch}
        onClickLogin={onClickLogin}
        onClickMarket={onClickMarket}
        data={data}
        onClickLogout={onClickLogout}
        BasketsState={BasketsState}
      />
    </>
  );
}
