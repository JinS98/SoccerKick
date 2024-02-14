import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import BoardWrite2 from "../../../src/component/units/board/write/BoardWrite.container";

export default function boardPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  //자바스크립트

  return <BoardWrite2 />;
}
