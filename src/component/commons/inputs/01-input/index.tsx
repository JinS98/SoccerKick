import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

export default function Input01(props: IInputProps) {
  return (
    <Input
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
    />
  );
}

const Input = styled.input`
  background-color: #353535;
  color: white;
  font-size: 100%;
  width: 80%;
  height: 70px;
  margin: 20px 0px;
  border-radius: 5px;
  padding-left: 20px;
  border: none;

  :focus {
    color: white;
    outline: none;
  }
  ${M.mediaL} {
    height: 35px;
  }
`;
