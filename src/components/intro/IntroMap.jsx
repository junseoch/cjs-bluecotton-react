import React from "react";
import IntroStyle from "./styleIntro";

const IntroMap = () => {


    return (
        <IntroStyle.IntroMapWrap>
            <IntroStyle.IntroMapContainer>
                <IntroStyle.IntroMapImgAndText>
                    <IntroStyle.IntroMapBlueText1>내 주변 솜찾기</IntroStyle.IntroMapBlueText1>
                    <IntroStyle.IntroMapText1>
                        <p>혼자가 아닌,</p>
                        <p>솜과 솜이 함께 모여</p>
                        <p>솜솜하게</p>
                    </IntroStyle.IntroMapText1>
                    <IntroStyle.IntroPostBord>
                        <IntroStyle.IntroMapImg src="" alt="지도 이미지" />
                    </IntroStyle.IntroPostBord>
                </IntroStyle.IntroMapImgAndText>
                <IntroStyle.IntroMapImgAndText>
                    <IntroStyle.IntroPostBord>
                        <IntroStyle.IntroMapImg src="" alt="지도 이미지" />
                    </IntroStyle.IntroPostBord>
                    <IntroStyle.IntroMapText2>
                        <p>내 주변에 있는 솜을 1분 만에 확인해보세요!</p>
                        <p>내가 있는 장소에서 가장 가까운 솜과</p>
                        <p>참여가 가능한 솜을 찾아보세요!</p>
                    </IntroStyle.IntroMapText2>
                </IntroStyle.IntroMapImgAndText>
            </IntroStyle.IntroMapContainer>
        </IntroStyle.IntroMapWrap>

    );
};

export default IntroMap;