import React, { useState } from "react";
import S from "./style";
import ShopList from "./ShopList";

const ShopContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("리뷰 많은 순");
  const options = ["신상품순", "리뷰 많은 순", "낮은 가격 순", "높은 가격 순", "판매순"];

  return (
    <S.Page>

      <S.Banner>
        <S.BannerTextBox>
          <S.BannerTitle>신제품</S.BannerTitle>
          <S.BannerDesc>지금 많은 사랑을 받고 있는 제품들을 만나보세요!</S.BannerDesc>
        </S.BannerTextBox>
      </S.Banner>

      <S.Container>
        <S.LeftFilter>
          <S.FilterGroup>
            <S.CatagoryTopBar />
            <S.FilterTitle>카테고리</S.FilterTitle>
            <S.Label><S.Checkbox /> 의류</S.Label>
            <S.Label><S.Checkbox /> 키링</S.Label>
            <S.Label><S.Checkbox /> 가방</S.Label>
            <S.Label><S.Checkbox /> 문구</S.Label>
            <S.Label><S.Checkbox /> 리빙</S.Label>
            <S.Label><S.Checkbox /> 인형</S.Label>
            <S.Label><S.Checkbox /> 디지털</S.Label>
            <S.Label><S.Checkbox /> 여행</S.Label>
          </S.FilterGroup>

          <S.FilterGroup>
            <S.FilterTitle>상품 타입</S.FilterTitle>
            <S.Label><S.Checkbox /> NEW</S.Label>
            <S.Label><S.Checkbox /> BEST</S.Label>
          </S.FilterGroup>

          <S.FilterGroup>
            <S.FilterTitle>구매 타입</S.FilterTitle>
            <S.Label><S.Checkbox /> 캔디</S.Label>
            <S.Label><S.Checkbox /> 일반</S.Label>
          </S.FilterGroup>
        </S.LeftFilter>


        <S.Main>
          <S.SortTopLine />

          <S.SortBar>
            <S.DropdownWrap>
              <S.DropdownButton onClick={() => setIsOpen(p => !p)}>
                {selected}
                <S.ArrowIcon>
                  <img src="/assets/icons/arrow_drop_down.png" alt="드롭다운 아이콘" />
                </S.ArrowIcon>
              </S.DropdownButton>

              {isOpen && (
                <S.DropdownList>
                  {options.map((option) => (
                    <S.DropdownItem
                      key={option}
                      $active={option === selected}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </S.DropdownItem>
                  ))}
                </S.DropdownList>
              )}
            </S.DropdownWrap>

            <S.SortRight>
              <span>전체</span>
              <span>›</span>
              <S.Total>24개 제품</S.Total>
            </S.SortRight>
          </S.SortBar>

          <S.SortBottomLine />

          <ShopList />
        </S.Main>
      </S.Container>
    </S.Page>
  );
};

export default ShopContainer;
