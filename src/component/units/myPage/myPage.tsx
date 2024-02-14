import { ExclamationCircleFilled } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Modal, Button } from "antd";
import Head from "next/head";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../commons/types/generated/types";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_BOARDS_OF_MINE,
  FETCH_USER_LOGGED_IN,
} from "./myPage.queries";
import * as S from "./myPage.style";

export default function MyPageUI() {
  const [cost, setCost] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data: dataBoardsOfMine } = useQuery(FETCH_BOARDS_OF_MINE);

  console.log(dataBoardsOfMine);

  const onClickPayment = () => {
    onToggleModal();
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "POINT",
        amount: cost,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
              amount: rsp.paid_amount,
            },
          });
          alert("포인트 충전이 완료되었습니다.");
          console.log(result);
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  console.log(data);

  const onChangePay = (e) => {
    setCost(e.currentTarget.value);
    console.log(cost);
  };
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickMyMarket = () => {};
  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Back>
        <S.wrapper>
          <S.Header>
            <S.UserWrapper>
              <S.Icon>
                <img src="/Vector-19.png" />
              </S.Icon>
              <S.User>{data?.fetchUserLoggedIn.name}</S.User>
            </S.UserWrapper>
            <S.menuItem>My Point</S.menuItem>
            <S.PointWrapper>
              <S.Icon2>
                <S.Img src="/Point.png" />
              </S.Icon2>
              <S.Point>{data?.fetchUserLoggedIn.userPoint?.amount}</S.Point>
              <Button onClick={onToggleModal}>충전하기</Button>
              {isOpen && (
                <Modal
                  open={true}
                  onOk={onClickPayment}
                  onCancel={onToggleModal}
                >
                  <S.Select onChange={onChangePay}>
                    <option value="none">충전 금액을 선택하세요.</option>
                    <option>1000</option>
                    <option>3000</option>
                    <option>5000</option>
                    <option>10000</option>
                    <option>50000</option>
                  </S.Select>
                </Modal>
              )}
            </S.PointWrapper>
            <S.menuWrapper>
              <S.Menu>
                <S.menuItem></S.menuItem>
              </S.Menu>
            </S.menuWrapper>
          </S.Header>
        </S.wrapper>
      </S.Back>
    </>
  );
}
