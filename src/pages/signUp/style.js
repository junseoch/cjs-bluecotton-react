import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  flexCenterColumn,
  headerLogo,
  smallText3Light,
  smallText3Regular,
  white,
} from "../../styles/common";

// 전체 컨테이너
export const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.PALLETE.white};
  overflow: hidden;
`;

// 왼쪽 배경
export const BackgroundBox = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/login_image.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

// 오른쪽 폼 영역
export const SignUpBox = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALLETE.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
`;

// 로고
export const Logo = styled.h1`
  ${headerLogo};
  margin-bottom: 8px;
`;

// form 전체 (공통 간격 적용)
export const Form = styled.form`
  ${flexCenterColumn};
  gap: 16px; /* ✅ 이름~생년월일까지 간격 완전 동일 */
`;

// 기본 인풋
export const Input = styled.input`
  width: 320px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
  padding: 0 10px;
  ${smallText3Light};
  color: ${({ theme }) => theme.PALLETE.basic};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  ${({ isError, theme }) =>
    isError &&
    `
      border-color: ${theme.PALLETE.warning};
    `}
`;

// 에러 메시지
export const ErrorMessage = styled.p`
  width: 320px;
  ${smallText3Light};
  color: ${({ theme }) => theme.PALLETE.warning};
  margin: -10px 0 0 0; /* ✅ 에러 문구가 공간 차지하지 않게 */
  text-align: left;
  line-height: 16px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

// 주소 입력
export const AddressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 40px;
  gap: 10px;

  input {
    flex: 1;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
    border-radius: 4px;
    padding: 0 10px;
    ${smallText3Light};
    color: ${({ theme }) => theme.PALLETE.basic};
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }
`;

export const AddressButton = styled.button`
  width: 80px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  ${smallText3Regular};
  ${white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.dark};
  }
`;

// 성별 선택
export const GenderBox = styled.div`
  width: 320px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  ${smallText3Light};
  color: ${({ theme }) => theme.PALLETE.basic};
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
  }

  p {
    margin: 0;
    flex-shrink: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }

  input[type="radio"] {
    width: 14px;
    height: 14px;
    accent-color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

// 생년월일
export const BirthBox = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 40px;
  gap: 10px;

  input {
    flex: 1;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
    border-radius: 4px;
    padding: 0 10px;
    ${smallText3Light};
    color: ${({ theme }) => theme.PALLETE.basic};
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.PALLETE.primary.main};
    }
  }
`;

export const CheckButton = styled.button`
  width: 70px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  ${smallText3Regular};
  ${white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.dark};
  }
`;

// 가입 버튼
export const SubmitButton = styled.button`
  width: 320px;
  height: 40px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.PALLETE.primary.main};
  ${smallText3Regular};
  ${white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.primary.dark};
  }
`;

// 구분선
export const Divider = styled.div`
  width: 320px;
  height: 1px;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  position: relative;
  margin: 20px 0;

  &::after {
    content: "또는";
    position: absolute;
    ${smallText3Light};
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.PALLETE.white};
    padding: 0 6px;
    color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  }
`;

// 소셜 로그인 버튼
export const SocialButtons = styled.div`
  ${flexCenterColumn};
  gap: 8px;
  width: 320px;
`;

export const SocialButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  ${smallText3Light};
  color: ${({ theme }) => theme.PALLETE.grey.greyScale3};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.PALLETE.primary.main};
  }
`;

export const LoginText = styled.p`
  ${smallText3Light};
  margin-top: 4px;

  a {
    ${smallText3Light};
    color: ${({ theme }) => theme.PALLETE.primary.main};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.PALLETE.primary.dark};
    }
  }
`;
