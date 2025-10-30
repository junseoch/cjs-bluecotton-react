import React from "react";
import IntroStyle from "./styleIntro";
import { motion } from "framer-motion";

const IntroMap = () => {


    return (
        <IntroStyle.IntroMapWrap>
            <IntroStyle.IntroMapContainer>
                <IntroStyle.IntroMapImgAndText>
                    <IntroStyle.IntroMapBlueText1>내 주변 솜찾기</IntroStyle.IntroMapBlueText1>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroMapText1>
                            <p>혼자가 아닌,</p>
                            <p>솜과 솜이 함께 모여</p>
                            <p>솜솜하게</p>
                        </IntroStyle.IntroMapText1>
                    </motion.div>
                     <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroPostBord>
                            <IntroStyle.IntroMapImg src="/assets/images/intro_map.png" alt="지도 이미지" />
                        </IntroStyle.IntroPostBord>
                    </motion.div>
                </IntroStyle.IntroMapImgAndText>
                <IntroStyle.IntroMapImgAndText>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                    <IntroStyle.IntroPostBord>
                        <IntroStyle.IntroMapImg src="/assets/images/intro_map.png" alt="지도 이미지" />
                    </IntroStyle.IntroPostBord>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                    <IntroStyle.IntroMapText2>
                        <p>내 주변에 있는 솜을 1분 만에 확인해보세요!</p>
                        <p>내가 있는 장소에서 가장 가까운 솜과</p>
                        <p>참여가 가능한 솜을 찾아보세요!</p>
                    </IntroStyle.IntroMapText2>
                    </motion.div>
                </IntroStyle.IntroMapImgAndText>
            </IntroStyle.IntroMapContainer>
        </IntroStyle.IntroMapWrap>

    );
};

export default IntroMap;