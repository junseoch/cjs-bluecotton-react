import styled from "styled-components";
import theme from '../../styles/common';

const S = {};

S.Container = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
  background-color: ${({theme}) => theme.PALLETE.white};)};
`;

S.BennerImageArea = styled.div`
  display: flex;
  width: 100%;
`

S.BennerImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export default S;