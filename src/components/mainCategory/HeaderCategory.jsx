import React from "react";
import CategoryStyle from "./stylecategory";
import { useLocation } from "react-router-dom";

const HeaderCategory = () => {

    const {pathname} = useLocation();

    const isPostActive = pathname === '/main/post/all' || pathname.startsWith("/main/post/")

    return (
        <CategoryStyle.Wrapper>
            <CategoryStyle.Container>
                <CategoryStyle.CategoryBar>
                    <CategoryStyle.CategoryLink to="/main/som/all" >홈</CategoryStyle.CategoryLink>
                    <CategoryStyle.CategoryLink to="/main/my-page/my-som/auth">마이페이지</CategoryStyle.CategoryLink>
                    <CategoryStyle.CategoryLink to="/main/shop">블루코튼 샵</CategoryStyle.CategoryLink>
                    <CategoryStyle.CategoryLink to="/main/post/all" className={isPostActive ? "active" :""}>오늘의 솜</CategoryStyle.CategoryLink>
                    <CategoryStyle.CategoryLink to="/main/map">주변 솜</CategoryStyle.CategoryLink>
                </CategoryStyle.CategoryBar>
            </CategoryStyle.Container>
        </CategoryStyle.Wrapper>

    );
};

export default HeaderCategory;