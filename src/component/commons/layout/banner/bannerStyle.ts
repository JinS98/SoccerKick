import styled from "@emotion/styled";
import { mediaL } from "../../../../commons/styles/mediaQueries";

export const Banner = styled.div`
  width: 100%;
  height: 650px;
  padding: 100px 0px;
  align-items: center;
  background-color: black;
  ${mediaL} {
    height: 400px;
  }
`;

export const Box = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 570px;
`;

export const SliderWrapper = styled.div``;

export const Item = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 420px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
  ${mediaL} {
    height: 250px;
  }
`;
export const Contents = styled.div``;
export const Recent = styled.div`
  display: flex;
  align-items: flex-end;
  border: 3px solid #222222;
  border-radius: 20px;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -85px;
  ${mediaL} {
    background-size: 125%;
  }
`;
export const wrapper = styled.div``;
export const Detail = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5px;
`;
export const Title = styled.div`
  padding: 0px 20px;
  text-align: left;
  color: white;
  font-size: 25px;
  font-weight: 700;
  ${mediaL} {
    font-size: 12px;
  }
`;
export const Sub = styled.div`
  font-size: 15px;
  font-weight: 600;
  padding: 0px 20px;
  display: flex;
  color: #2affcc;
  ${mediaL} {
    display: none;
  }
`;
export const Date = styled.div``;
export const Ctg = styled.div`
  margin-right: 10px;
`;
export const Bar = styled.div`
  margin-right: 10px;
`;
