import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const Search = styled.div`
  font-size: 25px;
  color: black;
  margin-right: 50px;

  :hover {
    cursor: pointer;
  }
  ${M.mediaM} {
    display: none;
  }
`;
export const Input = styled.input`
  position: relative;
  left: 50px;
  font-size: 20px;
  height: 50px;
  width: 400px;
  padding-left: 30px;
  padding-right: 100px;
  border: 1px solid grey;
  border-radius: 50px;
  :focus {
    outline: none;
  }
  ${M.mediaL} {
    width: 200px;
    height: 30px;
  }
  ${M.mediaM} {
    display: none;
  }
`;
export const Search_2 = styled.div`
  width: 100px;
  position: relative;
  right: 30px;
  font-size: 25px;
  color: black;

  :hover {
    cursor: pointer;
  }
  ${M.mediaM} {
    display: none;
  }
`;
