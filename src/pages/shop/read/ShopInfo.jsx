import React from "react";
import S from "./style.js";

const ShopInfo = () => {
  return (
    <>
      <S.InfoTextWrap>
        <S.InfoKicker>따뜻하고 포근한 솜이 인형</S.InfoKicker>
        <S.InfoTitle>솜이 인형</S.InfoTitle>
        <S.InfoDesc>
          따뜻하고 포근함을 주는 귀여운 솜이 인형을 소개합니다.
        </S.InfoDesc>
      </S.InfoTextWrap>

      <S.InfoImage>
        <img src="/assets/images/shop_detailSub_doll.png" alt="상품 상세 이미지" />
      </S.InfoImage>

      <S.InfoImage>
        <img src="/assets/images/shop_detailSub_doll2.png" alt="상품 상세 이미지2" />
      </S.InfoImage>

      <S.InfoImage>
        <img src="/assets/images/shop_detailSub_doll3.png" alt="상품 상세 이미지3" />
      </S.InfoImage>

      <S.InfoImage>
        <img src="/assets/images/shop_detailSub_doll4.png" alt="상품 상세 이미지4" />
      </S.InfoImage>

      {/* ── 상품 정보 섹션 ── */}
      <S.SpecSection>
        <S.SpecTitle>상품정보</S.SpecTitle>

        <S.SpecList>
          <S.SpecRow>
            <S.SpecLabel>무게</S.SpecLabel>
            <S.SpecValue>330g</S.SpecValue>
          </S.SpecRow>

          <S.SpecRow>
            <S.SpecLabel>제품 크기</S.SpecLabel>
            <S.SpecValue>270 × 350 × 200 (mm)</S.SpecValue>
          </S.SpecRow>

          <S.SpecRow>
            <S.SpecLabel>재질</S.SpecLabel>
            <S.SpecValue>POLYESTER, COTTON</S.SpecValue>
          </S.SpecRow>
        </S.SpecList>
      </S.SpecSection>

      {/* ── 유의사항 카드 ── */}
      <S.CautionBox>
        <S.CautionTitle>유의사항</S.CautionTitle>
        <S.CautionText>
          {`이 제품은 완구가 아닙니다. 어린이나 유아 또는 애완동물이 제품을 빨거나 물어뜯지 않도록 주의하십시오.
          날카로운 제품과 본 제품을 같이 둘 경우 파손의 위험이 있습니다. 제품을 임의로 분해하거나 다른 목적으로 사용하지 마십시오.
          고온 다습한 곳에서의 제품 사용 또는 보관을 피하십시오. 제품이 물에 젖지 않게 주의하십시오.
          제품을 높은 곳에서 떨어뜨리거나 충격을 가하면 제품이 손상될 우려가 있습니다.
          용도 외 사용을 금합니다. 사용자 부주의로 인한 파손 및 불량은 당사에서 책임지지 않습니다.`}
        </S.CautionText>
      </S.CautionBox>
    </>
  );
};

export default ShopInfo;
