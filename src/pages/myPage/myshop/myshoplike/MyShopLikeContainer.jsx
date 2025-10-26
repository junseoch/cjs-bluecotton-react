import React from 'react';
import {
  ListHeader,
  ProductGrid,
  ProductCard,
  ProductImage,
  HeartIcon,
  ProductInfo,
  ProductName,
  Label,
  ProductPrice,
  Rating,
  Stars,
  Likes,
  Pagination,
  PageButton,
  PageNumber
} from '../style';

const MyShopLikeContainer = () => {
  const products = [
    { id: 1, name: 'BT인형', labels: ['BEST', 'NEW BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 2, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 3, name: 'BT인형', labels: ['BEST', 'NEW BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 4, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 5, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 6, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 7, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 },
    { id: 8, name: 'BT인형', labels: ['BEST'], price: '14,000캔디', rating: 4.8, reviews: 22, likes: 255 }
  ];

  return (
    <div>
      <ListHeader>찜한상품(8개)</ListHeader>
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage>
              <HeartIcon>♥</HeartIcon>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#E0E0E0' }} />
            </ProductImage>
            <ProductInfo>
              <div style={{ marginBottom: '4px' }}>
                {product.labels.map(label => (
                  <Label key={label} type={label.includes('BEST') ? 'BEST' : 'NEW'}>{label}</Label>
                ))}
              </div>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <Rating>
                <Stars>★★★★★</Stars>
                <span> ({product.reviews})</span>
                <Likes>♥ {product.likes}</Likes>
              </Rating>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      <Pagination>
        <PageButton disabled>&lt; 이전</PageButton>
        <PageNumber>1</PageNumber>
        <PageButton disabled={false}>다음 &gt;</PageButton>
      </Pagination>
    </div>
  );
};

export default MyShopLikeContainer;
