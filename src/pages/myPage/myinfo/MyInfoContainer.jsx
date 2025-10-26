import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #111111;
  margin-bottom: 40px;
`;

const FormSection = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #111111;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0051FF;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const PrimaryButton = styled.button`
  padding: 8px 16px;
  background-color: #0051FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #003BBF;
  }
`;

const DateRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0051FF;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  border: 2px dashed #E0E0E0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F9F9F9;
  margin-bottom: 16px;
`;

const FileInput = styled.input`
  margin-bottom: 8px;
`;

const FileInfo = styled.div`
  font-size: 14px;
  color: #757575;
  margin-bottom: 8px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
`;

const SubmitButton = styled.button`
  flex: 1;
  padding: 16px;
  background-color: #0051FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    background-color: #003BBF;
  }
`;

const DeleteButton = styled(SubmitButton)`
  background-color: #FF6B6B;
  
  &:hover {
    background-color: #FF5252;
  }
`;

const MyInfoContainer = () => {
  const [formData, setFormData] = useState({
    email: 'garlemy@naver.com',
    nickname: '브로콜리',
    phone: '010-8795-4379',
    birthYear: '2000',
    birthMonth: '10',
    birthDay: '21',
    gender: 'male',
    postcode: '08457',
    address1: '서울 관악구 인헌12나길 26',
    address2: '301호'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <FormContainer>
      <Title>회원 정보를 수정하시겠어요?</Title>
      <Subtitle>회원 정보 수정 후 확인 버튼을 눌러주세요!</Subtitle>

      <form onSubmit={handleSubmit}>
        <FormSection>
          <Label>ID (이메일)</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </FormSection>

        <FormSection>
          <Label>닉네임</Label>
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </FormSection>

        <FormSection>
          <Label>휴대전화</Label>
          <ButtonGroup>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
            <PrimaryButton type="button">전화번호 찾기</PrimaryButton>
          </ButtonGroup>
        </FormSection>

        <FormSection>
          <Label>생년월일</Label>
          <DateRow>
            <Select name="birthYear" value={formData.birthYear} onChange={handleChange}>
              {Array.from({ length: 100 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}년</option>
              ))}
            </Select>
            <Select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                <option key={month} value={month.toString().padStart(2, '0')}>{month}월</option>
              ))}
            </Select>
            <Select name="birthDay" value={formData.birthDay} onChange={handleChange}>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day.toString().padStart(2, '0')}>{day}일</option>
              ))}
            </Select>
          </DateRow>
        </FormSection>

        <FormSection>
          <Label>성별</Label>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              남성
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              여성
            </RadioLabel>
          </RadioGroup>
        </FormSection>

        <FormSection>
          <Label>주소</Label>
          <div style={{ marginBottom: '8px' }}>
            <ButtonGroup>
              <Input
                type="text"
                name="postcode"
                value={formData.postcode}
                readOnly
                style={{ flex: 1 }}
              />
              <PrimaryButton type="button">우편번호 찾기</PrimaryButton>
            </ButtonGroup>
          </div>
          <Input
            type="text"
            name="address1"
            value={formData.address1}
            readOnly
            style={{ marginBottom: '8px' }}
          />
          <Input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </FormSection>

        <FormSection>
          <Label>프로필 이미지 설정</Label>
          <ImagePreview>
            첨부
          </ImagePreview>
          <FileInput type="file" accept="image/*" />
          <FileInfo>선택된 파일 없음</FileInfo>
          <FileInfo>용량이 50.0M 이하 파일만 업로드 가능</FileInfo>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <button type="button" style={{ color: '#0051FF', border: 'none', background: 'none', cursor: 'pointer' }}>+ 파일 추가</button>
            <button type="button" style={{ color: '#FF6B6B', border: 'none', background: 'none', cursor: 'pointer' }}>- 파일 삭제</button>
          </div>
          <PrimaryButton type="button" style={{ float: 'right' }}>저장</PrimaryButton>
        </FormSection>

        <ActionButtons>
          <SubmitButton type="submit">수정완료</SubmitButton>
          <DeleteButton type="button">회원 탈퇴</DeleteButton>
        </ActionButtons>
      </form>
    </FormContainer>
  );
};

export default MyInfoContainer;
