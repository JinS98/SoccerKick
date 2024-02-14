import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import * as S from "./Log_in.Style";
import { LOGIN_USER } from "./Log_in.queries";
import { useForm } from "react-hook-form";
import { IFormData } from "./Log_in.types";
import { schema } from "./Log_in.validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Log_in() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  const onClickSubmit = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        Modal.error({ content: "로그인을 먼저 해주세요." });
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };

  const onClickJoin = () => {
    router.push("/sign_up");
  };
  const onClickLogo = () => {
    router.push("/highlights");
  };

  return (
    <>
      <S.Back>
        <S.ImgBox></S.ImgBox>
        <S.form onSubmit={handleSubmit(onClickSubmit)}>
          <S.Logo onClick={onClickLogo} src="/header/logo6.png" />
          <S.Input type="text" placeholder="이메일" {...register("email")} />
          <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
          <S.Input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <div style={{ color: "red" }}>
            {formState.errors.password?.message}
          </div>
          <S.button>로그인</S.button>
          <S.signUpWrapper>
            <S.span>아직 회원이 아니세요?</S.span>
            <S.signUp onClick={onClickJoin}>회원가입</S.signUp>
          </S.signUpWrapper>
        </S.form>
      </S.Back>
    </>
  );
}
