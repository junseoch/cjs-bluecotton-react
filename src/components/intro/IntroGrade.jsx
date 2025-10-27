import React from "react";
import IntroStyle from "./styleIntro";

const IntroGrade = () => {

    return (
        <IntroStyle.IntroGradeWrpper>
            <IntroStyle.IntroGradeContainer>
                <IntroStyle.IntroGradeUpContainer>
                    <IntroStyle.IntroGradeTextContainer>
                        <IntroStyle.IntroGradeBlueText1>
                            <p>등급 ·혜택</p>
                        </IntroStyle.IntroGradeBlueText1>
                        <IntroStyle.IntroGradeText1>
                            <p>솜을 완료해 등급을</p>
                            <p>올려 다양한 혜택을</p>
                            <p>받으세요!</p>
                        </IntroStyle.IntroGradeText1>
                    </IntroStyle.IntroGradeTextContainer>
                    <IntroStyle.IntroGradeUpCard>
                        <p>이미지</p>
                    </IntroStyle.IntroGradeUpCard>
                </IntroStyle.IntroGradeUpContainer>
                <IntroStyle.IntroGradeDownContainer>
                    <IntroStyle.IntroGradeUpCard>
                        <p>이미지</p>
                    </IntroStyle.IntroGradeUpCard>
                    <IntroStyle.IntroGradeTextContainer>
                        <IntroStyle.IntroGradeText1>
                            <p>솜은 <IntroStyle.IntroGradePinkText1>가볍게</IntroStyle.IntroGradePinkText1>,</p>
                            <p>모임은 <IntroStyle.IntroGradePinkText2>쉽게</IntroStyle.IntroGradePinkText2>,</p>
                            <p>부담은 <IntroStyle.IntroGradePinkText3>적게</IntroStyle.IntroGradePinkText3></p>
                        </IntroStyle.IntroGradeText1>
                        <IntroStyle.IntroGradeText2>
                            <p>솜 등급을 올려 혜택을 받아보세요</p>
                            <p>솜을 달성할 때마다 받는 캔디의 양을 늘려</p>
                            <p>다양한 상품들을 구매하는데 사용해보세요!</p>
                        </IntroStyle.IntroGradeText2>
                    </IntroStyle.IntroGradeTextContainer>
                </IntroStyle.IntroGradeDownContainer>
            </IntroStyle.IntroGradeContainer>
        </IntroStyle.IntroGradeWrpper>

    );
};

export default IntroGrade;