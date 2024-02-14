import * as S from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <S.Wrapper>
      <S.Last onClick={props.onClickPrevPage} disabled={props.startPage === 1}>
        {"<"}
      </S.Last>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Btn
              pageClick={
                props.pageClick === index + props.startPage ? true : false
              }
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{ margin: "10px" }}
            >
              {index + props.startPage}
            </S.Btn>
          )
      )}
      <S.Last
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 > props.lastPage}
      >
        {">"}
      </S.Last>
    </S.Wrapper>
  );
}
