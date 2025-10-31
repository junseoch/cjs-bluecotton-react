import React from "react";
import IntroStyle from "./styleIntro";

const IntroShop = () => {

    return (
        <IntroStyle.IntroShopWrap>
            <IntroStyle.IntroShopContainer>
                <IntroStyle.IntroShopText1>
                    캔디샵
                </IntroStyle.IntroShopText1>
                <IntroStyle.IntroShopImgcontainer>
                    <IntroStyle.IntroShopImg src="/assets/images/intro_shop.png" alt="캔디샵 이미지" />
                </IntroStyle.IntroShopImgcontainer>
                <IntroStyle.IntroShopTextContainer>
                    <IntroStyle.IntroShopText2>
                        <p>챌린지를 완료해 캔디를 모아</p>
                        <IntroStyle.IntroShopPinkText2>
                            <p>다양한 상품으로 교환해보세요</p>
                        </IntroStyle.IntroShopPinkText2>
                    </IntroStyle.IntroShopText2>
                    <IntroStyle.IntroShopText3>
                        <p>솜을 완료하여 캔디를 받아보세요! 차곡차곡 모인 캔디는 다양한</p>
                        <p>상품과 교환 할 수 있어요. 귀여운 솜이 굿즈부터 기프티콘까지</p>
                        <p>원하는 상품을 골라보세요!</p>
                    </IntroStyle.IntroShopText3>
                </IntroStyle.IntroShopTextContainer>
            </IntroStyle.IntroShopContainer>
        </IntroStyle.IntroShopWrap>
    );
};

export default IntroShop;