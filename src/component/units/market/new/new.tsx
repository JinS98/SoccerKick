import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import Input02 from "../../../commons/inputs/02-input";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./new.queries";
import * as S from "./new.style";
import { IFormData } from "./new.types";
import { schema } from "./new.validation";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
import Link from "next/link";
import DaumPostcodeEmbed from "react-daum-postcode";
import { UPLOAD_FILE } from "../../../commons/inputs/03-input";
import { withAuth } from "../../../commons/hocs/withAuth";
import Uploads02 from "../../../commons/uploads/02/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { includes } from "lodash";
import { Address } from "cluster";

declare const window: typeof globalThis & {
  kakao: any;
};

function MarketNew(props: any) {
  const appKey = "f0c68224b90fedf4d41381f7107ec170";
  const [imgUrls, setImgUrls] = useState([]);
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [address, setAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [contents, setContents] = useState("");
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      defaultValues: {
        name: props.data?.fetchUseditem.name ?? "",
        price: props.data?.fetchUseditem.price ?? "",
        remarks: props.data?.fetchUseditem.remarks ?? "",
        tags: props.data?.fetchUseditem.tags,
        contents: props.data?.fetchUseditem.contents ?? "",
        address: props.data?.fetchUseditem.useditemAddress?.address ?? "",
        addressDetail:
          props.data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
      },
    });

  const checkKeyDown = (e) => {
    if (e.target.value.length !== 0 && e.code === "Enter") {
      e.preventDefault();
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.tabIndex;
    const filteredTagList = tagList.filter(
      (el, index) => index !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  const onChangeContents = (value: string) => {
    setContents(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  const onChangeAddress = (e) => {
    setValue("useditemAddress.address", e.target.value);
    void trigger("useditemAddress.address");
    // isEdit
    //   ? setAddress(props.data.fetchUseditem.useditemAddress.address)
    //   : setAddress(e.target.value);
  };

  const onClickSubmit = async (data: any) => {
    // const results = await Promise.all(
    //   files.map(async (el) =>
    //     el !== undefined
    //       ? await uploadFile({ variables: { file: el } })
    //       : undefined
    //   ) //[uploadFile({ variables: { file: file0}})),uploadFile({ variables: { file: file2}})), uploadFile({ variables: { file: file2}}))]
    // );
    // console.log(results);
    // const resultUrls = results
    //   .filter((el) => el)
    //   .map((el) => (el !== undefined ? el.data?.uploadFile.url : "")); // [강아지1.jpg,강아지2.jpg,강아지3.jpg ]

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            price: data.price,
            contents: data.contents,
            remarks: data.remarks,
            images: [...fileUrls],
            tags: tagList,
            useditemAddress: {
              address: address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
          },
        },
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };

  const EditBtn = async (data: any) => {
    // if (
    //   !data.name &&
    //   !data.price &&
    //   !data.contents &&
    //   !address &&
    //   !data.addressDetail &&
    //   !data.remarks
    // ) {
    //   alert("수정한 내용이 없습니다.");
    //   return;
    // }

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name) updateUseditemInput.title = data.name;
    if (data.price) updateUseditemInput.title = data.price;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.remarks) updateUseditemInput.youtubeUrl = data.remarks;
    if (address || data.addressDetail) {
      updateUseditemInput.boardAddress = {};
      if (address) updateUseditemInput.boardAddress.address = address;
      if (data.addressDetail)
        updateUseditemInput.boardAddress.addressDetail = data.addressDetail;
    }

    try {
      if (typeof router.query.useditemId !== "string") return;
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            price: data.price,
            contents: data.contents,
            remarks: data.remarks,
            images: [...fileUrls],
            tags: tagList,
            useditemAddress: {
              address: address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
          },
          useditemId: router.query.useditemId,
        },
      });
      alert("수정성공");
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const handleComplete = (data: Address) => {
    onToggleModal();
    setAddress(data.address);
  };

  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 랑 동일
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?&libraries=services&autoload=false&appkey=${appKey}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
          isPanto: true,
        };

        const map = new window.kakao.maps.Map(container, options);
        let geocoder = new window.kakao.maps.services.Geocoder();

        if (props.data !== undefined) {
          if (address === "") {
            setTagList(props.data.fetchUseditem.tags);
            setAddress(props.data.fetchUseditem.useditemAddress.address);
          }
        }
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          address ? address : "제주특별자치도 제주시 첨단로 242",
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              setValue("lat", Number(result[0].y));
              void trigger("lat");
              setValue("lng", Number(result[0].x));
              void trigger("lng");

              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].address.address_name}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [address]);

  useEffect(() => {
    if (props.data) {
      setFileUrls(props?.data.fetchUseditem.images);
    }
  }, [props.data]);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickCs = () => {
    setIsEdit(false);
  };

  return (
    <S.Back>
      <S.Wrapper
        name="form"
        onSubmit={handleSubmit(isEdit ? EditBtn : onClickSubmit)}
      >
        <S.header>{isEdit ? "상품 수정" : "상품 등록"}</S.header>
        <S.BoxWrapper>
          <S.NameBox>
            <S.Name>상품명</S.Name>
            <Input02 type="text" register={register("name")} />
            <div style={{ color: "red" }}>{formState.errors.name?.message}</div>
          </S.NameBox>
          <S.NameBox>
            <S.Name>상품가격</S.Name>
            <Input02 type="number" register={register("price")} />
            <div style={{ color: "red" }}>
              {formState.errors.price?.message}
            </div>
          </S.NameBox>
        </S.BoxWrapper>
        <S.contentsBox>
          <S.contents>한줄요약</S.contents>
          <Input02 type="text" register={register("remarks")} />
        </S.contentsBox>
        <S.contentsBox>
          <S.contents>태그입력</S.contents>
          <S.TagBox>
            {tagList.map((tagItem, index) => {
              return (
                <S.TagItem key={index} tabIndex={index} onClick={deleteTagItem}>
                  <S.Text tabIndex={index} onClick={deleteTagItem}>
                    {tagItem}
                  </S.Text>
                </S.TagItem>
              );
            })}
            <S.TagInput
              type="text"
              placeholder="태그를 입력하세요."
              onChange={(e) => setTagItem(e.target.value)}
              value={tagItem}
              onKeyPress={(e) => checkKeyDown(e)}
            />
          </S.TagBox>
        </S.contentsBox>
        <S.mainWrapper>
          <S.contents>상품 설명</S.contents>
          <S.SReactQuill
            defaultValue={getValues("contents")}
            onChange={onChangeContents}
          />
        </S.mainWrapper>
        <S.MapWrapper>
          <S.Map_Left>
            <S.contents>거래위치</S.contents>
            <S.MapBox id="map"></S.MapBox>
          </S.Map_Left>
          <S.Map_Right>
            <S.GPSWrapper>
              <S.contents>주소검색</S.contents>
              <S.Button type="button" onClick={onToggleModal}>
                검색하기
              </S.Button>
              {isOpen && (
                <Modal
                  open={true}
                  onOk={onToggleModal}
                  onCancel={onToggleModal}
                >
                  <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
              )}
            </S.GPSWrapper>
            <S.AdWrapper>
              <S.contents>주소</S.contents>
              <S.input
                type="text"
                onChange={onChangeAddress}
                readOnly
                value={address}
              />
              <Input02 type="text" register={register("addressDetail")} />
            </S.AdWrapper>
          </S.Map_Right>
        </S.MapWrapper>
        <S.ImgWrapper>
          <S.contents>사진 첨부</S.contents>
          <S.ButtonWrapper>
            {fileUrls.map((el, index) => (
              <Uploads02
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
                data={props.data}
              />
            ))}
          </S.ButtonWrapper>
        </S.ImgWrapper>
        <S.buttonWrapper>
          <S.Button1>{isEdit ? "수정하기" : "등록하기"}</S.Button1>
          <Link
            href={
              isEdit ? `/market/${props.data?.fetchUseditem._id}` : "/market/"
            }
          >
            <S.Button1 type="button" onClick={onClickCs}>
              취소하기
            </S.Button1>
          </Link>
        </S.buttonWrapper>
      </S.Wrapper>
    </S.Back>
  );
}

export default withAuth(MarketNew);
