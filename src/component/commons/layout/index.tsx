import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutNav from "./nav/nav.container";
import styled from "@emotion/styled";
import TodayItems from "./sideBanner";

const BodyWrapper = styled.div``;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const HIDDEN_LAYOUT = ["/log_in", "/new", "/", "/sign_up", "/edit"];
  const HIDDEN_LAYOUT2 = [
    "/log_in",
    "/new",
    "/",
    "/sign_up",
    "/edit",
    "/myPage",
  ];
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  const isHiddenLayout2 = HIDDEN_LAYOUT2.includes(router.asPath);

  const isHidden3 =
    router.asPath.includes("log_in") ||
    router.asPath.includes("new") ||
    router.asPath.includes("edit") ||
    router.asPath.includes("sign_up") ||
    router.asPath.includes("myPage") ||
    router.asPath.includes("boards") ||
    router.asPath.includes("highlights");

  return (
    <>
      {!isHiddenLayout && <LayoutNav />}
      {!isHiddenLayout2 && <LayoutBanner />}
      {!isHidden3 && <TodayItems />}
      <BodyWrapper>
        <div>{props.children}</div>
      </BodyWrapper>
    </>
  );
}
