import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background: #007bff;
      color: white;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
