import React from 'react';
import {
  ContentTitle,
  ContentSubtitle
} from '../style';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

const SummaryCard = styled.div`
  flex: 1;
  padding: 24px;
  background-color: #F9F9F9;
  border-radius: 8px;
  text-align: center;
`;

const SummaryLabel = styled.div`
  font-size: 16px;
  color: #757575;
  margin-bottom: 8px;
`;

const SummaryValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #111111;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #F9F9F9;
  border-bottom: 2px solid #E0E0E0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #111111;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #E0E0E0;
  font-size: 14px;
  color: #111111;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #F9F9F9;
  }
`;

const MySomCandyContainer = () => {
  return (
    <div>
      <ContentTitle>캔디 현황이 궁금하세요?</ContentTitle>
      <ContentSubtitle>캔디 현황을 확인할 수 있어요.</ContentSubtitle>
      
      <SummaryContainer>
        <SummaryCard>
          <SummaryLabel>적립 캔디솜</SummaryLabel>
          <SummaryValue>2,500 솜</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>사용 캔디솜</SummaryLabel>
          <SummaryValue>0 솜</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>잔여 캔디솜</SummaryLabel>
          <SummaryValue>2,500 솜</SummaryValue>
        </SummaryCard>
      </SummaryContainer>

      <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
        캔디솜 사용 내역
      </div>

      <Table>
        <thead>
          <tr>
            <TableHeader>구분</TableHeader>
            <TableHeader>날짜</TableHeader>
            <TableHeader>캔디</TableHeader>
            <TableHeader>솜</TableHeader>
            <TableHeader>내역</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>적립</TableCell>
            <TableCell>2025.09.19</TableCell>
            <TableCell>+100</TableCell>
            <TableCell>솔로</TableCell>
            <TableCell>2km 런닝 뛰기 챌린지!! 인증 (+100 캔디)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>적립</TableCell>
            <TableCell>2025.09.19</TableCell>
            <TableCell>+500</TableCell>
            <TableCell>파티</TableCell>
            <TableCell>다같이 플로깅!!! 인증 (+500 캔디)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>적립</TableCell>
            <TableCell>2025.09.19</TableCell>
            <TableCell>+500</TableCell>
            <TableCell>파티</TableCell>
            <TableCell>스터디그룹 코딩!!! 인증 (+500 캔디)</TableCell>
          </TableRow>
        </tbody>
      </Table>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '40px', fontSize: '16px' }}>
        <button style={{ border: 'none', background: 'none', color: '#BDBDBD', cursor: 'not-allowed' }}>
          &lt; 이전
        </button>
        <span style={{ fontWeight: '700', color: '#0051FF' }}>1</span>
        <button style={{ border: 'none', background: 'none', color: '#111111', cursor: 'pointer' }}>
          다음 &gt;
        </button>
      </div>
    </div>
  );
};

export default MySomCandyContainer;
