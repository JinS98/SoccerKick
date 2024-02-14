import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  margin: auto;
  ${M.mediaL} {
    width: 80%;
  }
  ${M.mediaM} {
    width: 80%;
  }
`;

export const Btn = styled.button`
  font-family: "GongGothicMedium";
  margin: 0 20px;
  background-color: black;
  border: none;
  width: 40px;
  font-size: 20px;
  color: ${(props) => (props.pageClick ? "red" : "white")};
  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    width: 10px;
    font-size: 15px;
  }
`;

export const Last = styled.button`
  color: white;
  background-color: black;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  border: none;
  width: 25px;
  margin: 0px 5px;
  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    width: 10px;
    font-size: 15px;
  }
`;
