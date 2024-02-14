import * as S from "./BoardDetail.style";
import { getDate } from "../../../../commons/library/utils";
import { BoarDetailUI2props } from "./BoardDetail.types";
import { Button, Modal, Tooltip } from "antd";
import React from "react";
import Dompurify from "dompurify";

export default function BoarDetailUI2(props: BoarDetailUI2props) {
  return (
    <>
      <>
        {props.isOpenDeleteModal && (
          <S.PasswordModal
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <div>정말 삭제하시겠습니까?</div>
          </S.PasswordModal>
        )}
      </>
      <S.Back>
        <S.Background>
          <S.Wrapper>
            <S.Header>
              <S.Icon src="/vector-7.png" />
              <S.writer_icon>
                <S.Name_Date>
                  <S.Name>{props.data && props.data.fetchBoard.writer}</S.Name>
                  <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
                </S.Name_Date>
                <S.IconWrapper>
                  <S.Icon2>
                    <img src="/vector-8.png" />
                  </S.Icon2>
                  <S.Icon3>
                    <Tooltip
                      placement="topRight"
                      title={`${
                        props.data?.fetchBoard.boardAddress?.address ?? ""
                      } ${
                        props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                      }`}
                    >
                      <img src="/vector-8-2.png" />
                    </Tooltip>
                  </S.Icon3>
                </S.IconWrapper>
              </S.writer_icon>
            </S.Header>
            <S.Main>
              <S.Title>{props.data && props.data.fetchBoard.title}</S.Title>
              <S.Img_Box>
                {props.data?.fetchBoard.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Img
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.Img_Box>
              {typeof window !== "undefined" && (
                <S.ContentBox
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(props.data?.fetchBoard.contents),
                  }}
                ></S.ContentBox>
              )}
              <S.VideoBox>
                {props.data?.fetchBoard.youtubeUrl && (
                  <S.Iframe
                    width="500"
                    height="300"
                    src={`https://www.youtube.com/embed/${props.LastUrl}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></S.Iframe>
                )}
              </S.VideoBox>
            </S.Main>
            <S.Like_DisLike>
              <S.BoxWrapper>
                <S.LikeBox>
                  <S.Like>
                    <img src="/vector-9.png" onClick={props.onClickLike} />
                  </S.Like>
                  <S.LikeCOunt>
                    {props.data && props.data.fetchBoard.likeCount}
                  </S.LikeCOunt>
                </S.LikeBox>
                <S.DisLikeBox>
                  <S.DisLike>
                    <img src="/vector-10.png" onClick={props.onClickDislike} />
                  </S.DisLike>
                  <S.DisLikeCount>
                    {props.data && props.data.fetchBoard.dislikeCount}
                  </S.DisLikeCount>
                </S.DisLikeBox>
              </S.BoxWrapper>
            </S.Like_DisLike>
          </S.Wrapper>
          <S.Footer>
            <S.FooterMenu>
              <S.FooterMenuBox onClick={props.onClickMoveList}>
                목록으로
              </S.FooterMenuBox>
              <S.FooterMenuBox onClick={props.onClickMove}>
                수정하기
              </S.FooterMenuBox>
              <S.FooterMenuBox onClick={props.onClickDeleteBtn}>
                삭제하기
              </S.FooterMenuBox>
            </S.FooterMenu>
          </S.Footer>
        </S.Background>
      </S.Back>
    </>
  );
}
