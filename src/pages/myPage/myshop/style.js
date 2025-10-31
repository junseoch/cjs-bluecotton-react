import styled from 'styled-components';

export const ContentTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 12px;
`;

export const ContentSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 32px;
`;

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;
`;

export const Tab = styled.button`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${props => props.active ? props.theme.PALLETE.primary.main : props.theme.PALLETE.white};
  color: ${props => props.active ? props.theme.PALLETE.white : props.theme.PALLETE.basic};
  box-shadow: ${props => props.active ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.PALLETE.primary.main : props.theme.PALLETE.grey.greyScale0};
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
  background-color: ${props => props.active ? props.theme.PALLETE.primary.main : props.theme.PALLETE.grey.greyScale0};
  color: ${props => props.active ? props.theme.PALLETE.white : props.theme.PALLETE.basic};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.PALLETE.primary.main : props.theme.PALLETE.grey.greyScale1};
  }
`;

export const ListHeader = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 16px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.PALLETE.grey.greyScale0};
  }
`;

export const ItemType = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.PALLETE.primary.main};
  font-weight: 600;
  margin-right: 8px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.PALLETE.basic};
  margin: 8px 0;
`;

export const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
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
    color: ${props => props.disabled ? '#BDBDBD' : '${({ theme }) => theme.PALLETE.primary.main}'};
  }
`;

export const PageNumber = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.PALLETE.primary.main};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.PALLETE.white};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  padding-top: 100%;
  background-color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  position: relative;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #FF6B6B;
  z-index: 10;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.PALLETE.basic};
  margin-bottom: 4px;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.PALLETE.primary.main};
`;

export const Label = styled.span`
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 4px;
  background-color: ${props => props.type === 'BEST' ? '#FF6B6B' : '${({ theme }) => theme.PALLETE.primary.main}'};
  color: white;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
  margin-top: 4px;
`;

export const Stars = styled.span`
  color: #FFD700;
`;

export const Likes = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.PALLETE.grey.greyScale4};
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const SelectAll = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  gap: 16px;
`;

export const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #E0E0E0;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 36px;
  border: 1px solid #E0E0E0;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 8px;
  padding: 0 8px;
`;

export const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    color: #333;
  }
  
  &:disabled {
    color: #BDBDBD;
    cursor: not-allowed;
  }
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const PriceInfo = styled.div`
  text-align: right;
`;

export const PriceRow = styled.div`
  font-size: 14px;
  color: #757575;
  margin-bottom: 4px;
`;

export const PriceValue = styled.span`
  margin-left: 8px;
  font-weight: 600;
  color: #111111;
`;

export const OrderSummary = styled.div`
  background-color: #F9F9F9;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    font-size: 18px;
    font-weight: 700;
    color: #0051FF;
    margin-bottom: 0;
  }
`;

export const OrderButton = styled.button`
  width: 100%;
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

export const DeliveryItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: #E0E0E0;
  margin-right: 16px;
`;

export const ActionButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: ${props => props.primary ? 'none' : '1px solid #E0E0E0'};
  background-color: ${props => props.primary ? '#0051FF' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#111111'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.primary ? '#003DB8' : '#F5F5F5'};
  }
`;

export const OrderItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #E0E0E0;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OrderProductName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const PurchaseDate = styled.div`
  font-size: 14px;
  color: #757575;
`;

export const OrderActionButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #0051FF;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #003BBF;
  }
`;

export const ReviewProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewStars = styled.span`
  color: #FFD700;
  font-size: 20px;
`;

export const ReviewDate = styled.div`
  font-size: 14px;
  color: #757575;
  margin-top: 4px;
`;

export const ReviewText = styled.div`
  font-size: 16px;
  color: #111111;
  margin-top: 8px;
`;

export const ReviewActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${props => props.primary ? '#0051FF' : '#E0E0E0'};
  background-color: ${props => props.primary ? '#0051FF' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#111111'};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.primary ? '#003DB8' : '#F5F5F5'};
    border-color: ${props => props.primary ? '#003DB8' : '#E0E0E0'};
  }
`;

