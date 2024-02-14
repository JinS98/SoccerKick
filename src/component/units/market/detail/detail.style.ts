import styled from "@emotion/styled";
import { Modal } from "antd";
import * as M from "../../../../commons/styles/mediaQueries";

export const Back = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url(/background.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: -160px;
  font-family: "GongGothicMedium";
`;

export const Background = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 80%;
  background-color: #222222;
  color: white;
  padding: 80px 100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 50px;
  border-radius: 100px;
  ${M.mediaL} {
    padding: 40px 80px;
  }
`;
export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  ${M.mediaL} {
    font-size: 20px;
  }
`;
export const Icon = styled.img`
  height: 46px;
  width: 46px;
  margin-right: 16.67px;
`;
export const Name_Date = styled.div`
  display: flex;
  flex-direction: column;
  ${M.mediaL} {
    width: 30%;
  }
`;
export const seller = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  ${M.mediaL} {
    font-size: 20px;
  }
`;
export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
export const IconWrapper = styled.div`
  display: flex;
  margin-left: 720.67px;
  ${M.mediaL} {
    margin-left: 150px;
  }
`;
export const Icon2 = styled.div`
  height: 13.33px;
  width: 26.66px;
  margin-top: 23.33px;
  margin-right: 29.33px;
  text-align: right;
`;
export const Icon3 = styled.div`
  width: 18.66px;
  height: 26.66px;
  margin-top: 16.66px;
  text-align: right;
`;
export const Main = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const Main_left = styled.div`
  width: 50%;
`;
export const Main_right = styled.div`
  padding: 30px 0px;
  width: 45%;
`;
export const NameWrapper = styled.div`
  display: flex;

  width: 100%;
`;
export const Name = styled.div`
  margin-bottom: 10px;
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  line-height: 53px;
  display: flex;
  ${M.mediaL} {
    font-size: 16px;
  }
`;
export const Img_Box = styled.div`
  margin: 0px auto;
  width: 90%;
  height: 400px;
  border: 1px solid red;
`;
export const Img = styled.img`
  margin: 20px auto;
  display: block;
  width: 400px;
`;
export const remarks = styled.div`
  color: #dcdcdc;
  width: 100%;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  ${M.mediaL} {
    font-size: 13px;
  }
`;
export const Contents = styled.div`
  padding-top: 20px;
  text-align: left;
  font-size: 20px;
  width: 100%;
  ${M.mediaL} {
    font-size: 16px;
  }
`;
export const Price = styled.div`
  padding-top: 120px;
  font-size: 30px;
  height: 100%;
  text-align: end;
`;

export const Footer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 101px;
  margin-bottom: 40px;
`;
export const FooterMenu = styled.div`
  width: 100%;
  height: 132px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const FooterMenuBox = styled.button`
  color: white;
  background-color: #222222;
  border: none;
  height: 45px;
  width: 179px;
  padding: 14px auto;
  line-height: 46px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin: 0px 12px;
  border-radius: 20px;
  :hover {
    position: static;
    color: white;
    cursor: pointer;
    border: 1px solid darkgrey;
    transition: 0.3s linear;
  }
`;

export const Icon5 = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 21px;
`;

export const Icon6 = styled.img`
  width: 18px;
  height: 18px;
  margin: 15px 16px 0px 910px;
`;
export const Icon7 = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 15px;
`;

export const Iframe = styled.iframe`
  width: 500px;
  height: 300px;
`;
export const PasswordModal = styled(Modal)``;
export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const TagItem = styled.div`
  border: 1px solid #e8e8e8;
  margin: 5px;
  padding: 5px;
  color: #e8e8e8;
`;
export const Text = styled.span`
  ${M.mediaL} {
    font-size: 10px;
  }
`;

export const image_a = styled.a`
  height: 100px;
  width: 100px;
  overflow: hidden;
`;
export const bigImgBox = styled.div`
  width: 100px;
  height: 90%;
  overflow: hidden;

  display: flex;
`;
export const Div = styled.div`
  display: flex;
`;
export const bigImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Small_img = styled.img``;
export const wrapper_a = styled.span`
  border: 1px solid red;
  background-color: white;
  width: 100%;
  height: 100px;
`;
export const Map = styled.div`
  border-radius: 20px;
`;
export const PickWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const PickIcon = styled.img`
  height: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const PickCount = styled.span`
  margin-left: 5px;
  color: white;
  font-size: 20px;
`;
export const PayWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 50px;
`;
export const PayBtn = styled.button`
  border: 2px solid darkgrey;
  border-radius: 20px;
  background-color: #222222;
  width: 300px;
  height: 60px;
  :hover {
    position: static;
    color: white;
    cursor: pointer;
    border: 2px solid white;
    transition: 0.3s linear;
  }
`;
