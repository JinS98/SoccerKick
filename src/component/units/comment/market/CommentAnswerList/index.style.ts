import styled from "@emotion/styled";
import * as M from "../../../../../commons/styles/mediaQueries";

export const AnswerWrap = styled.div`
  margin-left: 15%;
  width: 85%;
  display: flex;
`;
export const Arrow = styled.div`
  width: 4%;
  margin-right: 20px;
  margin-top: 20px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Icon = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  width: 5%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Name_Edit_Del = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Edit_Del = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6%;
  ${M.mediaL} {
    width: 11%;
  }
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 15px;
  margin-bottom: 7px;
`;
export const Edit = styled.div`
  width: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  :hover {
    cursor: pointer;
  }
`;
export const Del = styled.div`
  width: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  :hover {
    cursor: pointer;
  }
`;

export const Contents = styled.div`
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  height: 60px;
  background-color: #222222;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Date_Btn = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Date = styled.div`
  padding: 7px;
  padding-left: 15px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #bdbdbd;
  margin-right: 3px;
`;

export const AddAnswer = styled.button`
  background-color: black;
  border: none;
`;
