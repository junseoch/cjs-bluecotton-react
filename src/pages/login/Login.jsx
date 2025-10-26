import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.LoginContainer>
      
      {/* background */}
      <S.BackgroundBox />

      {/* login container */}
      <S.LoginBox>
        
        {/* logo */}
        <S.Logo>blue cotton</S.Logo>
        
        {/* input */}
        <S.Input type="text" placeholder="이메일" name="memberEmail" />
        <S.Input type="password" placeholder="비밀번호" name="memberPassword" />
        
        {/* login button */}
        <S.LoginButton to="/main/som/all">로그인하기</S.LoginButton>

        <S.Divider />

        {/* social login */}
        <S.SocialButtons>
          <S.SocialButton to="/kakao-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/kakao.png`}
              alt="kakao"
            />
            카카오로 로그인
          </S.SocialButton>
          <S.SocialButton to="/google-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/google.png`}
              alt="google"
            />
            구글로 로그인
          </S.SocialButton>
          <S.SocialButton to="/naver-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/naver.png`}
              alt="naver"
            />
            네이버로 로그인
          </S.SocialButton>
        </S.SocialButtons>

        {/* find id/psw */}
        <S.FindInfoBox>
          <Link to="/find-password">비밀번호를 잊으셨나요?</Link>
          <Link to="/find-id">ID를 잊으셨나요?</Link>
        </S.FindInfoBox>

        {/* sign-up */}
        <S.SignUpText>
          계정이 없으신가요?{" "}
          <Link to="/sign-up">회원가입하러 가기</Link>
        </S.SignUpText>
      </S.LoginBox>
    </S.LoginContainer>
  );
};

export default Login;
