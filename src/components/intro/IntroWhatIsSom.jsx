import React from "react";
import IntroStyle from "./styleIntro";

const IntroWhatIsSom = () => {


    return (
        <IntroStyle.WhatIsSomWrap>
            <IntroStyle.WhatIsSomContainer>
                <IntroStyle.WhatIsSomImg src="/assets/images/intro_chs.png"  alt="솜이란?이미지"/>
                <IntroStyle.WhatIsSomTextContainer>
                    <IntroStyle.WhatIsSomText1>
                        부드럽지만 <IntroStyle.WhatIsSomBlueText1>단단한</IntroStyle.WhatIsSomBlueText1> 우리의 도전
                    </IntroStyle.WhatIsSomText1>
                    <IntroStyle.WhatIsSomText2>
                        <IntroStyle.WhatIsSomBlueText2>솜</IntroStyle.WhatIsSomBlueText2>이란?
                    </IntroStyle.WhatIsSomText2>
                    <IntroStyle.WhatIsSomBlueText3>
                        작은 열정들이 모여 서로를 감싸고 다독이는 순간,
                        <p>그 힘은 목표를 향해 나아가는 에너지가 됩니다.</p>
                        <p>따뜻한 과정을 우리는 '솜'이라고 합니다.</p>
                    </IntroStyle.WhatIsSomBlueText3>
                </IntroStyle.WhatIsSomTextContainer>
            </IntroStyle.WhatIsSomContainer>
        </IntroStyle.WhatIsSomWrap>
    );
};

export default IntroWhatIsSom;