import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

const SideBarWrap = styled.div`
  /* display: none; */
  z-index: 5;
  padding: 12px 30px 12px 12px;
  background-color: #ffffff;
  height: 100%;
  width: 19%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.div`
  margin: 30px 8px;
  font-family: "Code Next-Trial";
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.011em;
  text-align: end;
  cursor: pointer;
  color: #151515;
  padding-right: 15px;
  /* transform: scale(0, 0); */

  /* background: black; */
  /* bottom: 0; */
  /* transition: transform 0.3 ease; */
  transition: all 0.2s ease-in-out;
  width: 0;

  p {
    padding: 0px 2%;
    margin-top: 0;
    margin-bottom: 0em;
  }

  &:hover {
    background-color: #333;
    color: #fff;
    transform-origin: 0% 100%;
    width: 100%;
  }
  ${M.mediaL} {
    display: block;
  }
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  // 로그인시
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  const outside = useRef<any>();
  const router = useRouter();
  const onClickMoveToLogin = () => {
    if (!data) {
      router.push("/log_in/");
    }
  };
  const onClcikMoveToUser = () => {
    if (data) {
      router.push("/myPage");
    } else {
      router.push("/sign_up");
    }
  };
  // 로그아웃
  const [logout] = useMutation(LOG_OUT_USER);
  const onClickLogOut = async () => {
    try {
      await logout();
      window.localStorage.removeItem("accessToken");
      router.push("/");
      location.reload();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: "로그아웃 실패" });
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap
      id="sidebar"
      ref={outside}
      className={isOpen ? "open" : ""}
      // style={{ zIndex: "999" }}
    >
      <CloseOutlined alt="close" onClick={toggleSide} onKeyDown={toggleSide} />

      <Menu onClick={() => router.push("/highlights")}>highlights</Menu>
      <Menu onClick={() => router.push("/boards")}>boards</Menu>
      <Menu onClick={() => router.push("/market")}>market</Menu>
      <Menu onClick={onClcikMoveToUser} className="menu">
        {data ? "Mypage" : "Sign_up"}
      </Menu>
      <Menu
        onClick={data ? onClickLogOut : onClickMoveToLogin}
        className="menu"
      >
        {" "}
        {data ? "Logout" : "Login"}
      </Menu>
    </SideBarWrap>
  );
}

export default Sidebar;
