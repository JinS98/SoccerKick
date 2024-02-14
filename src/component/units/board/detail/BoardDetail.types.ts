export interface BoarDetailUI2props {
  data: any;
  onClickMove: () => void;
  onClickMoveList: () => void;
  onClickDeleteBtn: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  LastUrl: string;
  onToggleModal: () => void;
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
