import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import * as S from "./Sign_up.Style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Sign_up.validation";
import { IFormData } from "./Sign_up.types";
import { CREATE_USER } from "./Sign_up.queries";
import Input01 from "../../commons/inputs/01-input";

export default function Sign_up() {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });

      router.push("/log_in");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };

  return (
    <>
      <S.Back>
        <S.ImgBox></S.ImgBox>
        <S.form onSubmit={handleSubmit(onClickSubmit)}>
          <S.Logo src="/header/logo6.png" />
          <Input01
            type="text"
            placeholder={"이름"}
            register={register("name")}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
          <Input01
            type="text"
            placeholder={"이메일"}
            register={register("email")}
          />
          <S.Error>{formState.errors.email?.message}</S.Error>
          <Input01
            type="password"
            placeholder={"비밀번호"}
            register={register("password")}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
          <S.button>회원가입</S.button>
        </S.form>
      </S.Back>
    </>
  );
}
