import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const ShopContainer = () => {
  return (
    <S.Page>
      <S.Container>
        {/* ===== 배너 ===== */}
        <S.Banner $bg="/assets/images/banner_shop.png">
          <S.BannerTextBox>
            <S.BannerTitle>베스트 아이템</S.BannerTitle>
            <S.BannerDesc>
              지금 많은 사랑을 받고 있는 제품들을 만나보세요!
            </S.BannerDesc>
          </S.BannerTextBox>
        </S.Banner>

        {/* ===== 왼쪽 카테고리 ===== */}
        <S.LeftFilter>
          <S.FilterGroup>
            <S.FilterTitle>카테고리</S.FilterTitle>
            <S.Label>
              <S.Checkbox defaultChecked /> 의류
            </S.Label>
            <S.Label>
              <S.Checkbox /> 키링
            </S.Label>
            <S.Label>
              <S.Checkbox /> 가방
            </S.Label>
            <S.Label>
              <S.Checkbox /> 문구
            </S.Label>
            <S.Label>
              <S.Checkbox /> 리빙
            </S.Label>
            <S.Label>
              <S.Checkbox /> 인형
            </S.Label>
            <S.Label>
              <S.Checkbox /> 디지털
            </S.Label>
            <S.Label>
              <S.Checkbox /> 여행
            </S.Label>
          </S.FilterGroup>

          <S.FilterGroup>
            <S.FilterTitle>상품 타입</S.FilterTitle>
            <S.Label>
              <S.Checkbox defaultChecked /> NEW
            </S.Label>
            <S.Label>
              <S.Checkbox /> BEST
            </S.Label>
          </S.FilterGroup>
        </S.LeftFilter>

        {/* ===== 상품 영역 ===== */}
        <S.ProductArea>
          <S.CardGrid>
            {/* 상품 데이터는 추후 API로 대체 예정 */}
            {[...Array(8)].map((_, i) => (
              <S.Card key={i}>
                <Link to={`/main/shop/read/${i + 1}`}>
                  <S.ThumbWrap $bg={`/assets/images/products/sample_${i + 1}.png`}>
                    <S.LikeButton aria-label="찜하기">
                      <img src="/assets/icons/heart-line.svg" alt="하트" />
                    </S.LikeButton>
                  </S.ThumbWrap>
                </Link>

                <S.TitleRow>
                  <S.ProductName>상품 {i + 1}</S.ProductName>
                  <S.Tag type="new">NEW</S.Tag>
                  <S.Tag type="best">BEST</S.Tag>
                </S.TitleRow>

                <S.Price>10,000캔디</S.Price>

                <S.Meta>
                  <S.IconText>
                    <S.Icon src="/assets/icons/star.svg" alt="별" />
                    <S.Text>4.8(22)</S.Text>
                  </S.IconText>
                  <S.IconText>
                    <S.Icon src="/assets/icons/heart-fill.svg" alt="하트" />
                    <S.Text>255</S.Text>
                  </S.IconText>
                </S.Meta>
              </S.Card>
            ))}
          </S.CardGrid>

          {/* ===== 페이지네이션 ===== */}
          <S.Pagination>
            <button>{"< 이전"}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>{"다음 >"}</button>
          </S.Pagination>
        </S.ProductArea>
      </S.Container>
    </S.Page>
  );
};

export default ShopContainer;
