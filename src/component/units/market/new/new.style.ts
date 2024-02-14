import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import * as M from "../../../../commons/styles/mediaQueries";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export const Back = styled.div`
  background-color: black;
  border: 1px solid black;
  padding-bottom: 30px;
`;

export const Wrapper = styled.form`
  width: 80%;
  background-color: #222222;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 100px;
  margin-top: 50px;
  border-radius: 100px;
  ${M.mediaL} {
    padding: 80px 40px;
  }
`;
export const header = styled.header`
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 100px;
`;
export const BoxWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const NameBox = styled.div`
  width: 45%;
`;
export const Name = styled.div`
  color: white;
  margin-bottom: 10px;
`;

export const contentsBox = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;
export const contents = styled.div`
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const Map_Left = styled.div`
  width: 60%;
`;
export const Map_Right = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const GPSWrapper = styled.div`
  height: 40%;
`;
export const AdWrapper = styled.div`
  padding-top: 30px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MapBox = styled.div`
  height: 300px;
  width: 100%;
  background-color: aqua;
`;
export const Button = styled.button`
  width: 108px;
  height: 52px;
`;
export const Icon = styled.img`
  margin: auto 20px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const mainWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const ImgButton = styled.button`
  border-radius: 100px;
  margin-right: 30px;
  width: 130px;
  height: 130px;
  font-size: 30px;
`;
export const ThumWarpper = styled.div`
  color: white;
  width: 100%;
`;
export const RadioWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
`;
export const RadioInput = styled.input`
  color: yellow;

  :hover {
    cursor: pointer;
  }
`;
export const buttonWrapper = styled.div`
  width: 400px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  ${M.mediaL} {
    width: 300px;
  }
`;
export const Button1 = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 20px;
  ${M.mediaL} {
    width: 130px;
    height: 35px;
  }
`;
export const input = styled.input`
  border-radius: 20px;
  color: #c4c4c4;
  padding-left: 13px;
  width: 100%;
  height: 52px;

  :focus {
    color: black;
    outline: none;
  }
`;
export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 52px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 20px;

  &:focus-within {
    border: none;
  }
`;
export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #d70000;
  border-radius: 5px;
  color: white;
  font-size: 13px;
  :hover {
    cursor: pointer;
  }
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 100%;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  color: #c4c4c4;
  width: 100%;
  height: 52px;
  :focus {
    color: black;
    outline: none;
  }
`;
export const Text = styled.span``;
export const SReactQuill = styled(ReactQuill)`
  background-color: white;
  height: 200px;
  border-radius: 20px;
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
