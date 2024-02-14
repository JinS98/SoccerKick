import * as S from "./header.style";

export default function HeaderUI() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.Logo href="/boards/">
            <img src="/header/Logo.png" />
          </S.Logo>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.InnerButton>로그인</S.InnerButton>
          <S.InnerButton>회원가입</S.InnerButton>
        </S.RightWrapper>
      </S.Wrapper>
      <S.Date>FIFA WORLDCUP 11.21-12.19</S.Date>
    </S.Header>
  );
}
