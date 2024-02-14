import styled from "@emotion/styled";
import { withStyles } from "@material-ui/core";

export const Back = styled.div`
  /* background-image: url(https://static.pexels.com/photos/399187/pexels-photo-399187.jpeg);
  background-repeat: no-repeat;
  background-position: center; */
  background-color: black;
  background-size: 100%;
  padding-top: 30px;
  font-family: "GongGothicMedium";
`;

export const Background = styled.div`
  width: 100%;
  margin: 40px auto;
`;

export const thumbnail = styled.img`
  background-color: red;
`;
export const RctTitle = styled.div``;
export const RctWriter = styled.div``;
export const NavBar = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const Icon = styled.div`
  margin: 15px;
  margin-bottom: 0px;
`;
export const Input = styled.input`
  background-color: #f2f2f2;
  width: 700px;
  height: 52px;
  border: none;

  :focus {
    outline: none;
  }
`;
export const SearchBtn = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;

  :hover {
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  border-bottom: 2px solid black;
  margin: 0px 50px;

  /* width: 1200px;
    margin: 100px; */
`;
export const HeadWrapper = styled.div`
  color: white;
  padding: 10px 0 14px 0;
  font-size: 35px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid darkgrey;
`;
export const Id = styled.div`
  width: 20%;
  text-align: center;
`;
export const TItle = styled.div`
  width: 30%;
  text-align: center;
`;
export const Writer = styled.div`
  width: 20%;
  text-align: center;
`;
export const Date = styled.div`
  width: 20%;
  text-align: center;
`;
export const BoardsWrapper = styled.div`
  background-color: #222222;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 15px 0;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    outline: 1px solid darkgrey;
    outline-offset: -1px;
    transition: outline 0.3s linear;
  }
`;
export const Item = styled.div`
  font-size: 23px;
  font-weight: 600;
  padding: 14px 0;
  width: 20%;
  text-align: center;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ItemTitle = styled.div`
  color: white;
  font-size: 23px;
  font-weight: 600;
  padding: 14px 0;
  width: 30%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  margin: 0px 50px;
`;
export const NewBoard = styled.button`
  background-color: #222222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 171px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 10px;
  margin-top: 40px;
  border: none;

  :hover {
    cursor: pointer;
    border: 1px solid darkgrey;
    transition: border 0.3s linear;
  }
`;
export const Icon2 = styled.span`
  color: white;
  line-height: 12px;
  margin-left: 11px;
`;

export const PageWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
