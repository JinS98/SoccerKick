import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  data?: any;
}

export interface IUpdateBoardInput {
  images?: string[];
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
export interface BoardAddressInput {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IBoardWriteUI2Props {
  Writer: string;
  OnWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  OnPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnContent: (event: ChangeEvent<HTMLInputElement>) => void;
  OnTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  OnPost: (event: ChangeEvent<HTMLInputElement>) => void;
  onYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  OnZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleModal: () => void;
  EnrollBtn: () => void;
  WriterError: string;
  PasswordError: string;
  MyTitleError: string;
  ContentError: string;
  PostError: string;
  youtubeUrl: string;
  isActive: boolean;
  isEdit: boolean;
  EditBtn: () => void;
  data: any;
  handleComplete: any;
  isOpen: boolean;
  zipCode: string;
  OnAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  OnAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  addressDetail: string;
  Password: string;
}

export interface IInput1 {
  isEdit: boolean;
}

export interface IButton {
  isActive: boolean;
}
