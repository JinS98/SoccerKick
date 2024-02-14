import styled from "@emotion/styled";

export const Header = styled.div`
  padding-top: 10px;
  height: 110px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightWrapper = styled.div`
  width: 30%;
  height: 110;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;

export const LeftWrapper = styled.div`
  margin-top: 5px;
  margin-left: 0px;
  color: white;
`;
export const SiteName = styled.a`
  font-size: 50px;
`;

export const Logo = styled.a`
  font-size: 50px;
`;
export const Date = styled.div`
  font-size: 15px;
  line-height: 14px;
  color: rgba(197, 123, 151, 0.8);
  font-weight: 900;
  padding-left: 130px;
`;
export const InnerLogo = styled.div`
  font-size: 0px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.button`
  border: none;
  background-color: white;
  font-size: 20px;
  margin: 10px;
  color: rgba(197, 123, 151, 0.8);
  position: relative;
  top: 10px;
  cursor: pointer;
  margin: 0 20px;
`;
