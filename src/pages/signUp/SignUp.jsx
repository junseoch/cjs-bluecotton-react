import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./style";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onBlur" }); // ✅ blur 시점 검사로 변경

  const handleSubmitForm = handleSubmit(async (data) => {
    console.log(data);
    // API 연동 시 여기에 fetch 추가
  });

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <S.SignUpContainer>
      <S.BackgroundBox />

      <S.SignUpBox>
        <S.Logo>blue cotton</S.Logo>

        <form onSubmit={handleSubmitForm}>
          {/* 이름 */}
          <S.Input
            type="text"
            placeholder="이름"
            {...register("memberName", { required: "이름을 입력해주세요." })}
          />
          <S.ErrorMessage show={!!errors.memberName}>
            {errors.memberName?.message}
          </S.ErrorMessage>

          {/* 닉네임 */}
          <S.Input
            type="text"
            placeholder="닉네임"
            {...register("memberNickname", {
              required: "닉네임을 입력해주세요.",
            })}
          />
          <S.ErrorMessage show={!!errors.memberNickname}>
            {errors.memberNickname?.message}
          </S.ErrorMessage>

          {/* 이메일 */}
          <S.Input
            type="text"
            placeholder="이메일"
            {...register("memberEmail", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: emailRegex,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
          />
          <S.ErrorMessage show={!!errors.memberEmail}>
            {errors.memberEmail?.message}
          </S.ErrorMessage>

          {/* 비밀번호 */}
          <S.Input
            type="password"
            placeholder="비밀번호"
            {...register("memberPassword", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: passwordRegex,
                message:
                  "소문자, 숫자, 특수문자(@#)를 포함한 8자리 이상이어야 합니다.",
              },
            })}
          />
          <S.ErrorMessage show={!!errors.memberPassword}>
            {errors.memberPassword?.message}
          </S.ErrorMessage>

          {/* 비밀번호 확인 */}
          <S.Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("memberPasswordConfirm", {
              required: "비밀번호 확인을 입력해주세요.",
              validate: {
                matchPassword: (v) =>
                  v === getValues("memberPassword") ||
                  "비밀번호가 일치하지 않습니다.",
              },
            })}
          />
          <S.ErrorMessage show={!!errors.memberPasswordConfirm}>
            {errors.memberPasswordConfirm?.message}
          </S.ErrorMessage>

          {/* 주소 */}
          <S.AddressBox>
            <S.Input
              type="text"
              placeholder="주소 검색"
              {...register("memberAddress")}
            />
            <S.AddressButton type="button">검색</S.AddressButton>
          </S.AddressBox>

          {/* 성별 */}
          <S.GenderBox>
            <p>성별을 체크해주세요</p>
            <div>
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register("gender")}
                />
                남
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  {...register("gender")}
                />
                여
              </label>
            </div>
          </S.GenderBox>

          {/* 생년월일 */}
          <S.BirthBox>
            <S.Input type="date" {...register("birth")} />
            <S.CheckButton type="button">확인</S.CheckButton>
          </S.BirthBox>

          {/* 가입 버튼 */}
          <S.SubmitButton disabled={isSubmitting}>가입</S.SubmitButton>
        </form>

        <S.Divider />

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

        <S.LoginText>
          계정이 있으신가요?{" "}
          <Link to="/login">로그인하기</Link>
        </S.LoginText>
      </S.SignUpBox>
    </S.SignUpContainer>
  );
};

export default SignUp;
