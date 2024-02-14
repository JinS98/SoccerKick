import styled from "@emotion/styled";
import { Modal } from "antd";
import * as M from "../../../../commons/styles/mediaQueries";
import exp from "constants";

export const Back = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  background-image: url(/background.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: -130px;
  font-family: "GongGothicMedium";
`;

export const Background = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${M.mediaL} {
    width: 90%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  background-color: #222222;
  color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 50px;
  border-radius: 100px;
  padding: 0 100px;
`;
export const Header = styled.div`
  margin-top: 80px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
export const writer_icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Icon = styled.img`
  height: 46px;
  width: 46px;
  margin-right: 16.67px;
`;
export const Name_Date = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
`;
export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
export const IconWrapper = styled.div`
  display: flex;
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
  margin-top: 80px;
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
`;
export const Img_Box = styled.div`
  width: 996px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Img = styled.img`
  margin: 20px auto;
  display: block;
  width: 400px;
`;
export const ContentBox = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 100px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
export const VideoBox = styled.div`
  justify-content: center;
`;
export const Like_DisLike = styled.div``;
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  justify-content: space-between;
  margin-bottom: 70px;
`;
export const LikeBox = styled.div`
  text-align: center;
`;
export const LikeCOunt = styled.div`
  color: #ffd600;
`;
export const DisLikeBox = styled.div`
  text-align: center;
`;
export const DisLikeCount = styled.div``;
export const Like = styled.div`
  height: 25px;

  :hover {
    cursor: pointer;
  }
`;
export const DisLike = styled.div`
  :hover {
    cursor: pointer;
  }
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
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
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  line-height: 10px;
  margin: 0px 12px;
  border-radius: 20px;
  :hover {
    cursor: pointer;
    border: 1px solid darkgrey;
    transition: 0.3s linear;
  }
`;
export const CommentWrite = styled.div`
  width: 100%;
  margin-bottom: 1px solid #bdbdbd;
`;
export const CmtTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Icon4 = styled.div`
  margin-top: 5px;
  margin-right: 14px;
`;
export const CmtTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  margin-bottom: 40px;
`;
export const Writer_Password_Star = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;
export const StarBox = styled.div`
  display: flex;
`;
export const Star = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-right: 4px;
`;
export const CommentBoxWrapper = styled.div`
  width: 1200px;
  margin-bottom: 46px;
`;
export const CommentBox = styled.input`
  width: 1200px;
  height: 108px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #bdbdbd;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
`;
export const EnrollLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`;
export const StrCount = styled.div`
  padding-left: 20px;
  height: 52px;
  padding-top: 14px;
`;
export const EnrollBtn = styled.div`
  width: 91px;
  height: 52px;
  color: white;
  background-color: black;
  text-align: center;
  padding-top: 14px;
`;
export const Comment = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 5px;
  display: flex;
`;
export const CmtMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WriterLine = styled.div`
  display: flex;
`;
export const Icon5 = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 21px;
`;
export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 15px 18px 0px 16px;
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
export const Cmt = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
`;
export const CmtDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #bdbdbd;
  margin: 20px 0px 20px 16px;
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
