import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.LoginContainer>
      
      {/* background */}
      <S.BackgroundBox />

      {/* login box */}
      <S.LoginBox>
        
        {/* logo */}
        <S.Logo>blue cotton</S.Logo>
        
        {/* input */}
        <S.Input type="text" placeholder="이메일을 작성해주세요" name="memberEmail" />
        <S.Input type="password" placeholder="비밀번호를 작성해주세요" name="memberPassword" />
        
        {/* login button */}
        <S.LoginButton to="/main/som/all">로그인하기</S.LoginButton>

        <S.Divider />

        {/* social login */}
        <S.SocialButtons>
          {/* kakao */}
          <S.SocialButton to="/kakao-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/kakao.png`}
              alt="kakao"
            />
            카카오로 로그인
          </S.SocialButton>

          {/* google */}          
          <S.SocialButton to="/google-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/google.png`}
              alt="google"
            />
            구글로 로그인
          </S.SocialButton>
          
          {/* naver */}          
          <S.SocialButton to="/naver-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/naver.png`}
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
