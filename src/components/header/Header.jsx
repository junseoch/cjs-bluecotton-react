import React from "react";
import HeaderStyle from './styleHeader.js';
import { useLocation } from "react-router-dom";
import HeaderCategory from "../mainCategory/HeaderCategory.jsx";


const Header = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const isIntroPage = currentPath === '/';
    const isSomePage = currentPath.startsWith("/main/som");
    const isShopPage = currentPath.startsWith("/main/shop");
    const isMyPage = currentPath.startsWith("/main/my-page");
    const isPostPage = currentPath.startsWith("/main/post");
    const isMapPage = currentPath.startsWith("/main/map");

    
    const ShowCategory = (

        <>
            <HeaderStyle.HeaderCategory to='/main/som/all'>솜</HeaderStyle.HeaderCategory>
            <HeaderStyle.HeaderCategory to='/main/shop'>블루코튼 샵</HeaderStyle.HeaderCategory>
            <HeaderStyle.HeaderCategory to='/main/post/all'>게시판</HeaderStyle.HeaderCategory>
        </>
    );

    const ShowSom = (
            <>
            <HeaderStyle.MainLogo to='/'>bule cotton</HeaderStyle.MainLogo>
            <HeaderStyle.Bar >|</HeaderStyle.Bar>
            <HeaderStyle.HeaderSome>솜</HeaderStyle.HeaderSome>
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
            </>
    );

    const ShowIntro = (
        <>
            <HeaderStyle.IntroLogo to='/'>blue cotton</HeaderStyle.IntroLogo>
            {ShowCategory}
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
        </>
    );

    const ShowShop = (
            <>
            <HeaderStyle.MainLogo to='/'>bule cotton</HeaderStyle.MainLogo>
            <HeaderStyle.Bar >|</HeaderStyle.Bar>
            <HeaderStyle.HeaderSome>샵</HeaderStyle.HeaderSome>
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
            </>
    );

    const ShowMyPage = (
            <>
            <HeaderStyle.MainLogo to='/'>bule cotton</HeaderStyle.MainLogo>
            <HeaderStyle.Bar >|</HeaderStyle.Bar>
            <HeaderStyle.HeaderSome>마이페이지</HeaderStyle.HeaderSome>
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
            </>
    );

    const ShowPost = (
            <>
            <HeaderStyle.MainLogo to='/'>bule cotton</HeaderStyle.MainLogo>
            <HeaderStyle.Bar >|</HeaderStyle.Bar>
            <HeaderStyle.HeaderSome>오늘의 솜</HeaderStyle.HeaderSome>
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
            </>
    );

    const ShowMap = (
            <>
            <HeaderStyle.MainLogo to='/'>bule cotton</HeaderStyle.MainLogo>
            <HeaderStyle.Bar >|</HeaderStyle.Bar>
            <HeaderStyle.HeaderSome>주변 솜</HeaderStyle.HeaderSome>
            <HeaderStyle.LoginButton>
                <img  alt="프로필아이콘" />
                로그인
            </HeaderStyle.LoginButton>
            </>
    );

    let currentHeader;

    if(isIntroPage) currentHeader = ShowIntro;
    else if(isSomePage) currentHeader = ShowSom;
    else if(isMyPage) currentHeader = ShowMyPage;
    else if(isShopPage) currentHeader = ShowShop;
    else if(isPostPage) currentHeader = ShowPost;
    else if(isMapPage) currentHeader = ShowMap;
    else currentHeader = ShowIntro;

    return(
        <HeaderStyle.HeaderContainer>
            {currentHeader}
        </HeaderStyle.HeaderContainer>

    );
};

export default Header;