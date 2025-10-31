import React from "react";
import IntroStyle from "./styleIntro";
import {motion} from "framer-motion";

const IntroGrade = () => {

    return (
        <IntroStyle.IntroGradeWrpper>
            <IntroStyle.IntroGradeContainer>
                <IntroStyle.IntroGradeUpContainer>
                    <IntroStyle.IntroGradeTextContainer>
                        <IntroStyle.IntroGradeBlueText1>
                            <p>등급 ·혜택</p>
                        </IntroStyle.IntroGradeBlueText1>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <IntroStyle.IntroGradeText1>
                                <p>솜을 완료해 등급을</p>
                                <p>올려 다양한 혜택을</p>
                                <p>받으세요!</p>
                            </IntroStyle.IntroGradeText1>
                        </motion.div>
                    </IntroStyle.IntroGradeTextContainer>
                    <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                        <IntroStyle.IntroGradeUpCard>
                            <img src="/assets/images/intro_grade1.png" alt="등급이미지1" />
                        </IntroStyle.IntroGradeUpCard>
                    </motion.div>
                </IntroStyle.IntroGradeUpContainer>
                <IntroStyle.IntroGradeDownContainer>
                    <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                    <IntroStyle.IntroGradeUpCard>
                        <img src="/assets/images/intro_grade2.png" alt="등급이미지2" />
                    </IntroStyle.IntroGradeUpCard>
                    </motion.div>
                    <IntroStyle.IntroGradeTextContainer>
                    <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                        <IntroStyle.IntroGradeText1>
                            <p>솜은 <IntroStyle.IntroGradePinkText1>가볍게</IntroStyle.IntroGradePinkText1>,</p>
                            <p>모임은 <IntroStyle.IntroGradePinkText2>쉽게</IntroStyle.IntroGradePinkText2>,</p>
                            <p>부담은 <IntroStyle.IntroGradePinkText3>적게</IntroStyle.IntroGradePinkText3></p>
                        </IntroStyle.IntroGradeText1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                        <IntroStyle.IntroGradeText2>
                            <p>솜 등급을 올려 혜택을 받아보세요</p>
                            <p>솜을 달성할 때마다 받는 캔디의 양을 늘려</p>
                            <p>다양한 상품들을 구매하는데 사용해보세요!</p>
                        </IntroStyle.IntroGradeText2>
                        </motion.div>
                    </IntroStyle.IntroGradeTextContainer>
                </IntroStyle.IntroGradeDownContainer>
            </IntroStyle.IntroGradeContainer>
        </IntroStyle.IntroGradeWrpper>

    );
};

export default IntroGrade;