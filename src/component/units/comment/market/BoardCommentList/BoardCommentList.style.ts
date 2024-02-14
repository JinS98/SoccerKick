import styled from "@emotion/styled";
import { Modal } from "antd";
import * as M from "../../../../../commons/styles/mediaQueries";

export const Back = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Comment = styled.div`
  width: 80%;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const CmtMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WriterLine = styled.div`
  display: flex;
`;
export const Icon5 = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;
export const Writer = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 15px;
  margin: 15px 0px 0px 16px;
`;
export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Icon6 = styled.img`
  width: 18px;
  height: 18px;
  margin: 15px 16px 0px 780px;
  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    margin: 15px 16px 0px 380px;
  }
`;
export const Icon7 = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 15px;
  :hover {
    cursor: pointer;
  }
`;
export const Cmt = styled.div`
  background-color: #222222;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-top: 10px;
  margin-left: 16px;
  padding: 15px 15px;
  border-radius: 30px;
  height: 80px;
`;
export const CmtDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #bdbdbd;
  padding-left: 15px;
  margin: 20px 0px 20px 16px;
`;

export const CommentWrite = styled.div`
  width: 1200px;
  margin-bottom: 1px solid #bdbdbd;
`;
export const CmtTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Icon4 = styled.div`
  margin-top: 5px;
  margin-right: 14px;
`;
export const CmtTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  margin-bottom: 40px;
`;
export const Writer_Password_Star = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const EnrollLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`;
export const StrCount = styled.div`
  padding-left: 20px;
  height: 52px;
  padding-top: 14px;
`;
export const EnrollBtn = styled.div`
  width: 91px;
  height: 52px;
  color: white;
  background-color: gray;
  text-align: center;
  padding-top: 14px;

  :hover {
    cursor: pointer;
    background-color: black;
  }
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AnswerBtn = styled.button`
  height: 30px;
  margin: 0px 10px;
  background-color: black;
  color: white;
  border: none;
`;
