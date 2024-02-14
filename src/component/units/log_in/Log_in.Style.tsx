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
  cursor: pointer;
  display: block;
  width: 80%;
  margin: 30% 0px 60px 0px;
`;
export const Input = styled.input`
  background-color: #353535;
  color: white;
  font-size: 100%;
  width: 80%;
  height: 8%;
  margin: 20px 0px;
  border-radius: 5px;
  padding-left: 20px;
  border: none;

  :focus {
    color: white;
    outline: none;
  }
  ${M.mediaL} {
    height: 35px;
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
    margin: 40px 0px;
    width: 50%;
    height: 35px;
    margin-bottom: 80px;
    font-size: 15px;
  }
`;
export const signUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  width: 50%;
  ${M.mediaL} {
    margin-top: 40px;
    width: 80%;
    flex-direction: column;
  }
`;
export const span = styled.span``;
export const signUp = styled.a`
  color: white;
  :hover {
    cursor: pointer;
  }
  ${M.mediaL} {
    display: flex;
    justify-content: center;
  }
`;
