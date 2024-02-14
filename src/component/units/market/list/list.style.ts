import styled from "@emotion/styled";
import * as M from "../../../../commons/styles/mediaQueries";

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 50px;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const SellWrap = styled.div`
  display: flex;
  padding: 10px 0px 50px 0px;
  width: 100%;
  justify-content: center;
`;
export const SellingBtn = styled.button`
  color: white;
  background-color: black;
  border: 3px solid #222222;
  width: 400px;
  height: 70px;
  border-radius: 30px;
  font-size: 25px;

  :hover {
    cursor: pointer;
    background-color: #222222;
  }
`;
export const TodayBox = styled.div`
  right: 3%;
  top: 70%;
  width: 8%;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  height: 60px;
  border-radius: 30px;
  position: fixed;
`;
export const TodayName = styled.h3`
  color: white;
  margin: 10px auto;
`;
export const ItemWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid #222222;
  :hover * {
    cursor: pointer;
    background-color: #222222;
  }
  ${M.mediaL} {
    width: 50%;
  }
`;

export const ThumWrapper = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: black;
  padding: 20px;
`;
export const Thum = styled.div`
  display: block;
  height: 330px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const ContentsWrapper = styled.div`
  background-color: black;

  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  color: white;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 30px;
`;
export const Price_Pick = styled.div`
  padding: 20px 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  background-color: black;
  justify-content: space-between;
`;
export const Price = styled.div`
  font-size: 20px;
  color: white;
`;
export const PickWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Icon = styled.img``;
export const CreatedAt = styled.span`
  margin-left: 5px;
  color: #bdbdbd;
  font-size: 15px;
`;
