import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #111111;
  margin-bottom: 40px;
`;

export const FormSection = styled.div`
  margin-bottom: 32px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #111111;
  margin-bottom: 8px;
`;

export const Input = styled.input`
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const PrimaryButton = styled.button`
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

export const DateRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0051FF;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
`;

export const ImagePreview = styled.div`
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

export const FileInput = styled.input`
  margin-bottom: 8px;
`;

export const FileInfo = styled.div`
  font-size: 14px;
  color: #757575;
  margin-bottom: 8px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
`;

export const SubmitButton = styled.button`
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

export const DeleteButton = styled(SubmitButton)`
  background-color: #FF6B6B;
  
  &:hover {
    background-color: #FF5252;
  }
`;

