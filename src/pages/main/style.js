import styled from "styled-components";
import { white } from '../../styles/common';

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
  background-color: ${white};
`;

S.BennerImageArea = styled.div`
  display: flex;
  width: 80%;
`

S.BennerImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export default S;