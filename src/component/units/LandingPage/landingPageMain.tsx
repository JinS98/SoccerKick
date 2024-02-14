import styled from "@emotion/styled";

import LandingPageA from "./landingPageA";

export default function LandingPageMain() {
  return (
    <Wrapper>
      <LandingPageA />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;
