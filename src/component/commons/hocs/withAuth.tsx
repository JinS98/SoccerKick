import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // 로그인 체크

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      void router.push("/log_in");
    }
  });

  return <Component {...props} />;
};
