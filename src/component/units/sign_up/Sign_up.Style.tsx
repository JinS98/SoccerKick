import styled from "@emotion/styled";
import * as M from "../../../commons/styles/mediaQueries";

export const Back = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ImgBox = styled.div`
  width: 65%;
  height: 100%;
  background-image: url(/Back.jpg);
  background-size: cover;
  background-position-x: -200px;
  background-repeat: no-repeat;
  filter: brightness(60%);
  ${M.mediaL} {
    width: 70%;
    background-position-x: -240px;
  }
`;
export const Img = styled.img``;
export const form = styled.form`
  background-color: rgba(18, 18, 18, 0.9);
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${M.mediaL} {
    width: 30%;
  }
`;
export const Logo = styled.img`
  display: block;
  width: 350px;
  margin: 200px 0px 60px 0px;
  ${M.mediaL} {
    margin: 100px 0px 60px 0px;
    width: 80%;
  }
`;
export const button = styled.button`
  margin: 80px 0px;
  width: 80%;
  height: 60px;
  border-radius: 50px;
  background-color: #d70000;
  border: none;
  font-size: 20px;
  font-weight: 900;

  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    width: 60%;
    height: 40px;
    font-size: 15px;
  }
`;
export const signUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  width: 260px;
`;
export const span = styled.span``;
export const signUp = styled.a`
  color: white;
  :hover {
    cursor: pointer;
  }
`;
export const Error = styled.div`
  color: red;
`;
