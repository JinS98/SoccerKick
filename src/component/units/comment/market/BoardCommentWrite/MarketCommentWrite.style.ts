import styled from "@emotion/styled";
import * as M from "../../../../../commons/styles/mediaQueries";

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const CommentWrite = styled.div`
  color: white;
  width: 80%;
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
export const img = styled.img`
  width: 30px;
`;
export const CmtTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 35px;
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
  background-color: #222222;
  color: white;
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  :focus {
    color: white;
    outline: none;
  }
`;
export const StarBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentBoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 46px;
`;
export const CommentBox = styled.input`
  background-color: #222222;
  width: 100%;
  height: 108px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #bdbdbd;
  padding: 20px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  resize: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  :focus {
    color: white;
    outline: none;
  }
`;
export const EnrollLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const StrCount = styled.div`
  padding-left: 20px;
  height: 52px;
  padding-top: 14px;
`;
export const EnrollBtn = styled.button`
  border: none;
  position: relative;
  font-size: 20px;
  font-weight: 400;
  width: 91px;
  height: 45px;
  color: black;
  text-align: center;
  border-radius: 10px;
  background-color: #d70000;

  :hover {
    cursor: pointer;
  }
`;
