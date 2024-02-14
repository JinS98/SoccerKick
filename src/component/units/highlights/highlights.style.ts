import styled from "@emotion/styled";
import * as M from "../../../commons/styles/mediaQueries";

export const Back = styled.div`
  padding: 20px 50px;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${M.mediaM} {
    padding: 20px 0px;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  color: white;
  align-items: center;
  background-color: black;
`;

interface IItem_competition {
  isActive: boolean;
}

export const itemWrapper = styled.div`
  width: 29%;
  margin: 10px 5px;
  border-radius: 10px;
  border: 1px solid black;
  :hover {
    cursor: pointer;
    outline: 1px solid darkgrey;
    outline-offset: -1px;
    transition: outline 0.3s linear;
  }
  ${M.mediaL} {
    width: 35%;
  }
  ${M.mediaM} {
    width: 80%;
  }
`;

export const item = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
`;

export const item_content = styled.div`
  padding: 1rem;
  background-color: #222222;
`;

export const item_title = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 8px;
`;

export const item_competition = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 8px;
  font-weight: 400;
  position: relative;
  z-index: 10;
  :hover {
    ${(props: IItem_competition) => (props.isActive = false)}
    color: ${(props: IItem_competition) => (props.isActive ? "" : "lightgray")};
  }
`;
export const thumbnail = styled.div`
  height: 250px;
  background-size: cover;
  background-position-x: -45px;
  ${M.mediaL} {
    background-size: cover;
  }
  ${M.mediaM} {
    background-size: cover;
  }
`;

export const Date = styled.div`
  margin: 10px 8px;
  color: white;
`;
