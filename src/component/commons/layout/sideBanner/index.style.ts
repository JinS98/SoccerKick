import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const TodayBox = styled.div`
  padding: 28px 0px 32px 0px;
  right: 3%;
  top: 40%;
  width: 155px;
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  background-color: #222222;
  border-radius: 20px;
  z-index: 10;
  border: 1px solid white;
`;

export const TodayName = styled.h3`
  color: white;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.05em;
  text-align: left;
`;

export const TodayItem = styled.div`
  margin: 10px;
  width: 85px;
  height: 85px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
