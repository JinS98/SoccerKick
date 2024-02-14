import Searchbars01 from "../../searchbars/01/Searchbars01.container";
import * as S from "./nav.style";
import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Divider, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export default function NavUI(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  const onClickMyPage = () => {
    router.push(`/myPage`);
  };

  const items: MenuProps["items"] = [];
  return (
    <S.Nav>
      <S.MenuWrapper>
        <S.Left>
          <S.Logo>
            <a href="/boards">
              <S.Img src="/header/logo6.png" />
            </a>
          </S.Logo>
          <S.Menu_highlight
            onClick={props.onClickHighlight}
            isHighlight={props.isHighlight}
          >
            하이라이트
          </S.Menu_highlight>
          <S.Menu_boards
            onClick={props.onClickBoards}
            isBoards={props.isBoards}
          >
            자유게시판
          </S.Menu_boards>
          <S.Menu_Market
            onClick={props.onClickMarket}
            isMarket={props.isMarket}
          >
            중고마켓
          </S.Menu_Market>
        </S.Left>
        <S.Right>
          <Searchbars01 />
          {props.data?.fetchUserLoggedIn.name === undefined ? (
            <S.Menu_right onClick={props.onClickLogin}>로그인</S.Menu_right>
          ) : (
            <>
              <Dropdown
                menu={{ items }}
                dropdownRender={(menu) => (
                  <div className="dropdown-content">
                    {menu}
                    <Divider style={{ margin: 0 }} />
                    <Space style={{ padding: 0 }}>
                      <S.Box>
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid white",
                          }}
                          type="primary"
                          onClick={onClickMyPage}
                        >
                          마이페이지
                        </Button>
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid white",
                          }}
                          type="primary"
                          onClick={props.onClickLogout}
                        >
                          로그아웃
                        </Button>
                      </S.Box>
                    </Space>
                  </div>
                )}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <S.Space>
                    {props.data?.fetchUserLoggedIn.name}
                    <DownOutlined />
                  </S.Space>
                </a>
              </Dropdown>
              {/* <S.Baskets>{props.BasketsState}</S.Baskets> */}
            </>
          )}
          <S.Menu2>
            <MenuOutlined className="sidemenu" onClick={toggleSide} />
          </S.Menu2>
          <S.SidebarWrap>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </S.SidebarWrap>
        </S.Right>
      </S.MenuWrapper>
    </S.Nav>
  );
}
