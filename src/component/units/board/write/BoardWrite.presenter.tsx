import * as S from "./BoardWrite.style";
import { IBoardWriteUI2Props } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { isEditState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function BoardWriteUI2(props: IBoardWriteUI2Props) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return (
    //html
    <S.Background>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>{isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
        </S.TitleWrapper>
        <S.Wrapper1>
          <S.Wrapper1_1>
            <S.Label>작성자</S.Label>
            <S.Input1
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.OnWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.ErrorMsg>{props.WriterError}</S.ErrorMsg>
          </S.Wrapper1_1>
          <S.Wrapper1_1>
            <S.Label>비밀번호</S.Label>
            <S.Input1
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.OnPassword}
            />
            <S.ErrorMsg>{props.PasswordError}</S.ErrorMsg>
          </S.Wrapper1_1>
        </S.Wrapper1>
        <S.Wrapper2>
          <S.Label>제목</S.Label>
          <S.Input2
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.OnTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.ErrorMsg>{props.MyTitleError}</S.ErrorMsg>
        </S.Wrapper2>
        <S.Wrapper2>
          <S.Label>내용</S.Label>
          {/* <S.Input3
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={props.OnContent}
            defaultValue={props.data?.fetchBoard.contents}
          /> */}
          <S.SReactQuill
            defaultValue={props.data?.fetchBoard.contents}
            // value={getValues("contents")}
            onChange={props.onChangeContents}
          />
          <S.ErrorMsg>{props.ContentError}</S.ErrorMsg>
        </S.Wrapper2>
        <S.Wrapper3>
          <S.Label>주소</S.Label>
          <div>
            <S.Input4
              type="text"
              placeholder="07250"
              onChange={props.OnZipCode}
              readOnly
              value={
                props.zipCode ||
                (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
              }
            />
            <S.PostSpan onClick={props.onToggleModal}>우편번호 검색</S.PostSpan>
            {props.isOpen && (
              <Modal
                open={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <DaumPostcodeEmbed onComplete={props.handleComplete} />
              </Modal>
            )}
          </div>
          <S.ErrorMsg>{props.PostError}</S.ErrorMsg>
          <S.Input2
            type="text"
            onChange={props.OnAddress}
            readOnly
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
          ></S.Input2>
          <S.Input2
            type="text"
            onChange={props.OnAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          ></S.Input2>
        </S.Wrapper3>
        <S.Wrapper4>
          <S.Label>유튜브</S.Label>
          <S.Input2
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onYoutube}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          ></S.Input2>
        </S.Wrapper4>
        <S.Wrapper2>
          <S.Label>사진 첨부</S.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.Wrapper2>
        <S.Wrapper2>
          <S.Label>메인 설정</S.Label>
          <S.RadioInput type="radio" name="main" />
          유튜브
          <S.RadioInput2 type="radio" name="main" />
          사진
        </S.Wrapper2>
        <S.ButtonWrapper>
          <S.Button
            isActive={isEdit ? true : props.isActive}
            onClick={isEdit ? props.EditBtn : props.EnrollBtn}
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.Button>
          <S.Button2 onClick={props.onClickCs}>취소</S.Button2>
        </S.ButtonWrapper>
      </S.Container>
    </S.Background>
  );
}
