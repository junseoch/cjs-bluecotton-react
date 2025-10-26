import styled from 'styled-components';

export const ContentTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 12px;
`;

export const ContentSubtitle = styled.p`
  font-size: 18px;
  color: #111111;
  margin-bottom: 32px;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

export const Tab = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: ${props => props.active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.active ? '#0051FF' : '#fff'};
  color: ${props => props.active ? '#fff' : '#111111'};
  box-shadow: ${props => props.active ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    background-color: ${props => props.active ? '#0051FF' : '#F9F9F9'};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: ${props => props.active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.active ? '#0051FF' : '#F9F9F9'};
  color: ${props => props.active ? '#fff' : '#111111'};
  
  &:hover {
    background-color: ${props => props.active ? '#0051FF' : '#E0E0E0'};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #F9F9F9;
  }
`;

export const ItemType = styled.span`
  font-size: 14px;
  color: #0051FF;
  font-weight: 600;
  margin-right: 8px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin: 8px 0;
`;

export const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #757575;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  font-size: 16px;
`;

export const PageButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.disabled ? '#BDBDBD' : '#111111'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  
  &:hover {
    color: ${props => props.disabled ? '#BDBDBD' : '#0051FF'};
  }
`;

export const PageNumber = styled.span`
  font-weight: 700;
  color: #0051FF;
`;

