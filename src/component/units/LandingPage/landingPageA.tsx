import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

export default function LandingPageA() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <S.MainTextBox>
          <S.Title>SoccerKick</S.Title>
          <S.contents>대한민국 No.1 축구 커뮤니티</S.contents>
          <S.Enter onClick={() => router.push("/highlights")}>시작하기</S.Enter>
        </S.MainTextBox>
      </S.Container>
    </S.Wrapper>
  );
}
