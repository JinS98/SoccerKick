import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/library/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const useAuth = () => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 로그인 체크
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다!!!");
  //     void router.push("/log_in");
  //   }
  // });
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!!");
        void router.push("/log_in");
      }
    });
  });
};
