import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [gender, setGender] = useState("");

  return (
    <S.SignUpContainer>
      {/* background */}
      <S.BackgroundBox />

      {/* sign-up box */}
      <S.SignUpBox>
        {/* logo */}
        <S.Logo>blue cotton</S.Logo>

        {/* input */}
        <S.Input type="text" placeholder="이름을 작성해주세요" name="memberName" />
        <S.Input type="text" placeholder="닉네임을 작성해주세요" name="memberNickName" />
        <S.Input type="text" placeholder="이메일을 작성해주세요" name="memberEmail" />
        <S.Input type="password" placeholder="비밀번호를 작성해주세요" name="memberPassword" />
        <S.Input type="password" placeholder="비밀번호 확인" name="memberPasswordCheck" />

        {/* address */}
        <S.AddressBox>
          <S.AddressInput placeholder="주소 검색" />
          <S.SmallButton>검색</S.SmallButton>
        </S.AddressBox>

        {/* gender */}
        <S.GenderSelectBox>
          <S.GenderOption
            selected={gender === "남"}
            onClick={() => setGender("남")}
          >
            남
          </S.GenderOption>
          <S.GenderOption
            selected={gender === "여"}
            onClick={() => setGender("여")}
          >
            여
          </S.GenderOption>
        </S.GenderSelectBox>

        {/* birth */}
        <S.DateInputBox>
          <S.DateInput />
          <S.SmallButton>확인</S.SmallButton>
        </S.DateInputBox>

        {/* sign-up button */}
        <S.SignUpButton to="/login">회원가입 완료</S.SignUpButton>

        {/* divider */}
        <S.Divider />

        {/* social login */}
        <S.SocialButtons>
          <S.SocialButton to="/kakao-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/kakao.png`}
              alt="kakao"
            />
            카카오로 회원가입
          </S.SocialButton>

          <S.SocialButton to="/google-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/google.png`}
              alt="google"
            />
            구글로 회원가입
          </S.SocialButton>

          <S.SocialButton to="/naver-login">
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/naver.png`}
              alt="naver"
            />
            네이버로 회원가입
          </S.SocialButton>
        </S.SocialButtons>

        {/* login */}
        <S.LoginText>
          계정이 있으신가요?{" "}
          <Link to="/login">로그인하러 가기</Link>
        </S.LoginText>
      </S.SignUpBox>
    </S.SignUpContainer>
  );
};

export default SignUp;
