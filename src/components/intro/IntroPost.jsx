import React from "react";
import IntroStyle from "./styleIntro";
import { motion } from "framer-motion";

const IntroPost = () => {


    return (
        <IntroStyle.IntroPostWrapper>
            <IntroStyle.IntroPostContainer>
                <IntroStyle.IntroPostTextContainer>
                    <IntroStyle.IntroPostBlueText1>
                        <p>게시판</p>
                    </IntroStyle.IntroPostBlueText1>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                    <IntroStyle.IntroPostText1>
                        <p>오늘의 도전이</p>
                        <p>남긴 흔적을 글로 남겨보세요</p>
                    </IntroStyle.IntroPostText1>
                    </motion.div>
                    <IntroStyle.IntroPostContainer2>
                        <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroPostText2>
                            <p>어디서든 바로 작성</p>
                            <p>별도의 과정 필요 없이</p>
                            <p>바로 작성해보세요</p>
                        </IntroStyle.IntroPostText2>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroPostBord>
                            <img style={{borderRadius:"40px", height:"910px", margin:"0 auto", padding:"0 16px"}} src="/assets/images/intro_post.png" alt="게시판 이미지" />
                        </IntroStyle.IntroPostBord>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroPostText2>
                            <p>내가 자랑하고 싶은 것</p>
                            <p>내가 응원 받고 싶은 것</p>
                            <p>그냥 공유하고 싶은 것 까지</p>
                        </IntroStyle.IntroPostText2>
                        </motion.div>
                    </IntroStyle.IntroPostContainer2>
                    <IntroStyle.IntroPostContainer3>
                        <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <IntroStyle.IntroPostText2>
                            <p>혼자 하더라도 마치 같이 하는 것처럼</p>
                            <p>별도의 절차 없이 오늘의 솜에서 공유해보세요.</p>
                        </IntroStyle.IntroPostText2>
                        </motion.div>
                    </IntroStyle.IntroPostContainer3>
                </IntroStyle.IntroPostTextContainer>
            </IntroStyle.IntroPostContainer>
        </IntroStyle.IntroPostWrapper>
    );
};

export default IntroPost;