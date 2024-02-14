import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI2 from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { ChangeEvent } from "react";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { isEditState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";

export default function BoardWrite2(props: IBoardWriteProps) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [Writer, setWriter] = useState("");
  const [Password, setPassword] = useState("");
  const [MyTitle, setMyTitle] = useState("");
  const [Content, setContent] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [WriterError, setWriterError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [MyTitleError, setMyTitleError] = useState("");
  const [ContentError, setContentError] = useState("");
  const [PostError, setPostError] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const OnWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    setWriterError("");
    if (event.target.value && Password && MyTitle && Content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const OnPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
    if (Writer && event.target.value && MyTitle && Content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // const OnContent = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target?.value);
  //   setContent(event.target?.value);
  //   setContentError("");
  //   if (Writer && Password && MyTitle && event.target?.value) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  const onChangeContents = (value: string) => {
    setContent(value);
    // setValue("contents", value === "<p><br></p>" ? "" : value);
    // void trigger("contents");
  };

  const OnTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
    setMyTitleError("");
    if (Writer && Password && event.target.value && Content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const OnZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
    setPostError("");
  };
  const OnAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const OnAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  const onYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  const EnrollBtn = async () => {
    console.log(Content);
    if (Writer && Password && Content && MyTitle) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: Writer,
            password: Password,
            title: MyTitle,
            contents: Content,
            youtubeUrl: youtubeUrl,
            images: [...fileUrls],
            boardAddress: {
              zipcode: zipCode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      alert("등록성공");
      console.log(result);
      router.push(`/boards/${result.data?.createBoard._id}`);
    } else {
      if (!Writer) {
        setWriterError("  작성자를 입력하세요.");
      } else {
        setWriterError("");
      }
      if (!Password) {
        setPasswordError(" 비밀번호를 입력하세요.");
      } else {
        setPasswordError("");
      }
      if (!Content) {
        setContentError(" 내용을 입력하세요.");
      } else {
        setContentError("");
      }
      if (!MyTitle) {
        setMyTitleError(" 제목을 입력하세요.");
      } else {
        setMyTitleError("");
      }
      if (!zipCode) {
        setPostError(" 우편번호를 입력하세요.");
      } else {
        setPostError("");
      }
    }
  };

  const EditBtn = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !MyTitle &&
      !Content &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipCode &&
      !fileUrls
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!Password) {
      alert("비밀번호를 입력 해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (MyTitle) updateBoardInput.title = MyTitle;
    if (Content) updateBoardInput.contents = Content;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipCode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipCode) updateBoardInput.boardAddress.zipcode = zipCode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: Password,
          updateBoardInput,
        },
      });
      alert("수정성공");
      console.log(result);
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    onToggleModal();
    setZipCode(data.zonecode);
    setAddress(data.address);
  };

  const onClickCs = () => {
    if (isEdit) {
      router.push(`/boards/${router.query.boardId}`);
    } else {
      router.push(`/boards/`);
    }
  };
  console.log(props.data?.fetchBoard);
  useEffect(() => {
    if (props.data) {
      setFileUrls(props?.data.fetchBoard.images);
    }
  }, [props.data]);

  return (
    <BoardWriteUI2
      Writer={Writer}
      OnWriter={OnWriter}
      OnPassword={OnPassword}
      // OnContent={OnContent}
      onChangeContents={onChangeContents}
      OnTitle={OnTitle}
      OnZipCode={OnZipCode}
      zipCode={zipCode}
      onYoutube={onYoutube}
      EnrollBtn={EnrollBtn}
      WriterError={WriterError}
      PasswordError={PasswordError}
      MyTitleError={MyTitleError}
      ContentError={ContentError}
      PostError={PostError}
      youtubeUrl={youtubeUrl}
      isActive={isActive}
      EditBtn={EditBtn}
      data={props.data}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      isOpen={isOpen}
      OnAddress={OnAddress}
      OnAddressDetail={OnAddressDetail}
      address={address}
      addressDetail={addressDetail}
      Password={Password}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickCs={onClickCs}
    />
  );
}
