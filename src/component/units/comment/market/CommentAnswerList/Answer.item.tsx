import { useState } from "react";
import { timeForToday } from "../../../../../commons/library/utils2";
import CommentAnswerWriter from "../CommentAnswerWriter";
import * as S from "./index.style";

export default function AnswerItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div key={props.el._id}>
      {!isEdit && (
        <S.AnswerWrap key={props.el._id}>
          <S.Arrow style={{ backgroundImage: "url(/Answer.png)" }}></S.Arrow>
          <S.Icon style={{ backgroundImage: "url(/vector-7.png)" }}></S.Icon>
          <S.MainWrap>
            <S.Name_Edit_Del>
              <S.Name>{props.el.user.name}</S.Name>
              <S.Edit_Del>
                <S.Edit
                  onClick={onClickEdit}
                  id={props.el._id}
                  style={{ backgroundImage: "url(/vector-12.png)" }}
                ></S.Edit>
                <S.Del
                  onClick={props.onClickDel}
                  id={props.el._id}
                  style={{ backgroundImage: "url(/vector-13.png)" }}
                ></S.Del>
              </S.Edit_Del>
            </S.Name_Edit_Del>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.Date_Btn>
              <S.Date>{timeForToday(props.el.createdAt)}</S.Date>
              <S.AddAnswer onClick={props.onClickAnswer}>답글 달기</S.AddAnswer>
            </S.Date_Btn>
          </S.MainWrap>
        </S.AnswerWrap>
      )}
      {isEdit && (
        <CommentAnswerWriter
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </div>
  );
}
