import React, { Component } from "react";
import { getDate } from "../../../../commons/library/utils";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import * as S from "./BoardList.style";
import { IBoardsListUI } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardsListUI(props: IBoardsListUI) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const mySecretCode = uuidv4();
  return (
    <S.Back>
      <S.Background>
        <S.Wrapper>
          <S.HeadWrapper>
            <S.Id>ID</S.Id>
            <S.TItle>제목</S.TItle>
            <S.Writer>작성자</S.Writer>
            <S.Date>날짜</S.Date>
          </S.HeadWrapper>
          {props.data?.fetchBoards.map((el, index) => (
            <S.BoardsWrapper
              key={el._id}
              onClick={props.onClickDetail}
              id={el._id}
            >
              <S.Item>{String(el._id).slice(-4).toUpperCase()}</S.Item>
              <S.ItemTitle>
                {el.title
                  .replaceAll(
                    props.keyword,
                    `${mySecretCode}${props.keyword}${mySecretCode}`
                  )
                  .split(mySecretCode)
                  .map((el: any) => (
                    <span
                      key={uuidv4()}
                      style={{ color: el === props.keyword ? "red" : "white" }}
                    >
                      {el}
                    </span>
                  ))}
              </S.ItemTitle>
              <S.Item>{el.writer}</S.Item>
              <S.Item>{getDate(el.createdAt)}</S.Item>
            </S.BoardsWrapper>
          ))}
        </S.Wrapper>
        <S.Footer>
          <S.PageWrapper>
            <Paginations01 refetch={props.refetch} count={props.count} />
          </S.PageWrapper>
          <S.NewBoard onClick={props.onClickMoveNew}>
            게시물 등록하기
            <S.Icon2>{">"}</S.Icon2>
          </S.NewBoard>
        </S.Footer>
      </S.Background>
    </S.Back>
  );
}

{
}
