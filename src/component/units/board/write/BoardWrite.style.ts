import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { IInput1, IButton } from "./BoardWrite.types";
import "react-quill/dist/quill.snow.css";
import * as M from "../../../../commons/styles/mediaQueries";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  background-color: black;
  font-family: "GongGothicMedium";
  padding-bottom: 30px;
`;
export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  color: white;
  margin-top: 50px;
  border-radius: 100px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.div`
  margin-top: 60px;
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: center;
`;
export const Wrapper1 = styled.div`
  margin-top: 80px;
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Wrapper1_1 = styled.div``;
export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const SReactQuill = styled(ReactQuill)`
  background-color: white;
  height: 200px;
  border-radius: 20px;
  color: black;
  .ql-container.ql-snow {
    border: none;
  }
  .ql-toolbar.ql-snow {
    border: none;
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    padding: 8px;
  }
`;
export const Input1 = styled.input`
  /* color:#C4C4C4; */
  border-radius: 50px;
  padding-left: 16px;
  background: white;
  margin-top: 16px;
  width: 486px;
  height: 52px;
  color: ${(props: IInput1) => (props.isEdit ? "red" : "#C4C4C4")};
  :focus {
    color: black;
    outline: none;
  }
  ${M.mediaL} {
    width: 250px;
  }
`;
export const Wrapper2 = styled.div`
  width: 87%;
  margin-top: 40px;
`;
export const Wrapper3 = styled.div`
  width: 87%;
  margin-top: 16px;
`;
export const Input2 = styled.input`
  border-radius: 50px;
  color: #c4c4c4;
  padding-left: 16px;
  background: white;
  border: 2px solid black;
  margin-top: 16px;
  width: 996px;
  height: 52px;

  :focus {
    color: black;
    outline: none;
  }
  ${M.mediaL} {
    width: 100%;
  }
`;
export const Input3 = styled.textarea`
  border-radius: 50px;
  color: #c4c4c4;
  padding: 25px;
  background: white;
  border: 2px solid black;
  margin-top: 16px;
  width: 996px;
  height: 480px;
  resize: none;
`;
export const Input4 = styled.input`
  border-radius: 20px;
  color: #c4c4c4;
  padding-left: 13px;
  background: white;
  border: 2px solid black;
  margin-top: 16px;
  margin-right: 16px;
  width: 77px;
  height: 52px;

  :focus {
    color: black;
    outline: none;
  }
`;
export const PostSpan = styled.button`
  padding: 14px 16px 14px 16px;
  width: 124px;
  height: 52px;
  background: black;
  color: white;
  margin-left: 15px;
  padding: 14px 16px;
  border: none;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;
export const Wrapper4 = styled.div`
  width: 87%;
  margin-top: 37px;
`;
export const BoxWrapper = styled.div`
  margin-top: 16px;
  color: Gray 2;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  width: 282px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
export const ImgBox = styled.div`
  border-radius: 50px;
  line-height: 75px;
  font-size: 20px;
  width: 78px;
  height: 78px;
  background: #bdbdbd;

  :hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;
export const RadioInput = styled.input`
  color: yellow;
  margin-top: 18px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;
export const RadioInput2 = styled.input`
  margin-top: 18px;
  margin-left: 22px;
  :hover {
    cursor: pointer;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px auto;
  width: 30%;
  ${M.mediaL} {
    width: 40%;
  }
`;
export const Button = styled.button`
  width: 150px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 10px;
  color: ${(props: IButton) => (props.isActive ? "white" : "black")};
  background-color: ${(props: IButton) => (props.isActive ? "red" : "#bdbdbd")};

  :hover {
    cursor: ${(props: IButton) => (props.isActive ? "pointer" : "")};
  }
  ${M.mediaL} {
    width: 100px;
    height: 40px;
  }
`;
export const Button2 = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 900;
  line-height: 24px;
  color: black;
  background-color: #bdbdbd;

  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    width: 100px;
    height: 40px;
  }
`;
export const ErrorMsg = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  color: red;
`;
